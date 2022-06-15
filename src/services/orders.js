import { getToken } from "./storagekeys";

const url = "https://lab-api-bq.herokuapp.com";

export const getProducts = () => {
  return fetch(`${url}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  });
};

export const createOrder = (client, table, products) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products,
    }),
  });
};

export const getOrders = () => {
  return fetch(`${url}/orders`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  });
};

export const updateOrders = (orderId, status) => {
  return fetch(`${url}/orders/${orderId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    body: JSON.stringify({ status }),
  });
};
