import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./User.module.css"

export const User = ({ user }) => {
  const { id } = useParams();

  return (
    <li className={styles.userLi}>
      <Link to={`/${user.id}`}>{user.name}</Link>
    </li>
  );
};
