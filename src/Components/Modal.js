import React, { useContext } from "react";
import { ProductsContext } from "./Context";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Modal = () => {
  const value = useContext(ProductsContext);
  const { modalOpen, closeModal } = value;
  const { image, title, price } = value.modalProduct;
  return (
    <div>
      {modalOpen ? (
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-lg-4 col-md-6 text-center"
              >
                <h5>Added to the cart</h5>
                <img src={image} className="img-fluid" alt="product" />
                <h5>{title}</h5>
                <h5>Price: {price}</h5>
                <Link to="/">
                  <Button onClick={() => closeModal()}>Store</Button>
                </Link>
                <Link to="/cart">
                  <Button onClick={() => closeModal()}>Go to Cart</Button>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
    font-family: Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: grey;
  }
`;
const Button = styled.button`
  text-transform: capitalize;
  background-color: white;
  border: 2px solid;
  border-color: palevioletred;
  border-radius: 4px;
  padding: 0.4rem;
  color: palevioletred;
  margin-bottom: 0.5rem;
  margin-right: 1.6rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: palevioletred;
    color: whiteSmoke;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
export default Modal;
