import { counter } from "../action-type";

// export default function reducer(state, action) {
//   switch (action.type) {
//     case counter.INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case counter.DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// }

const initialState = { firstCounter: 1, secondCounter: 2, thirdCounter: 3 };

// reducer配置
const handers = {
  [counter.INCREMENT]: (state, action) => ({
    ...state,
    [action.payload]: state[action.payload] + 1,
  }),

  [counter.DECREMENT]: (state, action) => ({
    ...state,
    [action.payload]: state[action.payload] - 1,
  }),
};

// reducer
export default function (state = initialState, action) {
  const hander = handers[action.type];
  if (!hander) {
    return state;
  }

  return hander(state, action);
}
