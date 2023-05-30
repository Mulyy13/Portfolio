import { useState } from "react";
import "./contacs.scss";
import { BsGithub, BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const Contact = () => {
  const [telephoneNumber, setTelephoneNumber] = useState(<BsTelephoneFill />);
  const [email, setEmail] = useState(<GrMail />);

  const handleMouseEnterMail = () => {
    setTimeout(() => {
      setEmail("mularz.michal98@gmail.com");
    }, 900);
  };
  const handleMouseLeaveMail = () => {
    setEmail(<GrMail />);
  };
  const handleMouseEnterTel = () => {
    setTimeout(() => {
      setTelephoneNumber("+48 515 626 510");
    }, 900);
  };
  const handleMouseLeaveTel = () => {
    setTelephoneNumber(<BsTelephoneFill />);
  };
  return (
    <section className="contact">
      <h6>Skontaktuj się ze mną</h6>

      <div className="contact__wrapper">
        {" "}
        <div className=" contact__item contact__git">
          <BsGithub className="contact__git-icon" />
        </div>{" "}
        <div
          className="contact__item contact__email"
          onMouseEnter={handleMouseEnterMail}
          onMouseLeave={handleMouseLeaveMail}
        >
          {email}
        </div>
        <div className="contact__item contact__linkedIn">
          <BsLinkedin className="contact__linkedIn-icon" />
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
