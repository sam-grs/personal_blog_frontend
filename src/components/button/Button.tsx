import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: string;
  background?: string;
};

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  color = "text-white",
  background = "bg-indigo-700",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${background} 
        border-indigo-700 
        border-solid 
        border-2 
        py-2 px-4 
        ${color} 
        rounded`}
    >
      {children}
    </button>
  );
};
