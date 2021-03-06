export function reducer(state, action) {
  switch (action.type) {
    case "multipleTo7":
      return { ...state, number: state.number * 7 };
    case "sendValue":
      return { ...state, number: state.number + action.payload };
    case "fixeInterNumber":
      return { ...state, number: parseInt(state.number) };
    case "divideBy25":
      return { ...state, number: state.number / 25 };
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}