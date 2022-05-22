import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  content?: React.ReactNode;
  mode?: "primary" | "light";
  size?: "big";
};

const Button = ({
  className,
  onClick,
  content,
  mode,
  size,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${className} "btn"`}
      data-mode={mode}
      data-size={size}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
