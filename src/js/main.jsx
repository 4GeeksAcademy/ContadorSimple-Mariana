import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondsCounter.jsx";
import "../styles/index.css";

const root = ReactDOM.createRoot(document.querySelector("#app"));

let seconds = 0;
let interval = null;
let countdown = false;
let alertTime = null;

function render() {
  root.render(
    <SecondsCounter
      seconds={seconds}
      onStart={startCounter}
      onStop={stopCounter}
      onReset={resetCounter}
      onResume={resumeCounter}
      onCountdown={startCountdown}
      onAlert={setAlert}
    />
  );
}

function startCounter() {
  clearInterval(interval);
  countdown = false;
  interval = setInterval(() => {
    seconds++;
    checkAlert();
    render();
  }, 1000);
}

function stopCounter() {
  clearInterval(interval);
}

function resetCounter() {
  clearInterval(interval);
  seconds = 0;
  render();
}

function resumeCounter() {
  if (!interval) startCounter();
}

function startCountdown() {
  const input = document.querySelector("#countdownInput").value;
  if (!isNaN(input) && input !== "") {
    seconds = parseInt(input);
    countdown = true;
    clearInterval(interval);
    interval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        checkAlert();
        render();
      } else {
        clearInterval(interval);
        alert("⏰ ¡Tiempo terminado!");
      }
    }, 1000);
  }
}

function setAlert() {
  const input = document.querySelector("#alertInput").value;
  if (!isNaN(input) && input !== "") {
    alertTime = parseInt(input);
    alert(`🔔 Alerta configurada en ${alertTime} segundos`);
  }
}

function checkAlert() {
  if (alertTime !== null && seconds === alertTime) {
    alert(`🚨 ¡Has llegado a ${alertTime} segundos!`);
  }
}

render();
