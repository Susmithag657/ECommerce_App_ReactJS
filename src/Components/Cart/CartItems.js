import React, { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../Context";
const CartItems = (props) => {
  const { image, title, brand, id, count, price } = props.product;
  return (
    <CartItemsContainer>
      <div className="container">
        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img className="img-fluid" src={image} alt="product" />
            </div>
            <div className="col">
              <div className="row text-muted">{brand}</div>
              <div className="row">{title}</div>
            </div>
            <div className="col">
              <div className="d-inline-flex flex-row mb-3 mx-1 align-baseline">
                <div>
                  <button className="btn btn-sm btn-secondary">+</button>
                </div>
                <B1>{count}</B1>
                <div>
                  <button className="btn btn-sm btn-secondary">-</button>
                </div>
              </div>
            </div>
            <div className="col">
              {price}
              <span className="close">&#10005;</span>
            </div>
          </div>
        </div>
      </div>
    </CartItemsContainer>
  );
};
const CartItemsContainer = styled.div`
  .close {
    margin-left: auto;
    font-size: 0.7rem;
  }
  .main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
  }
  img {
    width: 3.5rem;
  }
`;
const span = styled.span`
  .close {
    margin-left: auto;
    font-size: 0.7rem;
  }
`;

const B1 = styled.div`
  color: black;
  background-color: whitesmoke;
  text-align: center;
  padding: 0.2rem 0.5rem 0 0.5rem;
  display: inline;
`;

export default CartItems;
