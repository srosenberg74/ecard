import "../App.css";
import React, { useState, useRef, useEffect } from "react";

function GreetingCard({ setPage, page, greeting, body, closing, email }) {
  const [cardStyle, setCardStyle] = useState("card-cover");
  const [innerStyle, setInnerStyle] = useState("stuff");
  const [cardOpen, setCardOpen] = useState(false);
  const [containerStyle, setContainerStyle] = useState("");

  const outerContainerStyle = useRef();

  useEffect(() => {
    if (page === "home" || page === "preview") {
      outerContainerStyle.current = "outer";
      setContainerStyle("outer");
    } else if (page === "customize") {
      outerContainerStyle.current = "outer-small";
    }
  }, [page]);

  const sendEcard = () => {
    let mailto = `mailto:${email}`;
    mailto += '?subject=E-Card';
    mailto += '&body=You have received an e-greeting card.';
    mailto += '%0D%0A%0D%0A';
    mailto += 'Go To Greeting Card';
    mailto += '%0D%0A';

    let url = 'https://luceroweb.github.io/ecard';
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    mailto += encodeURIComponent(url);

    window.open(mailto);
  }

  return (
    <div className="body">
      {/* {page === "home"
        ? () => (outerContainerStyle.current = "outer")
        : () => (outerContainerStyle.current = "outer-small")} */}
      <div className={outerContainerStyle.current}>
        {/* <img src={snow} className="snow" /> */}
        <div className="card-container">
          <div className="card">
            <div className={cardStyle}>
              <div className={innerStyle}>
                <div className="cover-content">
                  <h1 className="greeting">{greeting}</h1>
                </div>
              </div>
            </div>
            {/* <div className="back-of-cover"></div> */}
            <div className="details">
              <h2>{body}</h2>
              <h3 className="closing">{closing}</h3>
            </div>
          </div>
        </div>
        {!cardOpen ? (
          page === "home" || page === "preview" ? (
            page === "home" ? (
              <button
                className="button"
                onClick={() => {
                  setCardStyle("card-cover card-open");
                  setInnerStyle("stuff-open");
                  setTimeout(() => setCardOpen(true), 2500);
                }}
              >
                Click To Open Card
              </button>
            ) : (
              <div>
                <button
                  className="button"
                  onClick={() => {
                    outerContainerStyle.current = "outer-small";
                    // console.log(outerContainerStyle.current);
                    // setTimeout(() => setPage("customize"), 2000);
                    // console.log(outerContainerStyle.current);
                    setPage("customize");
                  }}
                >
                  Edit
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCardStyle("card-cover card-open");
                    setInnerStyle("stuff-open");
                    setTimeout(() => setCardOpen(true), 2500);
                  }}
                >
                  Open Card
                </button>
                <button
                  className="button"
                  onClick={() => sendEcard}
                >
                  Send
                </button>
              </div>
            )
          ) : (
            <button
              className="button-customize"
              onClick={() => {
                setCardStyle("card-cover card-open");
                setInnerStyle("stuff-open");
                setTimeout(() => setCardOpen(true), 2500);
              }}
            >
              Open Card
            </button>
          )
        ) : page === "home" || page === "preview" ? (
          page === "home" ? (
            <button
              className="button"
              onClick={() => {
                outerContainerStyle.current = "outer-small";
                // console.log(outerContainerStyle.current);
                // setTimeout(() => setPage("customize"), 2000);
                // console.log(outerContainerStyle.current);
                setPage("customize");
              }}
            >
              Edit & Reshare
            </button>
          ) : (
            <div>
              <button
                className="button"
                onClick={() => {
                  outerContainerStyle.current = "outer-small";
                  // console.log(outerContainerStyle.current);
                  // setTimeout(() => setPage("customize"), 2000);
                  // console.log(outerContainerStyle.current);
                  setPage("customize");
                }}
              >
                Edit
              </button>
              <button
                className="button"
                onClick={() => {
                  setCardStyle("card-cover");
                  setInnerStyle("stuff");
                  setTimeout(() => setCardOpen(false), 2500);
                }}
              >
                Close Card
              </button>
              <button
                className="button"
                onClick={() => {
                  outerContainerStyle.current = "outer-small";
                  // console.log(outerContainerStyle.current);
                  // setTimeout(() => setPage("customize"), 2000);
                  // console.log(outerContainerStyle.current);
                  setPage("customize");
                }}
              >
                Send
              </button>
            </div>
          )
        ) : (
          <button
            className="button-customize"
            onClick={() => {
              setCardStyle("card-cover");
              setInnerStyle("stuff");
              setTimeout(() => setCardOpen(false), 2500);
            }}
          >
            Close Card
          </button>
        )}
      </div>
    </div>
  );
}

export default GreetingCard;
