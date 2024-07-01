import axios from "axios";
import { API_URL } from ".";

export const sampleFetch = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.allForms)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
