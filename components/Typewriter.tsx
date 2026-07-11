"use client";

import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full-Stack Developer"];

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1400;
const PAUSE_BEFORE_TYPE = 400;

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">(
    "typing"
  );

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_TIME);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_BEFORE_TYPE);
      }
    } else if (phase === "pausing") {
      setRoleIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return (
    <span aria-live="polite">
      {text}
      <span className="typewriter-caret text-accent">&nbsp;</span>
    </span>
  );
}
