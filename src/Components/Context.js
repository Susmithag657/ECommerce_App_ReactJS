import React, { useState, useEffect } from "react";
import { products } from "../data";
export const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [productsList, setproductsList] = useState([]);
  const [cart, setcart] = useState({});
  const [wishList, setwishList] = useState([]);
  useEffect(() => {
    let temp=[];
    products.forEach((item)=>{
      const singleItem={...item};
      temp=[...temp,singleItem];
    })
    setproductsList(temp)
  }, []);
  const handleDetail = () => {
    console.log("Handle Detail method");
  };
  const addToCart = () => console.log("Add to Cart method");
  const addToWishList = () => console.log("x");
  return (
    <ProductsContext.Provider
      value={{ productsList, handleDetail, addToCart, cart, wishList }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
