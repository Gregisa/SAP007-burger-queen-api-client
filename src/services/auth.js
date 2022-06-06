// const storageKey = "token";
// export const isLogged = () => !localStorage.getItem(storageKey);

// export const isUserActive = localStorage[storageKey];
// export const loginConfirmed = (token) => {
//   localStorage.setItem(storageKey, token);
// };

export const userLogin = async (userEmail, userPassword) => {
  const url = "https://lab-api-bq.herokuapp.com/auth";
  const responseLogin = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  return responseLogin;
};

export const userRegister = async (
  userName,
  userEmail,
  userPassword,
  userRole
) => {
  const url = "https://lab-api-bq.herokuapp.com/users";
  const responseRegister = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
      role: userRole,
      restaurant: "Jazz Burger",
    }),
  });
  return responseRegister;
};
