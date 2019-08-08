import React from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import { setTextFilter, setCalendarDate } from "../../../actions/filters";

export class VolunteersListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onClickDay = value => {
    const calendarDate = moment(value).isSame(
      this.props.filters.calendarDate,
      "day"
    )
      ? null
      : value;
    this.props.setCalendarDate(calendarDate);
  };
  tileContent = ({ date, view }) => {
    const calendarDate = moment(date);
    const volunteersCount = this.props.volunteers.filter(volunteer => {
      const { arrivalDate, depatureDate } = volunteer;
      return calendarDate.isBetween(
        moment(arrivalDate),
        moment(depatureDate),
        "day",
        "[]"
      );
    }).length;
    return view === "month" ? " (" + volunteersCount + ")" : null;
  };
  tileClassName = ({ date, view }) => {
    const calendarDate = moment(date);
    const volunteersCount = this.props.volunteers.filter(volunteer => {
      const { arrivalDate, depatureDate } = volunteer;
      return calendarDate.isBetween(
        moment(arrivalDate),
        moment(depatureDate),
        "day",
        "[]"
      );
    }).length;
    let calendarDayClass = "react-calendar__month-view__days__day--";
    if (volunteersCount === 0) {
      calendarDayClass += "empty";
    } else if (volunteersCount === 1) {
      calendarDayClass += "some";
    } else if (volunteersCount === 2) {
      calendarDayClass += "some-dark";
    } else if (volunteersCount === 3) {
      calendarDayClass += "full";
    } else {
      calendarDayClass += "full-dark";
    }
    return view === "month" ? calendarDayClass : null;
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder="Search volunteers..."
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <Calendar
          tileContent={this.tileContent}
          tileClassName={this.tileClassName}
          onClickDay={this.onClickDay}
          value={this.props.filters.calendarDate}
          maxDetail="month"
          minDetail="year"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volunteers: state.volunteers,
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setCalendarDate: calendarDate => dispatch(setCalendarDate(calendarDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteersListFilters);
