import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import Switch from "react-switch";
import FileUploader from "react-firebase-file-uploader";
import { imageStorage } from "../../firebase";

import Loading from "../Loading";

export default class PetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pet && props.pet.name ? props.pet.name : "",
      birthdate:
        props.pet && props.pet.birthdate
          ? moment(props.pet.birthdate)
          : moment(),
      chip: props.pet && props.pet.chip ? props.pet.chip : "",
      place: props.pet && props.pet.place ? props.pet.place : "",
      sex: props.pet && props.pet.sex ? props.pet.sex : "m",
      breed: props.pet && props.pet.breed ? props.pet.breed : "Meticcio",
      sterilized:
        props.pet && props.pet.sterilized ? props.pet.sterilized : false,
      color: props.pet && props.pet.color ? props.pet.color : "",
      size: props.pet && props.pet.size ? props.pet.size : "s",
      avatarURL: props.pet && props.pet.avatarURL ? props.pet.avatarURL : "",
      adopted: props.pet && props.pet.adopted ? props.pet.adopted : false,
      passedAway:
        props.pet && props.pet.passedAway ? props.pet.passedAway : false,
      comments: props.pet && props.pet.comments ? props.pet.comments : "",
      avatarIsUploading: false,
      calendarFocused: false,
      error: ""
    };
  }

  onInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(() => ({ [name]: value }));
  };

  onDateChange = birthdate => {
    if (birthdate) {
      this.setState(() => ({ birthdate }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onChangeSterilized = sterilized => {
    this.setState(() => ({ sterilized }));
  };

  onChangeAdopted = adopted => {
    this.setState(() => ({ adopted }));
  };

  onChangePassedAway = passedAway => {
    this.setState(() => ({ passedAway }));
  };

  handleUploadSuccess = filename => {
    imageStorage
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url, avatarIsUploading: false }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name) {
      const error = "";
      this.setState(() => ({ error }));
      this.props.onSubmit({
        name: this.state.name,
        birthdate: this.state.birthdate.valueOf(),
        chip: this.state.chip,
        place: this.state.place,
        sex: this.state.sex,
        breed: this.state.breed,
        sterilized: this.state.sterilized,
        size: this.state.size,
        color: this.state.color,
        avatarURL: this.state.avatarURL,
        adopted: this.state.adopted,
        passedAway: this.state.passedAway,
        comments: this.state.comments
      });
    } else {
      const error = "The pet should have a name!";
      this.setState(() => ({ error }));
    }
  };

  render() {
    const duration = moment.duration(
      moment().diff(moment(this.state.birthdate))
    );
    const years =
      duration.years() > 0
        ? duration.years() + " year" + (duration.years() > 1 ? "s " : " ")
        : "";
    const months =
      duration.months() > 0
        ? duration.months() + " month" + (duration.months() > 1 ? "s " : " ")
        : "";
    const days =
      duration.days() > 0
        ? duration.days() + " day" + (duration.days() > 1 ? "s" : "")
        : "";
    const age = years + months + days;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="form__divided">
          <div className="form__image-container">
            {this.state.avatarURL ? (
              <img
                className="input-group__image"
                src={this.state.avatarURL}
                alt={this.state.name + " avatar image"}
              />
            ) : this.state.avatarIsUploading ? (
              <Loading />
            ) : (
              <span>No image selected!</span>
            )}
          </div>
          <div>
            <div className="input-group__item">
              <FileUploader
                accept="image/*"
                name="avatarURL"
                randomizeFilename
                storageRef={imageStorage}
                onUploadStart={() => this.setState({ avatarIsUploading: true })}
                onUploadError={error => {
                  this.setState({ avatarIsUploading: false, error });
                }}
                onUploadSuccess={this.handleUploadSuccess}
              />
            </div>
            <div className="input-group__item">
              <input
                autoFocus
                onChange={this.onInputChange}
                placeholder="Name"
                className="text-input"
                type="text"
                value={this.state.name}
                name="name"
              />
            </div>
            <div className="input-group__item">
              <SingleDatePicker
                date={this.state.birthdate}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                displayFormat={() => "DD/MM/YYYY"}
              />
            </div>
            {age.length > 0 ? (
              <div className="input-group__item">
                <span>Age: {age}</span>
              </div>
            ) : null}
            <div className="input-group__item">
              <select
                className="select"
                value={this.state.sex}
                onChange={this.onInputChange}
                name="sex"
              >
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <div className="input-group__item">
              <select
                className="select"
                value={this.state.size}
                onChange={this.onInputChange}
                name="size"
              >
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
              </select>
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                onChange={this.onInputChange}
                placeholder="Breed"
                type="text"
                value={this.state.breed}
                name="breed"
              />
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                onChange={this.onInputChange}
                placeholder="Color"
                type="text"
                value={this.state.color}
                name="color"
              />
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                onChange={this.onInputChange}
                placeholder="Chip"
                type="text"
                value={this.state.chip}
                name="chip"
              />
            </div>
            <div className="input-group__item">
              <input
                className="text-input"
                onChange={this.onInputChange}
                placeholder="Place"
                type="text"
                value={this.state.place}
                name="place"
              />
            </div>
            <div className="input-group__item">
              <label style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "1.2rem" }}>Sterilized: </span>
                <Switch
                  onChange={this.onChangeSterilized}
                  checked={this.state.sterilized}
                />
              </label>
            </div>
            <div className="input-group__item">
              <label style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "1.2rem" }}>Adopted: </span>
                <Switch
                  onChange={this.onChangeAdopted}
                  checked={this.state.adopted}
                />
              </label>
            </div>
            <div className="input-group__item">
              <label style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "1.2rem" }}>Passed away: </span>
                <Switch
                  onChange={this.onChangePassedAway}
                  checked={this.state.passedAway}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="input-group__item">
          <textarea
            className="textarea-input"
            onChange={this.onInputChange}
            placeholder="Comments"
            type="text"
            value={this.state.comments}
            name="comments"
            rows="3"
          />
        </div>
        <div>
          <button className="button">Save Pet</button>
        </div>
      </form>
    );
  }
}
