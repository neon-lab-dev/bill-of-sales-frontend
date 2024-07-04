import { IComment } from "@/types/comment";
import axios from "axios";
import { API_URL } from ".";

export const handlePostComment = (
  comment: IComment
): Promise<{
  message: string;
  comment: IComment;
}> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.postComment, comment)
      .then((res) => {
        resolve({
          ...res.data,
          message: "Thank you for your comment",
        });
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to post comment");
      });
  });
};
