import axios from "axios";
import Swal from "sweetalert2";

export const getApplications = data => {
  return {
    type: "GET_APPLICATIONS",
    payload: data
  };
};

export const startGetApplications = () => {
  return async dispatch => {
    try {
      const applications = await axios.get(
        "http://localhost:3050/users/application-forms"
      );
      const data = applications.data;
      dispatch(getApplications(data));
    } catch (err) {
      Swal.fire("Oops..!!", `${err}`, "error");
    }
  };
};

export const addApplication = data => {
  return {
    type: "ADD_APPLICATION",
    payload: data
  };
};

export const startAddApplication = formData => {
  return async dispatch => {
    try {
      const application = await axios.post(
        "http://localhost:3050/users/application-form",
        formData
      );
      if (application.data.hasOwnProperty("errors")) {
        Swal.fire(
          "Oops..!!",
          `${application.data.errors.name.message}`,
          "error"
        );
      } else {
        const data = application.data;
        console.log(data);
        Swal.fire(
          "Yay great",
          `Successfully applied for ${data.jobTitle}, Thank You! `,
          "success"
        );
        dispatch(addApplication(data));
      }
    } catch (err) {
      Swal.fire("Oops..!!", `${err}`, "error");
    }
  };
};

export const updateApplication = data => {
  return {
    type: "UPDATE_APPLICATION",
    payload: data
  };
};

export const startUpdateApplication = (formData, id) => {
  return async dispatch => {
    try {
      const application = await axios.put(
        `http://localhost:3050/users/application-form/update/${id}`,
        formData
      );
      if (application.data.hasOwnProperty("errors")) {
        Swal.fire(
          "Ooops..!!",
          `${application.data.erroes.name.message}`,
          "error"
        );
      } else {
        const data = application.data;
        console.log(data);
        Swal.fire(
          `${data.status}!!!`,
          `Application has been ${data.status} successfully.`,
          "success"
        );
        dispatch(updateApplication(data));
      }
    } catch (err) {
      Swal.fire("Oops..!!", `${err}`, "error");
    }
  };
};
