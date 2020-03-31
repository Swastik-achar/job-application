const applicationInitiaState = [];

const applicationsReducer = (state = applicationInitiaState, action) => {
  switch (action.type) {
    case "GET_APPLICATIONS": {
      return state.concat(action.payload);
    }
    case "ADD_APPLICATION": {
      return state.concat(action.payload);
    }
    case "UPDATE_APPLICATION": {
      return state.map(application => {
        console.log(action.payload);
        if (application._id == action.payload._id) {
          return action.payload;
        } else {
          return application;
        }
      });
    }
    default: {
      return [...state];
    }
  }
};
export default applicationsReducer;
