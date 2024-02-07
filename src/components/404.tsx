import "../assets/styling/notFound.css";

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="overlay">
        <span>
          <h1>404</h1>
          <p>
            I tried to find the webpage, but it's out there somewhere, living
            its best life, like a wild internet unicorn.
          </p>
        </span>
      </div>
    </div>
  );
};
