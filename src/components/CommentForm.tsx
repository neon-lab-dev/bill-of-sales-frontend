"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { IComment } from "@/types/comment";
import { toast } from "sonner";
import {
  ICommentResponse,
  handleGetAllCommentsByPostId,
  handlePostComment,
} from "@/services/comments";

type Props = {
  formId: string;
};

const CommentForm = ({ formId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<ICommentResponse[]>([]);
  const [comment, setComment] = useState<IComment>({
    name: "",
    email: "",
    website: "",
    content: "",
    formId,
  });

  useEffect(() => {
    handleGetAllCommentsByPostId(formId).then((res) => setComments(res));
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in comment) {
      if (key === "website") continue;
      // @ts-ignore
      if (!comment[key]) {
        toast.error(
          `${key[0].toUpperCase() + key.slice(1)} is required, please fill it!`
        );
        return;
      }
    }
    setIsLoading(true);
    handlePostComment(comment)
      .then((res) => {
        toast.success(res.message);
        setComment({
          name: "",
          email: "",
          website: "",
          content: "",
          formId,
        });
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white w-full px-6 py-3 rounded-2xl flex flex-col gap-6">
      <span className="text-black/85 text-lg font-600">
        {comments.length} responses
        {comments.length > 0 && (
          <button
            onClick={() => setShowComments((prev) => !prev)}
            className="ml-4 text-gray-400"
          >
            {showComments ? "Hide comments" : "Show comments"}
          </button>
        )}
      </span>{" "}
      {showComments && (
        <div className="flex flex-col gap-4">
          {comments
            .filter((_, i) => i < 3)
            .map((c) => (
              <div
                key={c._id}
                className="relative grid grid-cols-1 gap-4 p-4 mb-8 border border-gray-200/40 rounded-lg bg-white shadow"
              >
                <div className="relative flex gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    className="relative rounded-lg -top-8 -mb-4 bg-white border border-gray-200/40 h-16 w-16"
                    alt=""
                    loading="lazy"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                      <p className="relative text-lg whitespace-nowrap truncate overflow-hidden">
                        {c.name}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {new Date(c.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
                <p className="-mt-4 text-gray-500">{c.comment}</p>
              </div>
            ))}
        </div>
      )}
      <span className="text-black/85 text-2xl font-600">Leave a reply</span>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
        {[
          {
            type: "text",
            placeholder: "Type your name here",
            key: "name",
          },
          {
            type: "email",
            placeholder: "Type your email here",
            key: "email",
          },
          {
            type: "url",
            placeholder: "Type your website here",
            key: "website",
          },
          {
            type: "textarea",
            placeholder: "Type your message here",
            key: "content",
          },
        ].map((input) => {
          // @ts-ignore
          const value = comment[input.key];
          const onChange = (e: any) =>
            setComment({
              ...comment,
              [input.key]: e.target.value,
            });
          return input.type === "textarea" ? (
            <textarea
              key={input.key}
              className="p-3 min-h-40 border border-gray-800 bg-gray-900 rounded-lg outline-none focus:border-primary"
              placeholder={input.placeholder}
              value={value}
              onChange={onChange}
            />
          ) : (
            <input
              key={input.key}
              type={input.type}
              className="p-3 border border-gray-800 bg-gray-900 rounded-lg outline-none focus:border-primary"
              placeholder={input.placeholder}
              value={value}
              onChange={onChange}
            />
          );
        })}
        <Button
          variant="primary"
          className="w-44 text-white flex items-center justify-center mb-5 xl:my-5"
        >
          {isLoading ? "Loading..." : "Publish"}
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
