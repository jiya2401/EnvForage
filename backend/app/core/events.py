import asyncio
from typing import Dict, List, Callable, Awaitable, Any

EventHandler = Callable[[str, Dict[str, Any]], Awaitable[None]]

class EventDispatcher:
    def __init__(self):
        self._listeners: Dict[str, List[EventHandler]] = {}

    def subscribe(self, event_name: str, handler: EventHandler):
        if event_name not in self._listeners:
            self._listeners[event_name] = []
        self._listeners[event_name].append(handler)

    async def dispatch(self, event_name: str, payload: Dict[str, Any]):
        if event_name in self._listeners:
            handlers = self._listeners[event_name]
            tasks = [handler(event_name, payload) for handler in handlers]
            if tasks:
                await asyncio.gather(*tasks, return_exceptions=True)

dispatcher = EventDispatcher()
