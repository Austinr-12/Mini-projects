import pandas as pd
import numpy as np
from scipy import stats

c = ("moved_same_state.csv")
v = ("moved_betweeen_states.csv")

control = pd.read_csv(c)
variant = pd.read_csv(v)

county = pd.DataFrame()
state = pd.DataFrame()
division = pd.DataFrame()
region = pd.DataFrame()

state["Relocated Within State"] = control.groupby("State")["Total Population"].sum()
state["Relocated Between States"] = variant.groupby("State")["Total Population"].sum()

state.head()

cny = state.loc[["California", "New York"]]

cny