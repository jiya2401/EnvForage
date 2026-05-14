# ADR-008: Safety Filter Negative Lookahead for Docker Cleanup Commands

## Status
Accepted

## Context
The Safety Filter (`backend/app/templates/safety.py`) uses 15 compiled regex patterns to scan rendered template output for dangerous shell commands before serving scripts to users. During Phase 3 integration testing, the Dockerfile template (`config/dockerfile.j2`) was being blocked by the "Recursive delete of root filesystem" rule.

The offending line was:

```dockerfile
RUN apt-get update && apt-get install -y ... && rm -rf /var/lib/apt/lists/*
```

This is a **standard Docker best practice** — every production Dockerfile cleans up the apt cache to reduce image size. However, the original regex pattern `rm\s+-[rRf]{1,3}\s+/` matched any `rm -rf` followed by a forward slash, which was overly broad.

## Decision
We refined the regex to use a **negative lookahead**:

```python
# Before (overly broad — false positive on Docker cleanup)
r"rm\s+-[rRf]{1,3}\s+/"

# After (precise — only matches actual root deletion)
r"rm\s+-[rRf]{1,3}\s+/(?!\w)"
```

The `(?!\w)` lookahead means the pattern only triggers when `/` is **NOT** followed by a word character. This correctly catches:

| Command | Matched? | Reason |
|---------|----------|--------|
| `rm -rf /` | ✅ Yes | Root deletion (end of line) |
| `rm -rf /*` | ✅ Yes | Root wildcard (`*` is not `\w`) |
| `rm -rf / ` | ✅ Yes | Root with trailing space |
| `rm -rf /var/lib/apt/lists/*` | ❌ No | `v` is a word char — legitimate path |
| `rm -rf /tmp/build` | ❌ No | `t` is a word char — legitimate path |

## Consequences

**Positive:**
- Dockerfile generation now succeeds for all CUDA profiles that include apt cleanup.
- No reduction in real security — actual root deletion is still blocked.
- Pattern remains simple and auditable (single negative lookahead).

**Negative:**
- Edge case: `rm -rf /` with a tab character after it would still be blocked (tabs are not `\w`), which is the desired behavior.

## Related ADRs
- [ADR-003: Jinja2 Template Engine](./ADR-003-jinja2-template-engine.md) (the template engine whose output this filter validates).
