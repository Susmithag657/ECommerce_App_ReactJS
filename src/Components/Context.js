import React, { useState, useEffect } from "react";
import { products } from "../data";
export const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [productsList, setproductsList] = useState([]);
  const [productDetail, setproductDetail] = useState([]);
  const [cart, setcart] = useState([]);
  const [modalOpen, setmodalOpen] = useState(true);
  const [modalProduct, setmodalProduct] = useState(productDetail);
  useEffect(() => {
    let temp = [];
    products.forEach((item) => {
      const singleItem = { ...item };
      temp = [...temp, singleItem];
    });
    setproductsList(temp);
  }, []);

  const getItem = (id) => {
    const product = productsList.find((item) => id === item.id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setproductDetail(product);
    console.log(`product is ${product.id}`);
  };
  const addToCart = (id) => {
    let temp = [...productsList];
    //console.log(temp[0] === productsList[0]);
    const index = temp.indexOf(getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = product.count + 1;
    const price = product.price;
    product.total = price;
    setproductsList(temp);
    setcart([...cart, product]);
  };
  const increment = (id) => {};
  const decrement = (id) => {};
  // const addToWishList = () =>{};
  const removeItem = (id) => {};
  const openModal = (id) => {
    let product = getItem(id);
    setmodalProduct(product);
    setmodalOpen(true);
  };
  const closeModal = () => {
    setmodalOpen(false);
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        handleDetail,
        productDetail,
        addToCart,
        cart,
        openModal,
        closeModal,
        modalOpen,
        modalProduct,
        increment,
        decrement,
        removeItem
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
