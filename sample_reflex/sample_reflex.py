"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
import asyncio
from rxconfig import config
from sample_reflex import data  # central data access
from sample_reflex.components.contact import contact_form as contact_component
from sample_reflex.components.feedback import feedback_form as feedback_component
from sample_reflex.components.signup import signup_form as signup_component
from sample_reflex.navigation import NAV_ITEMS

class State(rx.State):
    """Reactive application state.

    Manages view navigation and per-form submission status/messages. Methods
    decorated with @rx.event are event handlers called from UI components.
    """

    current_view: str = "home"
    # Shared result (legacy), plus per-form results for clearer UX.
    last_result: str = ""
    contact_result: str = ""
    feedback_result: str = ""
    signup_result: str = ""
    submitting_contact: bool = False
    submitting_feedback: bool = False
    submitting_signup: bool = False

    @rx.event
    async def submit_contact(self):
        """Simulate submitting the contact form with staged progress updates.

        Uses yields between updates so the UI can re-render while awaiting.
        """
        if self.submitting_contact:
            return

        self.submitting_contact = True
        # Keep legacy field updated, but prefer contact_result in UI.
        self.last_result = "Submitting contact..."
        self.contact_result = "Connecting to service..."
        yield
        try:
            # Example staged progress updates. Replace with real awaits.
            await asyncio.sleep(0.4)
            self.contact_result = "Uploading data..."
            yield

            # Wrap long awaits with a timeout to avoid indefinite spinners.
            await asyncio.wait_for(asyncio.sleep(1.2), timeout=15)

            self.contact_result = "Processing response..."
            yield

            await asyncio.sleep(0.4)
            self.contact_result = "Contact form submitted."
            self.last_result = self.contact_result
        except asyncio.TimeoutError:
            self.contact_result = "Request timed out. Please retry."
            self.last_result = self.contact_result
        except Exception as e:  # noqa: BLE001 - broad for user feedback in demo
            self.contact_result = f"Error: {type(e).__name__}"
            self.last_result = self.contact_result
        finally:
            self.submitting_contact = False
            # Ensure UI reflects final state even on error.
            yield

    @rx.event
    async def submit_feedback(self):
        """Simulate submitting the feedback form with staged progress updates."""
        if self.submitting_feedback:
            return

        self.submitting_feedback = True
        self.last_result = "Submitting feedback..."
        self.feedback_result = "Connecting to service..."
        yield
        try:
            await asyncio.sleep(0.4)
            self.feedback_result = "Uploading feedback..."
            yield

            await asyncio.wait_for(asyncio.sleep(1.2), timeout=15)

            self.feedback_result = "Processing response..."
            yield

            await asyncio.sleep(0.4)
            self.feedback_result = "Feedback received. Thank you!"
            self.last_result = self.feedback_result
        except asyncio.TimeoutError:
            self.feedback_result = "Request timed out. Please retry."
            self.last_result = self.feedback_result
        except Exception as e:  # noqa: BLE001
            self.feedback_result = f"Error: {type(e).__name__}"
            self.last_result = self.feedback_result
        finally:
            self.submitting_feedback = False
            yield

    @rx.event
    async def submit_signup(self):
        """Simulate submitting the signup form with staged progress updates."""
        if self.submitting_signup:
            return

        self.submitting_signup = True
        self.last_result = "Submitting signup..."
        self.signup_result = "Connecting to service..."
        yield
        try:
            await asyncio.sleep(0.4)
            self.signup_result = "Creating account..."
            yield

            await asyncio.wait_for(asyncio.sleep(1.2), timeout=15)

            self.signup_result = "Finalizing setup..."
            yield

            await asyncio.sleep(0.4)
            self.signup_result = "Account created successfully."
            self.last_result = self.signup_result
        except asyncio.TimeoutError:
            self.signup_result = "Request timed out. Please retry."
            self.last_result = self.signup_result
        except Exception as e:  # noqa: BLE001
            self.signup_result = f"Error: {type(e).__name__}"
            self.last_result = self.signup_result
        finally:
            self.submitting_signup = False
            yield

    def view_home(self):
        """Switch to the Home view."""
        self.current_view = "home"

    def view_contact(self):
        """Switch to the Contact form view."""
        self.current_view = "contact"

    def view_feedback(self):
        """Switch to the Feedback form view."""
        self.current_view = "feedback"

    def view_signup(self):
        """Switch to the Sign Up form view."""
        self.current_view = "signup"

    def view_data(self):
        """Switch to the Data (CSV table) view."""
        self.current_view = "data"

    # Note: Data now loaded lazily via sample_reflex.data.get_users_df()


