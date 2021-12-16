import "./App.css";
import React, { useState } from "react";
import GreetingCard from "./components/GreetingCard";
import Customize from "./components/Customize";
import Preview from "./components/Preview";

function App() {
  const query = new URLSearchParams(window.location.search);
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [greeting, setGreeting] = useState(
    query.get("greeting") || "Wishing you"
  );
  const [body, setBody] = useState(
    query.get("body") || "The happiest of holidays"
  );
  const [closing, setClosing] = useState(query.get("closing") || "Love, Sam");

  return (
    <div className="App">
      {page === "home" && (
        <GreetingCard
          setPage={setPage}
          page={page}
          greeting={greeting}
          body={body}
          closing={closing}
          email={email}
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
