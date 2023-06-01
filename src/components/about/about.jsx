import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">Michał Mularz</h2>
      <p className="about__specification">Frontend Developer</p>
      <p className="about__description">
        Moją przygodę z programowaniem zacząłem w 2021 roku. Od tamtego czasu
        nauczyłem się sporo technologii, o których więcej informacji zamieściłem
        w sekcji <span>skills</span>. Interesuję się elektroniką, psychologią i
        nowymi technologiami. Na chwilę obecną szukam ofert pracy żeby móc
        poszerzać swoje umiejętności jeszcze bardziej efektywnie.
      </p>
    </section>
  );
};

export default About;
