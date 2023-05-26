import React, { useState, useEffect } from "react";
import "./message.scss";
import { FaSmileBeam } from "react-icons/fa";

const Message = () => {
  const [text, setText] = useState("");
  let num = 0;
  const originalText =
    // "Wspaniale, że mnie odwiedziłeś/aś! Jestem początkującym frontend developerem, który specjalizuje się w react.js, mam nadzieję, że znajdziesz coś co Cię zaciekawi";
    "Maasz co?";

  useEffect(() => {
    const typing = setInterval(() => {
      if (num === originalText.length - 1) {
        clearInterval(typing);
        return;
      }
      setText((prevText) => prevText + originalText[num]);
      num++;
    }, 40);
    return () => clearInterval(typing);
  }, [originalText, num]);

  return (
    <div className="container">
      <h1>Witam!</h1>
      <br />
      <p>
        {text}
        {num === originalText.length - 1 ? <FaSmileBeam /> : null}
      </p>
      <span>przejdź dalej</span>
    </div>
  );
};

export default Message;
