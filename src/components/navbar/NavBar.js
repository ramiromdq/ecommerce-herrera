import CartIcon from "../../icon/CartIcon";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ECOMMERCE-Herrera
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Inicio <span className="sr-only"></span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Catalogo
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Celulares
                </a>
                <a className="dropdown-item" href="#">
                  Tablets
                </a>
                <a className="dropdown-item" href="#">
                  Parlantes inteligentes
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Quienes somos
              </a>
            </li>
          </ul>

          
        </div>
        <div><CartIcon /></div>
      </nav>
    </div>
  );
  
}

export default NavBar;
