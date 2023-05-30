import React, { useState, useEffect } from "react";
import "./message.scss";
import { FaSmileBeam } from "react-icons/fa";
import { about } from "../../features/handleSection";
import { useDispatch } from "react-redux";
const Message = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
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
    <div className="container">
      <h1>Witam!</h1>
      <br />
      <p>
        {text}
        {num === originalText.length - 1 ? <FaSmileBeam /> : null}
      </p>
      <span onClick={() => dispatch(about())}>przejdź dalej</span>
    </div>
  );
};

export default Message;
