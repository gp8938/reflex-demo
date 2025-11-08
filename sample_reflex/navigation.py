"""Navigation items for sidebar and routing mapping."""

from __future__ import annotations

from typing import Dict, Callable

import reflex as rx

# Type alias for a zero-arg component factory
ComponentFactory = Callable[[], rx.Component]


NAV_ITEMS = [
    ("Home", "home"),
    ("Contact", "contact"),
    ("Feedback", "feedback"),
    ("Sign Up", "signup"),
    ("Data", "data"),
]
