"""Contact form component."""

from __future__ import annotations

import reflex as rx
from .forms import form_header, form_stack, submit_button


def contact_form(on_submit, loading, result_signal) -> rx.Component:
    """Build the Contact form using reusable helpers.

    Args:
        on_submit: Event handler to trigger on submit.
        loading: Reactive bool indicating submitting state.
        result_signal: Reactive string to display status/result.
    """
    desc = form_header(
        "Contact form",
        [
            "Name: What we should call you.",
            "Email: A valid address so we can reply.",
            "Message: Your question or request.",
        ],
    )
    return form_stack(
        desc,
        rx.input(placeholder="Name"),
        rx.input(placeholder="Email", type="email"),
        rx.text_area(placeholder="Message"),
        submit_button("Submit", on_submit, loading),
        rx.text(result_signal),
    )
