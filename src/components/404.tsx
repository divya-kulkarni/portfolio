import "../assets/styling/notFound.css";

export const NotFound = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="not-found">
      <div className="overlay">
        <span>
          <h1>Where are you going?</h1>
          <a href="/" onClick={() => getNextPage("/")}>
            🤘 Come back 🤘
          </a>
          <p>
            I tried to find the webpage, but it's out there somewhere, living
            its best life, like a wild internet unicorn.
          </p>
          
        </span>
      </div>
    </div>
  );
};
