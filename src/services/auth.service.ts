import axios from "axios";
import { authRoutes } from "../constants/routes";
import IUser from "../types/user.type";
import { setStorageItem, storageKeys } from "./storage.service";

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

    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(authRoutes.login, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserProfile = async (): Promise<IUser | null> => {
  try {
    const response = await axios.get(authRoutes.me);
    if (!response.data.success) return null;

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
