"""Signup form component."""

from __future__ import annotations

import reflex as rx
from .forms import form_header, form_stack, submit_button


def signup_form(on_submit, loading, result_signal) -> rx.Component:
    """Build the Signup form component."""
    desc = form_header(
        "Create an account",
        [
            "Email: We'll use this for login and notifications.",
            "Password: At least 8 characters for security.",
        ],
    )
    return form_stack(
        desc,
        rx.input(placeholder="Email", type="email"),
        rx.input(placeholder="Password", type="password"),
        submit_button("Create Account", on_submit, loading),
        rx.text(result_signal),
    )
