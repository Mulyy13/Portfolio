import React, { useState, useEffect } from "react";
import "./message.scss";

import { Link } from "react-router-dom";

const Message = () => {
  const [text, setText] = useState("");
  let num = 0;
  const originalText =
    "Wspaniale, że mnie odwiedziłeś/aś! Jestem początkującym frontend developerem, który specjalizuje się w react.js, mam nadzieję, że znajdziesz coś co Cię zaciekawi.";

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
    <div className="letter">
      <h1 className="letter__greetings">Witam!</h1>
      <br />
      <p className="letter__text">{text}</p>
      <Link className="letter__link" to={"/Skills"}>
        Przejdź dalej
      </Link>
    </div>
  );
};

export default Message;
