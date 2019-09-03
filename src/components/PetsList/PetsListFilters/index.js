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
import LanguageContext from "../../../contexts/LanguageContext";

export class PetsListFilters extends React.Component {
  static contextType = LanguageContext;

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

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder={this.multiLanguageText({
                en: "Search pet...",
                it: "Cerca animali...",
                es: "Buscar mascotas..."
              })}
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
              <option value="">
                {this.multiLanguageText({
                  en: "Ready for adoption",
                  it: "Pronto per l'adozione",
                  es: "Listo para adoptar"
                })}
              </option>
              <option value="sterilized">
                {this.multiLanguageText({
                  en: "Sterilized",
                  it: "Sterilizzato",
                  es: "Esterilizado"
                })}
              </option>
              <option value="non-sterilized">
                {this.multiLanguageText({
                  en: "Not sterilized",
                  it: "Non sterilizzato",
                  es: "No esterilizado"
                })}
              </option>
              <option value="chipped">
                {this.multiLanguageText({
                  en: "Chipped",
                  it: "Chippato",
                  es: "Con chip"
                })}
              </option>
              <option value="non-chipped">
                {this.multiLanguageText({
                  en: "Not chipped",
                  it: "Non chippato",
                  es: "Sin chip"
                })}
              </option>
              <option value="adopted">
                {this.multiLanguageText({
                  en: "Adopted",
                  it: "Adottato",
                  es: "Adoptado"
                })}
              </option>
              <option value="passed-away">
                {this.multiLanguageText({
                  en: "Passed away",
                  it: "Deceduto",
                  es: "Fallecido"
                })}
              </option>
            </select>
          </div>
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
              startDatePlaceholderText={this.multiLanguageText({
                en: "Start Date",
                it: "Data Inizio",
                es: "Fecha Inicio"
              })}
              endDatePlaceholderText={this.multiLanguageText({
                en: "End Date",
                it: "Data Fine",
                es: "Fecha Fin"
              })}
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
