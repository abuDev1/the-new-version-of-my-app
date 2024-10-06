import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../redux/actions";
import { useParams } from "react-router-dom";
import { Todo } from "./Todo";
import styles from "./Todos.module.css";

export const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      return dispatch(loadTodos(id));
    }
  }, [id]);

  if (id !== undefined) {
    return (
      <ul className={styles.todosUl}>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </ul>
    );
  }
  return <h3>⬅ Выберите пользователя</h3>;
};
