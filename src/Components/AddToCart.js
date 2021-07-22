import React from 'react';
import styled from 'styled-components';

const AddToCart = (props) => {
  return (
    <div className='container'>
      <Button>+</Button>
      <span>{props}</span>
      <Button>-</Button>
    </div>
  )
}

const Button =styled.button`
background-color: palevioletred;
  border: palevioletred;
  border-radius: 3px;
  padding: 0.5rem;
  color: whiteSmoke;
  margin-bottom: 0.5rem;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`
export default AddToCart
