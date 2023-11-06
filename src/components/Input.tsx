import { FC } from "react";

const Input: FC<{
  placeholder: string;
  type: string;
  name?: string;
}> = ({ placeholder, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 focus:outline-none border-gray-400"
      placeholder={placeholder}
    />
  );
};

export default Input;
