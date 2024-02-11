import "../assets/styling/hero.css";

export const Hero = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="hero" id="hero">
      <span className="hero-name hero-text">{`<b>I'm Divya</b>`}</span>
      <h1>{`Front-End Web Developer`}</h1>
      <p className="hero-text">
        Creative professional specializing in responsive design and frontend
        development for an enhanced user experience.
      </p>
      <div className="hero-action">
        <a
          href="/contact"
          className="action-btn"
          onClick={() => getNextPage("/contact")}
        >
          Say Hi 👋
        </a>
      </div>
    </div>
  );
};
