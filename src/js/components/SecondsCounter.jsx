import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isCountdown, setIsCountdown] = useState(false);
  const [alertTime, setAlertTime] = useState("");
  const [countdownStart, setCountdownStart] = useState("");

  // Efecto del temporizador
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) =>
          isCountdown ? (prev > 0 ? prev - 1 : 0) : prev + 1
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isCountdown]);

  // Alerta cuando llega al tiempo
  useEffect(() => {
    if (alertTime && Number(alertTime) === seconds) {
      alert(`🚨 ¡Has llegado al tiempo ${alertTime} segundos!`);
    }
  }, [seconds, alertTime]);

  // Manejo de botones
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => setSeconds(0);
  const handleCountdown = () => {
    if (countdownStart) {
      setSeconds(Number(countdownStart));
      setIsCountdown(true);
      setIsRunning(true);
    }
  };

  const digits = String(seconds).padStart(6, "0").split("");

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


      {/* Controles */}
      <div className="controls">
        <button onClick={handleStart}>▶️ Start</button>
        <button onClick={handleStop}>⏸️ Stop</button>
        <button onClick={handleReset}>🔁 Reset</button>
      </div>

      {/* Input para cuenta regresiva */}
      <div className="inputs">
        <input
          type="number"
          placeholder="Tiempo inicial"
          value={countdownStart}
          onChange={(e) => setCountdownStart(e.target.value)}
        />
        <button onClick={handleCountdown}>⏳ Cuenta regresiva</button>
      </div>

      {/* Input para alerta */}
      <div className="inputs">
        <input
          type="number"
          placeholder="Alerta en (segundos)"
          value={alertTime}
          onChange={(e) => setAlertTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SecondsCounter;
