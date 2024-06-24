import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const classNames = {
  default: "",
  variants: {
    secondary:
      "bg-[#E5EFFF] px-4 py-3.5 text-[#142D55] text-base font-600 leading-[150%] rounded-xl",
    primary:
      "flex items-center gap-2 px-5 py-4 rounded-md bg-[#3E6FBF] min-w-[180px]",
  },
} as const;

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={twMerge(
        classNames.default,
        classNames.variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
