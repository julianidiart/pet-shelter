const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: null,
  endDate: null,
  calendarDate: null
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    case "SET_CALENDAR_DATE":
      return {
        ...state,
        calendarDate: action.calendarDate
      };
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    default:
      return state;
  }
};
