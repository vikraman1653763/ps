import React, { Component } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class FlipdownTimer extends Component {
  constructor(props) {
    super(props);

    // ✅ target date
    this.targetDate = new Date("2026-02-22T00:00:00");

    this.state = {
      mode: Date.now() < this.targetDate.getTime() ? "countdown" : "countup",
      now: Date.now(),
      key: Date.now() < this.targetDate.getTime() ? "countdown" : "countup",
    };

    this.timerId = null;
  }

  componentDidMount() {
    // tick every second to update "now" and switch mode at the exact time
    this.timerId = setInterval(() => {
      const now = Date.now();
      const targetMs = this.targetDate.getTime();

      this.setState((prev) => {
        const nextMode = now < targetMs ? "countdown" : "countup";

        // when switching mode, change key to force clean remount
        if (prev.mode !== nextMode) {
          return {
            mode: nextMode,
            now,
            key: nextMode,
          };
        }

        // keep updating time (needed for countup; harmless for countdown)
        return { now };
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  render() {
    const digitStyle = {
      color: "#f59a5e",
      backgroundColor: "white",
    };

    const { mode, now, key } = this.state;
    const targetMs = this.targetDate.getTime();

    // ✅ countdown uses the actual target date
    const countdownTo = this.targetDate;

    // ✅ countup trick (avoid double Date.now calls to prevent jitter/reverse)
    const elapsedMs = Math.max(0, now - targetMs);
    // make (to - now) = elapsedMs  → numbers increase each second
    const countupTo = new Date(now + elapsedMs);

    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-xl max-w-5xl mx-auto">
        <h1 className="text-primary text-2xl sm:text-4xl font-bold mb-6 text-center">
          {mode === "countdown" ? "Event Countdown" : "Event Started"}
        </h1>

        <FlipClockCountdown
          key={key}
          to={mode === "countdown" ? countdownTo : countupTo}
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
