import React, { FC, ReactNode, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Input as AntdInput } from "antd";

const Input: FC<{
  placeholder: string;
  type: string;
  value?: any;
  setValue?: (val: any) => void;
  onChange?: (
    val: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  showClear?: boolean;
  showIcon?: boolean;
  icon?: ReactNode;
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
  value,
  setValue,
  defaultValue,
  onChange,
  showIcon,
  icon,
  name,
}) => {
  return !textarea ? (
    <div className={"black w-full relative"}>
      <AntdInput
        type={type}
        name={name}
        onChange={onChange}
        id={name}
        className={`block w-full rounded-lg border-0 py-1.5 z-10 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 ${
          className || ""
        } ${showIcon && "relative"}`}
        value={value}
        placeholder={placeholder}
      />
      {showClear && (
        <XMarkIcon
          className={
            "w-5 text-gray-400 h-5 z-20 absolute right-0 top-0 mt-2 mr-2"
          }
          onClick={() => (setValue ? setValue("") : () => {})}
        />
      )}
      {showIcon && icon}
    </div>
  ) : (
    <AntdInput.TextArea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      autoSize
      className={`block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 ${
        className || ""
      }`}
      placeholder={placeholder}
    />
  );
};

export default Input;
