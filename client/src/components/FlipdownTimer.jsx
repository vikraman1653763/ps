import React, { Component } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class FlipdownTimer extends Component {
  render() {
    // Target date: Jan 3, 2026
    const targetDate = new Date("2026-02-22T00:00:00");

    const digitStyle = {
      color: "#C13D07",
      backgroundColor: "#FFEFCC",
    };

    return (
      <div className="flex flex-col items-center justify-center p-6  rounded-xl  max-w-5xl mx-auto">
        <h1 className="text-[var(--color-primary)] text-2xl sm:text-4xl font-bold mb-6 text-center">
          Flipdown Timer
        </h1>
        <FlipClockCountdown
          to={targetDate}
          digitBlockStyle={digitStyle}
          labels={{
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
          }}
        />
      </div>
    );
  }
}

export default FlipdownTimer;