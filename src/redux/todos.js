const initialState = {
  todos: [],
  loading: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/load/start":
      return {
        ...state,
        loading: true
      };

    case "todos/load/success":
      return {
        ...state,
        todos: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
