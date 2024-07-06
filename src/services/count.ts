import axios from "axios";
import { API_URL } from ".";

export const handleGetCountService = async (): Promise<{
  success: boolean;
  formCount: number;
  stateCount: number;
  commentsCount: number;
}> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.count, {
        withCredentials: true,
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err?.response?.data));
  });
};
