import React, { useContext } from "react";
import Item from "./Item";
import styled from "styled-components";
import { ProductsContext } from "./Context";

const ItemList = () => {
  const value = useContext(ProductsContext);
  return (
    <div className="container py-4">
      <Title>Happy Shopping</Title>
      <div className="row">
      {value.productsList && value.productsList.map(product=>{
        return (
          <Item product={product} key={product.id}/>
        )
      })}
    </div>
    </div>
  );
};
const Title = styled.div`
  text-align: center;
  color: palevioletred;
  font-family: Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.6rem;
  justify-content: center;
`;
export default ItemList;
