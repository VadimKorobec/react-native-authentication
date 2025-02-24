import axios from "axios";

const API_KEY = "AIzaSyBF4LL6rez7372FkHw5fFIkPrQ4XqEsmSQ";

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const createUser = async (email, password) => {
  return await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);
};
