"""Data access layer for the app.

Provides lazy, cached loaders so UI modules don't perform I/O at import time.
"""

from __future__ import annotations

from functools import lru_cache
from pathlib import Path
import pandas as pd  # type: ignore


_CSV_PATH = (Path(__file__).resolve().parent.parent / "assets" / "users.csv")


@lru_cache(maxsize=None)
def get_users_df() -> pd.DataFrame:
    """Load and cache the users CSV as a pandas DataFrame.

    Returns an empty DataFrame if the file is missing or unreadable.
    """
    try:
        return pd.read_csv(_CSV_PATH)
    except Exception:
        # Fail-soft: return empty DataFrame to allow UI to render gracefully.
        return pd.DataFrame()
