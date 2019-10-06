import React from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import moment from "moment";
import Switch from "react-switch";
import {
  setTextFilter,
  setCalendarDate,
  setStartDate
} from "../../../actions/filters";
import LanguageContext from "../../../contexts/LanguageContext";
import MultiLanguageText from "../../MultiLanguageText";

export class VolunteersListFilters extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      nextVolunteers: false
    };
  }

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

  multiLanguageText = text => {
    switch (this.context.language) {
      case "en":
        return text.en;
      case "it":
        return text.it;
      case "es":
        return text.es;
      default:
        return text;
    }
  };

  onChangeNextVolunteers = nextVolunteers => {
    this.setState(() => ({ nextVolunteers }));
    if (nextVolunteers) {
      this.props.setStartDate(moment(new Date().setHours(0, 0, 0, 0)));
    } else {
      this.props.setStartDate(null);
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder={this.multiLanguageText({
              en: "Search volunteers...",
              it: "Cerca volontari...",
              es: "Buscar voluntarios..."
            })}
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <label
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <span style={{ marginRight: "1.2rem" }}>
            <MultiLanguageText
              en="Show only upcoming volunteers"
              it="Mostrare solo i volontari in arrivo"
              es="Mostrar sólo próximos voluntarios"
            />
            :{" "}
          </span>
          <Switch
            onChange={this.onChangeNextVolunteers}
            checked={this.state.nextVolunteers}
          />
        </label>
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
  setCalendarDate: calendarDate => dispatch(setCalendarDate(calendarDate)),
  setStartDate: startDate => dispatch(setStartDate(startDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteersListFilters);
