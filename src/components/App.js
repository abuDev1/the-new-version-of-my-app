import { Users } from "./Users";
import { Todos } from "./Todos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/actions";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <Routes>
      <Route path="/:id?" element={
         <div className={styles.container}>
         <div className={styles.row}>
           <div className={styles.columnOne}>
             <Users />
           </div>

           <div className={styles.columnTwo}>
             <Todos />
           </div>
         </div>
       </div>
      }/>
    </Routes>
  );
}

export default App;
