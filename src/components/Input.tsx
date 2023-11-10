import { FC, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Input as AntdInput } from "antd";

const Input: FC<{
  placeholder: string;
  type: string;
  showClear?: boolean;
  defaultValue?: string;
  textarea?: boolean;
  className?: string;
  name?: string;
}> = ({
  placeholder,
  type,
  className,
  textarea,
  showClear,
  defaultValue,
  name,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  return !textarea ? (
    <div className={"black w-full relative"}>
      <AntdInput
        type={type}
        name={name}
        onChange={(val) => setValue(val.target.value)}
        id={name}
        className={`block w-full rounded-lg border-0 py-1.5 z-10 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 ${
          className || ""
        }`}
        value={value}
        placeholder={placeholder}
      />
      {showClear && (
        <XMarkIcon
          className={
            "w-5 text-gray-400 h-5 z-20 absolute right-0 top-0 mt-2 mr-2"
          }
          onClick={() => setValue("")}
        />
      )}
    </div>
  ) : (
    <AntdInput.TextArea
      name={name}
      id={name}
      value={value}
      onChange={(val) => setValue(val.target.value)}
      autoSize
      className={`block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 ${
        className || ""
      }`}
      placeholder={placeholder}
    />
  );
};

export default Input;