def render_view(view_value, routes: dict, default_factory):
    """Return a component based on the current view using a flat conditional chain.

    This avoids deeply nested rx.cond by folding a routes mapping into a single
    readable expression. `routes` maps view names to zero-arg component factories.
    """
    comp = default_factory()
    # Build the conditional chain in reverse so the first routes take precedence.
    for name, factory in reversed(list(routes.items())):
        comp = rx.cond(view_value == name, factory(), comp)
    return comp


def home_panel() -> rx.Component:
    """Render the landing content with a link to Reflex docs."""
    return rx.vstack(
        rx.heading("Welcome to Reflex!", size="9"),
        rx.text(
            "Get started by editing ",
            rx.code(f"{config.app_name}/{config.app_name}.py"),
            size="5",
        ),
        rx.link(
            rx.button("Check out our docs!"),
            href="https://reflex.dev/docs/getting-started/introduction/",
            is_external=True,
        ),
        spacing="5",
        justify="center",
        min_height="85vh",
    )


# Reusable form UI helpers are imported from sample_reflex.components.forms


def contact_form() -> rx.Component:
    """Render the Contact form UI and status message (componentized)."""
    return contact_component(State.submit_contact, State.submitting_contact, State.contact_result)


def feedback_form() -> rx.Component:
    """Render the Feedback form UI and status message (componentized)."""
    return feedback_component(State.submit_feedback, State.submitting_feedback, State.feedback_result)


def signup_form() -> rx.Component:
    """Render the Sign Up form UI and status message (componentized)."""
    return signup_component(State.submit_signup, State.submitting_signup, State.signup_result)


def data_view() -> rx.Component:
    """Display CSV data using rx.data_table with pandas DataFrame, search, sort, and pagination."""
    users_df = data.get_users_df()
    if getattr(users_df, "empty", False):
        return rx.vstack(
            rx.heading("User Data", size="6"),
            rx.text("No data found in CSV."),
            spacing="4",
            align_items="stretch",
            width="100%",
        )

    table_component = (
        rx.data_table(
            data=users_df,  # columns already set
            pagination=True,
            search=True,
            sort=True,
            resizable=False,

        )
    )

    return rx.vstack(
        rx.heading("User Data", size="6"),
        rx.text("Sample user accounts loaded from CSV."),
        table_component,
        spacing="4",
        align_items="stretch",
        width="100%",
    )


 


def sidebar() -> rx.Component:
    """Sidebar menu to switch right-panel content."""
    def nav_button(label: str, view: str, handler) -> rx.Component:
        """Navigation button with active-state styling and click handler."""
        return rx.button(
            label,
            variant=rx.cond(State.current_view == view, "solid", "soft"),
            on_click=handler,
            width="100%",
            justify_content="flex-start",
        )

    # Build nav buttons from a single source of truth (NAV_ITEMS)
    items = [
        nav_button(label, view, getattr(State, f"view_{view}")) for label, view in NAV_ITEMS
    ]

    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.icon(tag="star", size=24, color="gold"),
                rx.heading("Menu", size="6"),
                spacing="2",
                align_items="center",
            ),
            *items,
            spacing="3",
            align_items="stretch",
        ),
        width="240px",
        padding="1rem",
        border_right="1px solid",
        border_color="gray.200",
        height="100vh",
        position="sticky",
        top="0",
    )


def index() -> rx.Component:
    """Main page layout with sidebar and dynamic content area."""
    # Right panel switches based on current_view (flattened routing)
    routes = {
        "home": home_panel,
        "contact": contact_form,
        "feedback": feedback_form,
        "signup": signup_form,
        "data": data_view,
    }
    content = render_view(State.current_view, routes, data_view)

    centered_panel = rx.flex(
        rx.box(
            content,
            width="100%",
            max_width="720px",
        ),
        justify="center",
        width="100%",
    )

    main_content = rx.container(
        rx.color_mode.button(position="top-right"),
        centered_panel,
        padding="2rem",
        flex="1",
    )

    return rx.hstack(
        sidebar(),
        main_content,
        align_items="stretch",
        width="100%",
    )


app = rx.App()
app.add_page(index)
