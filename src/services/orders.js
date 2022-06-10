const token = localStorage.getItem("token");

export const getProduct = async () => {
  const url = "https://lab-api-bq.herokuapp.com/products";
  return await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};

export const createOrder = async (info) => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
  return await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(info),
  });
};

export const allOrders = async () => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
  return await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};

export const updateOrder = (orderId, status) => {
  const url = "https://lab-api-bq.herokuapp.com/orders";
  console.log(orderId, status);
  return fetch(`${url}${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify({ status }),
  });
};
