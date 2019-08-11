import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  setStartDate,
  setEndDate,
  setFilter
} from "../../../actions/filters";

export class PetsListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onFilterChange = e => {
    this.props.setFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search pets..."
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.filter}
              onChange={this.onFilterChange}
            >
              <option value="">Ready for adoption</option>
              <option value="sterilized">Sterilized</option>
              <option value="non-sterilized">Non sterilized</option>
              <option value="chipped">Chipped</option>
              <option value="non-chipped">Non chipped</option>
              <option value="adopted">Adopted</option>
              <option value="passed-away">Passed away</option>
            </select>
          </div>
          {/* <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
            </select>
          </div> */}
          <div className="input-group__item">
            <DateRangePicker
              startDateId="startDate"
              startDate={this.props.filters.startDate}
              endDateId="endDate"
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              displayFormat="DD/MM/YYYY"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsListFilters);
