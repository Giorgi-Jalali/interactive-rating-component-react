import { useState } from "react";
import "./App.css";
import RatingContainer from "./RatingContainer";
import ThanksContainer from "./ThanksContainer";

function App() {
  const [rate, setRate] = useState(null);
  const [resultWindow, setResultWindow] = useState(false);

  function submit() {
    if (rate !== null) {
      setResultWindow(true);
    }
  }

  return (
    <div>
      {!resultWindow ? (
        <RatingContainer setRate={setRate} submit={submit} rate={rate} />
      ) : (
        <ThanksContainer rate={rate} resultWindow={resultWindow} />
      )}
    </div>
  );
}

export default App;
