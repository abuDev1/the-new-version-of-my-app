import React from 'react'
import styles from "./Todo.module.css"

export const Todo = ({todo}) => {
  return (
    <li className={styles.todoLi}>
        {todo.title}
    </li>
  )
}
