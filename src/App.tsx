import React, { useState } from "react";

import "./App.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <div className="App">
      {alert &&<Alert>My Alert</Alert>}
      <ListGroup />
      <Button color="secondary" onClick={()=>setAlert((prev)=>!prev)}>Custom Button</Button>
    </div>
  );
}

export default App;
