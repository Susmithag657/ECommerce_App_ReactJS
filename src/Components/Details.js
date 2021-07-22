import React, { useState, useContext, useEffect } from "react";
import { ProductsContext } from "./Context";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Details = (props) => {
  const history = useHistory();
  const value = useContext(ProductsContext);
  const [product, setproduct] = useState({});
  //const id=props.match.params.id;
  useEffect(() => {
    console.log("Inside useEffects");
    const item = value.productDetail;
    // value.productsList.find((x) => x.id == props.match.params.id);

    setproduct({ ...item });
    console.log(product);
  }, []);
  const {
    id,
    title,
    price,
    color,
    image,
    type,
    brand,
    count,
    description
  } = value.productDetail;
  console.log(image);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center py-4">
          <H2>{title}</H2>
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <img className="img-fluid" src={image} alt="Product" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h2>
            Brand: {brand} - {color}
          </h2>
          <h4>Type : {type}</h4>
          <h4>Price: {price} Rs</h4>
          <h4>Description:</h4>
          <P className="font-weight-bold mt-3">{description}</P>

          <div className="justify-content-center">
            <Button onClick={() => history.goBack()}>Back</Button>
            {count > 0 ? (
              <div className="d-inline-flex flex-row mb-3 mx-1">
                <div>
                  <B>+</B>
                </div>
                <B1 className="align-baseline ">{count}</B1>
                <div>
                  <B2>-</B2>
                </div>
              </div>
            ) : (
              <Button
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Background = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(237, 73, 134, 1) 88%,
    rgba(238, 79, 149, 1) 98%,
    rgba(227, 71, 155, 1) 99%
  );
`;
const H2 = styled.h2`
  color: grey;
  font-family: "Yanone Kaffeesatz", sans-serif;
`;
const P = styled.p`
  font-family: "Arimo", sans-serif;
`;
const B = styled.button`
  background-color: palevioletred;
  border: palevioletred;
  border-radius: 3px 0 0 3px;
  padding: 0.5rem;
  color: whiteSmoke;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const B1 = styled.div`
  color: palevioletred;
  border: 1px solid palevioletred;
  background-color: whitesmoke;
  text-align: center;
  padding: 0.43rem;
  display: inline;
`;
const B2 = styled.button`
  background-color: palevioletred;
  border: palevioletred;
  border-radius: 0 3px 3px 0;
  padding: 0.5rem;
  color: whiteSmoke;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
// const Card=styled.div`

// &:hover {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   }
// `
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
export default Details;
