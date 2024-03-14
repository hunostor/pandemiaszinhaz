function Header() {
  return (
<header className="header fixed-top header-animated">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container"><a className="navbar-brand" href="index.html"><img src="img/logo.svg" alt="..." width="80" /></a>
          <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About us</a>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" data-bs-toggle="dropdown" aria-haspopup="true">Pages</a>
                <div className="dropdown-menu mt-3" aria-labelledby="navbarDropdownMenuLink"><a className="dropdown-item" href="index.html">Homepage</a><a className="dropdown-item" href="about.html">About us</a><a className="dropdown-item" href="contact.html">Contact us</a></div>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="contact.html">Contact us</a>
              </li>
              <li className="nav-item">             
                <button className="btn btn-primary" type="button" data-bs-target="#quoteForm" data-bs-toggle="modal">Get a quote</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
  );
}

export default Header;