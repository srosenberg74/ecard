import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import GreetingCard from "./components/GreetingCard";
import Customize from "./components/Customize";
import Preview from "./components/Preview";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {page === "home" && <GreetingCard setPage={setPage} page={page} />}
      {page === "customize" && <Customize />}
      {page === "preview" && <Preview />}
    </div>
  );
}

export default App;
