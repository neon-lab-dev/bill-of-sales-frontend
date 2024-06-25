import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const classNames = {
  default: "",
  variants: {
    secondary:
      "bg-blue-50 px-[24px] py-[21px] xl:px-4 xl:py-3.5 text-blue-600 text-base font-600 leading-[150%] rounded-xl",
    primary:
      "flex items-center gap-2 px-5 py-4 rounded-md bg-primary min-w-[180px]",
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
