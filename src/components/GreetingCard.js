import snowman from "../images/snowman.jpeg";
import "../App.css";

function GreetingCard({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="holder">
          <div className="card-holder">
            {/* <img src={snowman} className="greeting" alt="logo" /> */}
            <p className="greeting">Wishing you the happiest of holidays!</p>
          </div>
        </div>
        <button className="App-link" onClick={() => setPage("customize")}>
          Reshare This Card
        </button>
      </header>
    </div>
  );
}

export default GreetingCard;
