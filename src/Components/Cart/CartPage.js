import React, { useContext } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import { ProductsContext } from "../Context";

const CartPage = () => {
  const value = useContext(ProductsContext);
  return (
    <CartContainer>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted"></div>
                </div>
              </div>
              {value.cart && value.cart.length > 0
                ? value.cart.map((product) => (
                    <CartItems product={product} key={product.id} />
                  ))
                : null}
            </div>
            <div className="col-md-4 summary title">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <div className="row">
                <div className="col">ITEMS 3</div>
                <div className="col text-right">&euro; 132.00</div>
              </div>
              <div className="row total">
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&euro; 137.00</div>
              </div>{" "}
              <button className="btn btn-dark">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </CartContainer>
  );
};
const CartContainer = styled.div`
  background: #ddd;
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  padding-top: 2rem;
  .card {
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
  }

  .cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .total {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2vh 0;
  }
  .summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
  }
  .summary .col-2 {
    padding: 0;
  }

  .summary .col-10 {
    padding: 0;
  }
`;
const Hfive = styled.h5`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: Grey;
`;

export default CartPage;
