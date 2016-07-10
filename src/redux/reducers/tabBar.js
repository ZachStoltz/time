const initialState = {
  selected: 'home',
};

export default (state = initialState, { type, ...action }) => {
  const { selected } = action;
  switch (type) {
    case 'TOGGLE_TAB':
      return {
        ...state,
        selected,
      };
    default:
      return state;
  }
};
