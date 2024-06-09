import React, { useState, useEffect, useRef } from "react";
import "./TimerStopwatchComponent.css";

const TimerStopwatchComponent = () => {
  const [mode, setMode] = useState(null);
  const [timerTime, setTimerTime] = useState(0);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const timerRef = useRef(null);

  const handleModeChange = (newMode) => {
    clearInterval(timerRef.current);
    setMode(newMode);
    setTimerTime(0);
    setStopwatchTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsStopwatchRunning(false);
  };

  const startTimer = () => {
    const duration = (hours * 3600 + minutes * 60 + seconds) * 1000;
    setTimerTime(duration);
    const endTime = Date.now() + duration + 1;
    timerRef.current = setInterval(() => {
      const remainingTime = endTime - Date.now() + 1;
      setTimerTime(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(timerRef.current);
        setTimerTime(0);
      }
    }, 1000);
  };

  const startStopwatch = () => {
    setIsStopwatchRunning(true);
    const startTime = Date.now() - stopwatchTime;
    timerRef.current = setInterval(() => {
      setStopwatchTime(Date.now() - startTime);
    }, 10);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsStopwatchRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTimerTime(0);
    setStopwatchTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsStopwatchRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (time) => {
    const totalMilliseconds = Math.floor(time / 100) * 100; // Round to nearest 100 milliseconds
    const milliseconds = totalMilliseconds % 1000;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${Math.floor(
      milliseconds / 100
    )
      .toString()
      .padStart(1, "0")}`;
  };

  const formatTimeNoMilliseconds = (time) => {
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer-stopwatch-container">
      <div className="mode-buttons">
        <button onClick={() => handleModeChange("timer")}>타이머</button>
        <button onClick={() => handleModeChange("stopwatch")}>스톱워치</button>
      </div>
      {mode === "timer" && (
        <div className="control-buttons">
          <div className="input-row">
            <div className="input-group">
              <label>시간</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10))}
                placeholder="시간"
                min="0"
              />
            </div>
            <div className="input-group">
              <label>분</label>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                placeholder="분"
                min="0"
              />
            </div>
            <div className="input-group">
              <label>초</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
                placeholder="초"
                min="0"
              />
            </div>
          </div>
          <button onClick={startTimer}>타이머 시작</button>
        </div>
      )}
      {mode === "stopwatch" && (
        <div className="control-buttons">
          <button onClick={startStopwatch} disabled={isStopwatchRunning}>
            시작
          </button>
        </div>
      )}
      <div className="display">
        <h1>
          {mode === "stopwatch"
            ? formatTime(stopwatchTime)
            : formatTimeNoMilliseconds(timerTime)}
        </h1>
        <div className="action-buttons">
          <button onClick={stop}>일시정지</button>
          <button onClick={reset}>초기화</button>
        </div>
      </div>
    </div>
  );
};

export default TimerStopwatchComponent;
