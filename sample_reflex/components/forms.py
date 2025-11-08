"""Reusable form UI helper components for the Sample Reflex app."""

from __future__ import annotations

import reflex as rx

def form_header(title: str, bullets: list[str]) -> rx.Component:
    """Standard header with title, bullet list and a divider."""
    return rx.box(
        rx.heading(title, size="6"),
        *[rx.text(f"• {b}") for b in bullets],
        rx.divider(margin_top="8px"),
        margin_bottom="0.5rem",
    )


def form_stack(*children: rx.Component) -> rx.Component:
    """Consistent vertical form layout used across all forms."""
    return rx.vstack(
        *children,
        spacing="4",
        align_items="stretch",
        width="100%",
    )


def submit_button(label: str, on_click, loading) -> rx.Component:
    """Consistent submit button styling and behavior."""
    return rx.button(label, on_click=on_click, loading=loading)
