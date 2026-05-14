"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { api } from "../../services/api";
import { Profile } from "../../types";
import { Search, Filter, Server, Cpu } from "lucide-react";

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [osFilter, setOsFilter] = useState("ALL");

  useEffect(() => {
    async function loadProfiles() {
      try {
        const data = await api.getProfiles();
        setProfiles(data);
      } catch (err) {
        console.error("Failed to load profiles", err);
      } finally {
        setLoading(false);
      }
    }
    loadProfiles();
  }, []);

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || (p.description || '').toLowerCase().includes(search.toLowerCase());
    const matchesOs = osFilter === "ALL" || p.os_support.includes(osFilter);
    return matchesSearch && matchesOs;
  });

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Environment Profiles</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Select a deterministic environment profile. Each profile maps exactly to verified CUDA and Python frameworks.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.5rem 1rem', flexGrow: 1 }}>
          <Search size={20} color="var(--text-muted)" style={{ marginRight: '0.75rem' }} />
          <input 
            type="text" 
            placeholder="Search profiles..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '1rem', fontFamily: 'var(--font-sans)' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={20} color="var(--text-muted)" />
          <select 
            value={osFilter}
            onChange={(e) => setOsFilter(e.target.value)}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
          >
            <option value="ALL">All OS</option>
            <option value="LINUX">Linux</option>
            <option value="WSL">WSL</option>
            <option value="WIN">Windows</option>
          </select>
        </div>
      </div>

      {/* Profile Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <Server size={32} />
          </motion.div>
          <p>Loading profiles from API...</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredProfiles.map((profile, index) => (
            <motion.div 
              key={profile.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/profiles/${profile.slug}`} style={{ display: 'block', height: '100%' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all var(--transition-fast)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem' }}>{profile.name}</h2>
                    {profile.cuda_required && (
                      <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--brand-accent)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                        CUDA
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.5 }}>
                    {profile.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {(profile.tags || []).map(tag => (
                      <span key={tag} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '0.2rem 0.6rem', borderRadius: '99px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Cpu size={14} />
                      {profile.python_versions.length} Py Versions
                    </div>
                    <div style={{ color: 'var(--brand-primary)', fontSize: '0.85rem', fontWeight: 500 }}>
                      Configure →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
      
      {!loading && filteredProfiles.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          <p>No profiles found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
