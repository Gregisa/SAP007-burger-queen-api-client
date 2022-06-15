import React from "react";

export const OrderCard = ({ product, onClickRemove }) => {
  return (
    <ul>
      <li>
        {product.id ? <p></p> : null}
        <p>Produto:{product.name}</p>
        <p>Complemento:{product.complement}</p>
        <p>R${product.price.toFixed(2)}</p>
        {product.flavor ? (
          <li>
            <p>{product.flavor}</p>
          </li>
        ) : null}
        <p>Quantidade:{product.qtd}</p>
        <div className="bin" onClick={onClickRemove}></div>
      </li>
    </ul>
  );
};
