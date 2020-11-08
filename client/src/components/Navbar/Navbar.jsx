import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="./">Yay Books</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-right" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="./">Search Books</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="./saved">Saved Books</Link>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;