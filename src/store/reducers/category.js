import { ADD_CATEGORY } from "../actions/actionTypes";

const categoryReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY: {
      return [...payload.categories];
    }

    default: {
      return state;
    }
  }
};

export default categoryReducer;
