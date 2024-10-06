import React from "react";

export const loadUsers = () => {
  return (dispatch) => {
    dispatch({
      type: "users/load/start",
    });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "users/load/success",
          payload: data,
        });
      });
  };
};

export const loadTodos = (id) => {
  return (dispatch) => {
    dispatch({
      type: "todos/load/start"
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "todos/load/success",
          payload: data
        });
      });
  };
};
