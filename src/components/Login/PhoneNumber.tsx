import React, { FC } from "react";
import { Checkbox, Col, Input, Row, Select } from "antd";
import { Link } from "react-router-dom";

export const PhoneNumber: FC<{}> = () => {
  return (
    <Col
      className={
        "w-full flex flex-1 flex-col justify-center items-start px-40 py-24"
      }
    >
      <div className={"text-3xl font-semibold mb-5"}>Вход</div>
      <div className={"flex flex-col gap-y-1 w-full mb-5"}>
        <label>Номер телефона</label>
        <Input type={"tel"} className={"py-2"} />
      </div>
      <Link to={"/login/choose-company"} className={"w-full"}>
        <button className="text-white rounded-md bg-brand border-2 border-solid border-brand hover:bg-transparent hover:text-brand overflow-hidden flex flex-row items-center justify-center py-2 px-3 w-full mb-3">
          <div className="leading-[20px] font-medium">Войти</div>
        </button>
      </Link>
      <div className={"flex justify-center items-center gap-x-2 w-full"}>
        <strong>У вас нет аккаунта?</strong>
        <Link to={"/sign-up/tech-info"}>
          <span className={"text-brand"}>Регистрация</span>
        </Link>
      </div>
    </Col>
  );
};
