
import React from "react";
import classnames from "classnames";

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import { Link } from "react-router-dom";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: true,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentDidUpdate(e) {
    if (
      window.outerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white",
      });
    } else {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen,
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };
  render() {
    return (
      <>
        <Navbar
          className={classnames("", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper topnav">
              <NavbarBrand>
                  <span lg="12" md="12"  className="title">
                    Educar para liberar
                  </span>
                  <h5 className="d-block d-md-none">Instituto La Merced</h5>
              </NavbarBrand>
            </div>
            <button
              aria-controls="navigation-index"
              aria-expanded={this.state.collapseOpen}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse
              className="justify-content-end"
              navbar
              isOpen={this.state.collapseOpen}
            >
              <Nav navbar>
                <NavItem>
                <Link to={{
                  pathname: "/admin/inicio",
                  
                  }}>
                  <NavLink
                    className="btn-rotate"
                  >
                    <i className="nc-icon nc-shop" />
                    <p>
                      <span className="d-lg-none d-md-block">Pagina Principal</span>
                    </p>
                  </NavLink>
                </Link>
                </NavItem>
                <NavItem>
                <Link to={{
                  pathname: "/admin/historia",
                  }}>
                  <NavLink
                    className="btn-magnify"
                  >
                    <i className="nc-icon nc-bell-55" />
                    <p>
                      <span className="d-lg-none d-md-block">Historia</span>
                    </p>
                  </NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown className="btn-rotate" nav>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink"
                    nav
                  >
                    <i className="nc-icon nc-layout-11" />
                    <p>
                      <span className="d-lg-none d-md-block">Sobre nosotros</span>
                    </p>
                  </DropdownToggle>
                  <DropdownMenu
                    persist
                    aria-labelledby="navbarDropdownMenuLink"
                    right
                  >
                    <Link to={{
                      pathname: "/admin/historia",
                      
                      }}>
                      <DropdownItem>
                        Historia
                      </DropdownItem>
                    </Link>
                    <Link to={{
                      pathname: "/admin/personas-a-formar",
                      
                      }}>
                      <DropdownItem>
                        Personas a formar
                      </DropdownItem>
                    </Link>
                    <Link to={{
                      pathname: "/admin/personas-a-formar",
                      
                      }}>
                      <DropdownItem>
                        Objetivos institucionales
                      </DropdownItem>
                    </Link>
                    <Link to={{
                      pathname: "/admin/eponimo",
                      
                      }}>
                      <DropdownItem>
                        Eponimo 
                      </DropdownItem>
                    </Link>
                    <Link to={{
                      pathname: "/admin/escudo",
                      
                      }}>
                      <DropdownItem>
                        Escudo Mercedario 
                      </DropdownItem>
                    </Link>
                    <Link to={{
                      pathname: "/admin/imagenes",
                      
                      }}>
                      <DropdownItem>
                        imagenes
                      </DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
