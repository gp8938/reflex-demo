# Sample Reflex App

This project is a small Reflex app demonstrating a clean structure for forms, routing, and data display. It hides most Reflex boilerplate behind small, reusable helpers and a simple state model.

## What’s inside

- `rxconfig.py` – App config and plugins.
- `requirements.txt` – Dependencies (pandas, reflex).
- `assets/users.csv` – Sample data for the Data view.
- `sample_reflex/` – App source code
  - `sample_reflex.py` – Main page, state, routing, and layout
  - `data.py` – Lazy, cached CSV loader
  - `components/` – Reusable UI parts
    - `forms.py` – Shared form helpers (header/stack/button)
    - `contact.py` / `feedback.py` / `signup.py` – Individual form components
  - `navigation.py` – Centralized nav items used by sidebar

## Key ideas

- Flat routing: a `routes` dict and `render_view(...)` replace nested conditionals.
- Separation of concerns: data loading lives in `sample_reflex/data.py`, core layout in `sample_reflex/sample_reflex.py`, UI helpers and forms under `sample_reflex/components/`.
- Reusable UI helpers: `form_header`, `form_stack`, and `submit_button` remove form duplication; form components live alongside helpers.
- Gentle state: one `State` class manages current view and per‑form submission/result flags.

## Run locally

1. Create/activate a virtual environment (optional but recommended):

    ```bash
    python -m venv .venv
    source .venv/bin/activate
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Start Reflex dev server:

    ```bash
    reflex run
    ```

## Code walkthrough

- State and events live in `sample_reflex/sample_reflex.py` in the `State` class. Each form has an async submit handler that updates a result string and a `submitting_*` flag.
- The main `index()` function constructs the page: a left sidebar for navigation and a right content area that renders the current view using `render_view(State.current_view, routes, data_view)`.
- The data table view calls `data.get_users_df()` to load the CSV lazily when needed.

## Adding another form (example)

Suppose we want to add a simple “Support” form with subject and details.

1. Add a submit event to `State` (keep it simple, modeled after the existing ones):

    ```python
    class State(rx.State):
       support_result: str = ""
       submitting_support: bool = False

       @rx.event
       async def submit_support(self):
           if self.submitting_support:
               return
           self.submitting_support = True
           self.support_result = "Connecting to service..."
           yield
           try:
               await asyncio.sleep(0.5)
               self.support_result = "Support ticket created."
           finally:
               self.submitting_support = False
               yield
   ```

2. Create the form UI under `sample_reflex/components/support.py` using the helpers:

   ```python
   # sample_reflex/components/support.py
   import reflex as rx
   from .forms import form_header, form_stack, submit_button

   def support_form(on_submit, loading, result_signal) -> rx.Component:
       desc = form_header(
           "Support",
           [
               "Subject: A brief summary of your issue.",
               "Details: What happened and what you expected.",
           ],
       )
       return form_stack(
           desc,
           rx.input(placeholder="Subject"),
           rx.text_area(placeholder="Details"),
           submit_button("Create Ticket", on_submit, loading),
           rx.text(result_signal),
       )
   ```

3. Register the view in the routing map inside `index()` (import the component and pass state signals):

    ```python
   from sample_reflex.components.support import support_form as support_component

   routes = {
       "home": home_panel,
       "contact": contact_form,
       "feedback": feedback_form,
       "signup": signup_form,
       "data": data_view,
       # pass State handlers/flags to the component
       "support": lambda: support_component(
           State.submit_support,
           State.submitting_support,
           State.support_result,
       ),
   }
   ```

4. Add a nav item in `sample_reflex/navigation.py` so the sidebar picks it up automatically:

    ```python
    NAV_ITEMS = [
         ("Home", "home"),
         ("Contact", "contact"),
         ("Feedback", "feedback"),
         ("Sign Up", "signup"),
         ("Data", "data"),
         ("Support", "support"),  # new
    ]
    ```

5. Add a small view method to `State` (optional but consistent with existing):

    ```python
    def view_support(self):
       self.current_view = "support"
   ```

That’s it—your new form follows the same pattern with minimal boilerplate.

## Tips

- Keep form specifics (fields, copy) in the form function; reuse the helpers for layout and buttons.
- If forms get more complex, consider splitting each into its own module under a `components/` folder and moving the helpers there too.
- For real integrations, replace the staged `asyncio.sleep` calls with your I/O and keep the user updates (message strings) for good UX.

## License

This sample is provided as-is for learning purposes.
