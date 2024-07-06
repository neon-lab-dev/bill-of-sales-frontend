import axios from "axios";
import { API_URL } from ".";

export const handleLoginService = async (data: {
  email: string;
  password: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.login, data, {
        withCredentials: true,
      })
      .then((res) => resolve(res.data?.message ?? "Login successful"))
      .catch((err) => reject(err?.response?.data?.message ?? "Login failed"));
  });
};

export const handleGetMeService = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.me, {
        withCredentials: true,
      })
      .then((res) => resolve(res.data?.message ?? "User found"))
      .catch((err) => reject(err?.response?.data?.message ?? "User not found"));
  });
};

export const handleLogoutService = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.logout, {
        withCredentials: true,
      })
      .then((res) => resolve(res.data?.message ?? "Logout successful"))
      .catch((err) => reject(err?.response?.data?.message ?? "Logout failed"));
  });
};
