import { IComment } from "@/types/comment";
import axios from "axios";
import { API_URL } from ".";

export const handlePostComment = (comment: IComment): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL.postComment, comment)
      .then((res) => {
        resolve(res.data?.message ?? "Thank you for your comment");
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to post comment");
      });
  });
};

export interface ICommentResponse extends IComment {
  _id: string;
  comment: string;
  createdAt: string;
}

export const handleGetAllCommentsByPostId = (
  postId: string
): Promise<ICommentResponse[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL.comments}/${postId}`)
      .then((res) => {
        resolve(res.data ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to get comments");
      });
  });
};

export const handleGetAllCommentsService = (): Promise<ICommentResponse[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL.getAllComments, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data?.comments ?? []);
      })
      .catch((err) => {
        reject(err?.response?.data?.message ?? "Failed to get comments");
      });
  });
};
