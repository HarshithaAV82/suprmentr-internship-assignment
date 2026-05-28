import React, { useState } from "react";

function App() {

  const [mood, setMood] = useState("No mood selected");

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>Mood Tracker</h1>

      <button onClick={() => setMood("Happy 😊")}>Happy</button>
      <button onClick={() => setMood("Sad 😢")}>Sad</button>
      <button onClick={() => setMood("Angry 😡")}>Angry</button>
      <button onClick={() => setMood("Excited 🤩")}>Excited</button>

      <h2>Your Mood: {mood}</h2>

    </div>
  );
}

export default App;