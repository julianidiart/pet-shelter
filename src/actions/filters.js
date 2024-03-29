// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

// SET_CALENDAR_DATE
export const setCalendarDate = calendarDate => ({
  type: "SET_CALENDAR_DATE",
  calendarDate
});

// SET_FILTER
export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});
