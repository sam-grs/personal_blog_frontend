import { ChangeEventHandler, FC } from "react";

type InputProps = {
  name: string;
  type?: "text" | "email" | "password" | "date" | "number";
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="py-2 px-4 border border-black rounded"
    />
  );
};
