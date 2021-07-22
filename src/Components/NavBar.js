import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const NavBar = () => {
  return (
    <div>
      <Nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-headphones-alt"></i>
          </Link>
          <Link className="navbar-brand" to="/">
            Shophoalic
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-chevron-circle-down"></i>
            </span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
              <Link className="nav-link active" aria-current="page" to="/cart">
                My Cart
              </Link>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
};
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Button = styled.button`
  color: white !important;

  &:hover {
    animation: ${rotate} 0.5s;
  }
`;

const Nav = styled.nav`
  background: rgb(61, 56, 56);
  background: linear-gradient(
    56deg,
    rgba(61, 56, 56, 1) 1%,
    rgba(222, 44, 134, 1) 47%,
    rgba(222, 44, 134, 1) 60%,
    rgba(55, 26, 37, 1) 100%
  );
  .navbar-brand {
    margin-left: 1.3rem;
    color: whitesmoke;
    font-size: 1.6rem;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .fa-headphones-alt {
    &:hover {
      animation: ${rotate} 0.5s;
      color: white;
    }
  }
  .nav-link {
    color: whitesmoke !important;
    font-size: 1.5rem;
  }
`;
export default NavBar;
