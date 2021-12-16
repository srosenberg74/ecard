import React from "react";
import GreetingCard from "./GreetingCard";

function Preview({ greeting, body, closing, page, setPage }) {
  return (
    <div className="preview-container">
      <GreetingCard
        greeting={greeting}
        body={body}
        closing={closing}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Preview;
