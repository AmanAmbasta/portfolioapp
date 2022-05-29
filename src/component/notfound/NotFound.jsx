import './notfound.css'

function NotFound() {
  return (
    <div className="error-notfound">
      <div className="error-content">
        <h1 className="error-heading heading-main">Not Found</h1>
        <div className="terminal">
          <p className="prompt error-message">
            The page you requested cannot be found right meow. Try typing
            'kittens'.
          </p>
          <div className='flex'>
          <div className="prompt"></div>
          <div className="new-output"></div>

          </div>
        </div>
      </div>
      <div className="error-picture"></div>
    </div>
  );
}

export default NotFound;
