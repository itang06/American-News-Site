const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div
              className="nav-link active"
              onClick={() => setCategory("technology")}
              aria-current="page"
            >
              Technology
            </div>
            <div
              className="nav-link active"
              onClick={() => setCategory("business")}
              aria-current="page"
            >
              Business
            </div>
            <div
              className="nav-link active"
              onClick={() => setCategory("health")}
              aria-current="page"
            >
              Health
            </div>
            <div
              className="nav-link active"
              onClick={() => setCategory("science")}
              aria-current="page"
            >
              Science
            </div>
            <div
              className="nav-link active"
              onClick={() => setCategory("sports")}
              aria-current="page"
            >
              Sports
            </div>
            <div
              className="nav-link active"
              onClick={() => setCategory("entertainment")}
              aria-current="page"
            >
              Entertainment
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
