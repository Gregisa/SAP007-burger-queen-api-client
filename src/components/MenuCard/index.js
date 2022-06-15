import React from "react";
// import styled from "styled-components";

// const ProductsList = styled.ul`
//   color: black;
//   width: 160px;
//   height: 230px;
//   display: flex;
//   justify-content: center;
// `;

export const MenuCard = ({ product }) => {
  return (
    <ul>
      <li>
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>R${product.price.toFixed(2)}</p>
        {product.flavor ? (
          <li>
            <p>{product.flavor}</p>
          </li>
        ) : null}
        <p>{product.qtd}</p>
      </li>
    </ul>
  );
};
