import React from "react";
import "../App.css";
import GreetingCard from "./GreetingCard";

function Customize({
  email,
  setEmail,
  greeting,
  setGreeting,
  body,
  setBody,
  closing,
  setClosing,
  setPage,
}) {
  const sendEcard = () => {
    let mailto = `mailto:${email}`;
    mailto += "?subject=E-Card";
    mailto += "&body=You have received an e-greeting card.";
    mailto += "%0D%0A%0D%0A";
    mailto += "Go To Greeting Card";
    mailto += "%0D%0A";

    let url = "https://srosenberg74.github.io/ecard";
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    mailto += encodeURIComponent(url);

    window.open(mailto);
  };

  return (
    <div className="customize-container">
      <div className="instructions">
        <div className="smallScale item">
          <GreetingCard greeting={greeting} body={body} closing={closing} />
        </div>
        <br />
        <br />
        <p className="item title">
          <strong>Customize your card:</strong>
        </p>
        <br />
        <br />

        <form className="big-item">
          <label htmlFor="Recipient Email" name="Recipient Email">
            Recipient Email
          </label>
          <br />
          <input
            id="Recipient Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <p className="card-instructions">Card Front:</p>
          <label
            className="greeting-heading"
            htmlFor="Greeting"
            name="Greeting"
          >
            Greeting
          </label>
          <br />
          <input
            id="Greeting"
            type="text"
            value={greeting}
            onChange={(event) => setGreeting(event.target.value)}
          />
          <br />
          <p className="card-instructions">Card Interior:</p>
          <label className="body-label" htmlFor="Body" name="Body">
            Body
          </label>
          <br />

          <textarea
            id="Body"
            type="text"
            value={body}
            rows="3"
            onChange={(event) => setBody(event.target.value)}
          />
          <br />
          <label htmlFor="Closing" name="setClosing">
            Closing
          </label>
          <br />

          <input
            id="Closing"
            type="text"
            value={closing}
            onChange={(event) => setClosing(event.target.value)}
          />
        </form>
        <div className="button-holder">
          <button onClick={() => setPage("preview")}>Preview</button>
          <button onClick={sendEcard}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Customize;
