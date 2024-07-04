"use client";
import React, { useState } from "react";
import Button from "./Button";
import { IComment } from "@/types/comment";
import { toast } from "sonner";
import { handlePostComment } from "@/services/comments";

type Props = {
  formId: string;
};

const CommentForm = ({ formId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState<IComment>({
    name: "",
    email: "",
    website: "",
    content: "",
    formId,
  });

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
      <span className="text-black/85 text-lg font-600">3 responses</span>{" "}
      {/* //todo: change to dynamic */}
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
