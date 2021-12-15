import React from "react";
import "../App.css";
import GreetingCard from "./GreetingCard";

function Customize() {
  return (
    <div>
      <div className="instructions">
        <div className="smallScale">
          <GreetingCard />
        </div>
        <p>
          <strong>Customize your card:</strong>
        </p>
      </div>
      <label htmlFor="Recipient Email" name="Recipient Email">
        Recipient Email
      </label><br />
      <input id="Recipient Email" type="text" />
    </div>
  );
}

export default Customize;
