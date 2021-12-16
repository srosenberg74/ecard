import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import GreetingCard from "./components/GreetingCard";
import Customize from "./components/Customize";
import Preview from "./components/Preview";

function App() {
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [greeting, setGreeting] = useState("Wishing you");
  const [body, setBody] = useState("The happiest of holidays");
  const [closing, setClosing] = useState("Love, Sam");

  return (
    <div className="App">
      {page === "home" && (
        <GreetingCard
          setPage={setPage}
          page={page}
          greeting={greeting}
          body={body}
          closing={closing}
        />
      )}
      {page === "customize" && (
        <Customize
          setEmail={setEmail}
          email={email}
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          setBody={setBody}
          closing={closing}
          setClosing={setClosing}
          setPage={setPage}
        />
      )}
      {page === "preview" && (
        <Preview
          greeting={greeting}
          body={body}
          closing={closing}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;
