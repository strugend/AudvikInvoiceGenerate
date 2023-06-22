import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://strugend.com/index.html" target="_blank" rel="noreferrer">Welcome to SmartDine</a>
    <span>powered by strugend</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="https://strugend.com/#" target="_blank" rel="noreferrer">Home</a>
        <a className="nav-link active" href="https://strugend.com/#about" target="_blank" rel="noreferrer">About</a>
        <a className="nav-link active" href="https://strugend.com/#contact" target="_blank" rel="noreferrer">Contact</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar