import { useState } from "react";
import "./contacs.scss";
import { BsGithub, BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
const Contact = () => {
  const [telephoneNumber, setTelephoneNumber] = useState(<BsTelephoneFill />);
  const [email, setEmail] = useState(<GrMail />);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnterMail = () => {
    const id = setTimeout(() => {
      setEmail("mularz.michal98@gmail.com");
    }, 900);
    setTimeoutId(id);
  };

  const handleMouseLeaveMail = () => {
    setEmail(<GrMail />);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseEnterTel = () => {
    const id = setTimeout(() => {
      setTelephoneNumber("+48 515 626 510");
    }, 900);
    setTimeoutId(id);
  };
  const handleMouseLeaveTel = () => {
    setTelephoneNumber(<BsTelephoneFill />);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  return (
    <section className="contact">
      <h6>Skontaktuj się ze mną</h6>

      <div className="contact__wrapper">
        {" "}
        <div className=" contact__item contact__git">
          <a
            className="contact__git-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mulyy13"
          >
            <BsGithub />
          </a>
        </div>{" "}
        <div
          className="contact__item contact__email"
          onMouseEnter={handleMouseEnterMail}
          onMouseLeave={handleMouseLeaveMail}
        >
          {email}
        </div>
        <div className="contact__item contact__linkedIn">
          <Link
            className="contact__git-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mulyy13"
          >
            <BsLinkedin className="contact__linkedIn-icon" />
          </Link>
        </div>
        <div
          className="contact__item contact__phone"
          onMouseEnter={handleMouseEnterTel}
          onMouseLeave={handleMouseLeaveTel}
        >
          {telephoneNumber}
        </div>
      </div>
    </section>
  );
};

export default Contact;
