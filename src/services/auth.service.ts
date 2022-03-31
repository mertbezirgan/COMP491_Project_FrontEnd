import axios from "axios";
import { authRoutes } from "../constants/routes";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    let data = await axios.post(authRoutes.register, {
      email: email,
      password: password,
      name: username,
    });
    // TODO token alınacak ve localstorage'a eklenecek

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = (username: string, password: string) => {
  // TODO token alınacak ve localstorage'a eklenecek

  return axios
    .post(authRoutes.login, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
