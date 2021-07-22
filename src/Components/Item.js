import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductsContext } from "./Context";
import PropTypes from "prop-types";

const Item = (props) => {
  const {
    id,
    title,
    price,
    colour,
    image,
    type,
    brand,
    description
  } = props.product;
  const value = useContext(ProductsContext);
  const addToWishList = (id) => {
    if (value.wishList.includes(id)) {
      value.wishList = value.wishList.filter((i) => i !== id);
      console.log(value.wishList);
    } else {
      value.wishList.push(id);
      console.log(value.wishList);
    }
  };
  console.log(value.whishList);
  return (
    <>
      <ItemWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container" onClick={() => value.handleDetail(id)}>
            <Link to={`details/${id}`}>
              <img
                className="card-img-top img-fluid z-depth-2"
                src={image}
                alt="product"
              />
            </Link>
            <Hfive>{brand}</Hfive>
          </div>
          <div className="card-body">
            <h5 className="d-flex justify-content-center">Rs {price}</h5>
            <Button
              onClick={() => {
                value.addToCart(id);
                value.openModal(id);
              }}
            >
              <i className="fas fa-shopping-cart pr-2"></i> Add to Cart
            </Button>

            <div></div>
          </div>
        </div>
      </ItemWrapper>
    </>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
  })
};
const ItemWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.1s linear;
  }
  &:hover {
    .card {
      border: 0.2rem 0.2rem 0.2rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
  .card-img-top {
    transition: all 0.5s linear;
    padding-left: 40px;
    justify-content: center;
    width: 80%;
    height: 10rem;
  }
  img {
    width: 20rem;
}
  .img-container {
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .fa-heart {
    color: palevioletred;
    float: right;
    font-size: 1.6rem;
    &:hover {
      text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;
const Hfive = styled.h5`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  border: 3px solid whiteSmoke;
  background-color: whiteSmoke;
`;
const Button = styled.button`
  background-color: palevioletred;
  border: palevioletred;
  border-radius: 3px;
  padding: 0.5rem;
  color: whiteSmoke;
  margin-bottom: 0.5rem;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
export default Item;
