import React from 'react'
import { useSelector } from 'react-redux'
import { User } from './User'
import styles from "./Users.module.css"

export const Users = () => {
    const users = useSelector((state) => state.users.users)


  return (
    <ul className={styles.userUl}>
        {
            users.map((user) => {
                return <User key={user.id} user={user}/>
            })
        }
    </ul>
  )
}
