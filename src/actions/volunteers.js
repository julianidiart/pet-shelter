import database from "../firebase";
import moment from "moment";

// ADD_VOLUNTEER
export const addVolunteer = volunteer => ({
  type: "ADD_VOLUNTEER",
  volunteer
});

export const startAddVolunteer = (volunteerData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = "",
      arrivalDate = moment(0).valueOf(),
      depatureDate = moment(0).valueOf(),
      country = ""
    } = volunteerData;
    const volunteer = { name, arrivalDate, depatureDate, country };
    return database
      .ref(`users/${uid}/volunteers`)
      .push(volunteer)
      .then(ref => {
        dispatch(addVolunteer({ id: ref.key, ...volunteer }));
      });
  };
};

// REMOVE_VOLUNTEER
export const removeVolunteer = ({ id } = {}) => ({
  type: "REMOVE_VOLUNTEER",
  id
});

export const startRemoveVolunteer = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/volunteers/${id}`)
      .remove()
      .then(() => {
        dispatch(removeVolunteer({ id }));
      });
  };
};

// EDIT_VOLUNTEER
export const editVolunteer = (id, updates) => {
  return {
    type: "EDIT_VOLUNTEER",
    id,
    updates
  };
};

export const startEditVolunteer = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/volunteers/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editVolunteer(id, updates));
      });
  };
};

// SET_VOLUNTEER
export const setVolunteers = volunteers => ({
  type: "SET_VOLUNTEERS",
  volunteers
});

export const startSetVolunteers = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/volunteers`)
      .once("value")
      .then(snapshot => {
        const volunteers = [];

        snapshot.forEach(childSnapshot => {
          volunteers.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setVolunteers(volunteers));
      });
  };
};
