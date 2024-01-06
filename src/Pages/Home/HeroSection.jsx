export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Anish GB Kunwar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I am a front end web developer with sound knowlegde in Reactjs and PHP.
            <br /> I am also interested in Graphic Designing.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
