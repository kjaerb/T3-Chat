import clsx from "clsx";
import * as React from "react";
import { forwardRef } from "react";

import Loading from "./Loading";

const buttonVariant = {
  primary: "bg-gray-100 text-black hover:bg-gray-200",
  primary_border:
    "bg-white text-black border-2 border-gray-700 hover:border-gray-900 hover:bg-gray-200",
  inverted: "bg-black text-white hover:bg-gray-800",
  disabled: "border border-white text-white cursor-not-allowed",
};

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof buttonVariant;
} & React.ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        {...rest}
        ref={ref}
        disabled={disabled}
        className={clsx(
          isLoading &&
            "relative !cursor-wait !text-transparent !transition-none hover:!text-transparent",
          className,
          buttonVariant[variant],
          "inline-flex rounded-md px-4 py-2  text-sm font-semibold",
          "focus:outline-none focus-visible:ring focus-visible:ring-cerulean-500",
          "transition-colors duration-75",
          "disabled:cursor-not-allowed"
        )}>
        {isLoading && <Loading />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
