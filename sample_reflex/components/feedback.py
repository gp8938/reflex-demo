"""Feedback form component."""

from __future__ import annotations

import reflex as rx
from .forms import form_header, form_stack, submit_button


def feedback_form(on_submit, loading, result_signal) -> rx.Component:
    """Build the Feedback form component."""
    desc = form_header(
        "Feedback",
        [
            "Rating: 1 (poor) to 10 (excellent).",
            "Comments: Optional details to help us improve.",
        ],
    )
    return form_stack(
        desc,
        rx.slider(default_value=5, min=1, max=10, step=1),
        rx.text_area(placeholder="Comments"),
        submit_button("Send Feedback", on_submit, loading),
        rx.text(result_signal),
    )
