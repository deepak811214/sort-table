import "./styles.css";
import { employee } from "./data.js";
import { useState } from "react";

export default function App() {
  const [users, setUser] = useState(employee);

  const sort = () => {
    users.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setUser([...users]);
  };

  const dataJsx = users.map((user, index) => {
    return (
      <div className="row" key={index}>
        <div className="column">{user.name}</div>
        <div className="column">{user.country}</div>
      </div>
    );
  });

  return (
    <div className="App">
      <button onClick={sort}>sort</button>
      {dataJsx}
    </div>
  );
}
