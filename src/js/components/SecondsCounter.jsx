import React from "react";

const SecondsCounter = (props) => {
  const digits = String(props.seconds).padStart(6, "0").split("");

  return (
    <div className="bigCounter">
      <div className="digits-container">
        <div className="clock">
          <i className="fa-regular fa-clock"></i>
        </div>
        {digits.map((d, i) => (
          <div key={i} className="digit">
            {d}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={props.onStart}>▶️ Start</button>
        <button onClick={props.onStop}>⏸️ Stop</button>
        <button onClick={props.onReset}>🔁 Reset</button>
        <button onClick={props.onResume}>⏯️ Resume</button>
      </div>

      <div className="inputs">
        <input
          type="number"
          id="countdownInput"
          placeholder="Cuenta regresiva"
        />
        <button onClick={props.onCountdown}>⏳ Iniciar</button>
      </div>

      <div className="inputs">
        <input type="number" id="alertInput" placeholder="Alerta en segundos" />
        <button onClick={props.onAlert}>🔔 Alerta</button>
      </div>
    </div>
  );
};

export default SecondsCounter;
