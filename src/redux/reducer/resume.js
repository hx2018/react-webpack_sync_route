import { resume } from "../action-type";

const initialState = {
  resumeList: [],
};

const handers = {
  [resume.SET_RESUME_LIST]: (state, action) => ({
    ...state,
    resumeList: action.payload,
  }),
};

export default function (state = initialState, action) {
  if (!handers[action.type]) {
    return state;
  }
  return handers[action.type](state, action);
}
