import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item">Something else here</a></li>
    </ul>
    </li>
    </div>
    <div className="container-fluid">
    <form className="d-flex">
    <input className="form-control me-5" type="search" aria-label="Search" />
    </form>
    <button className="btn btn-primary" type="submit">Add To Cart</button>
  </div>
</nav>
    </>
  )
}

export default Navbar