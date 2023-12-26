import React, { FC } from "react";
import { Col, Input } from "antd";
import { Link } from "react-router-dom";

const TechInfo: FC<{}> = () => {
  return (
    <Col
      className={
        "w-full flex flex-1 flex-col justify-center items-start px-40 py-24"
      }
    >
      <div className={"text-3xl font-semibold mb-3"}>Регистрация</div>
      <div className={"mb-4 text-gray-500"}>
        Введите номер телефона и придумайте пароль. Пароль должен состоять
        минимум из 8 символов и содержать цифры и специальные символы (! “ # $ %
        ‘ () *)
      </div>
      <div className={"flex flex-col gap-y-1 w-full mb-5"}>
        <label>Номер телефона</label>
        <Input type={"tel"} className={"py-2"} />
      </div>
      <div className={"flex flex-col gap-y-1 w-full mb-5"}>
        <label>Пароль</label>
        <Input type={"password"} className={"py-2"} />
      </div>
      <div className={"flex flex-col gap-y-1 w-full mb-5"}>
        <label>Повторите пароль</label>
        <Input type={"password"} className={"py-2"} />
      </div>
      <Link to={"/sign-up/personal-info"} className={"w-full"}>
        <button className="text-white rounded-md bg-brand border-2 border-solid border-brand hover:bg-transparent hover:text-brand overflow-hidden flex flex-row items-center justify-center py-2 px-3 w-full mb-3">
          <div className="leading-[20px] font-medium">Продолжить</div>
        </button>
      </Link>
      <div className={"flex justify-center items-center gap-x-2 w-full"}>
        <strong>Уже зарегистрированы?</strong>
        <Link to={"/log-in/phone-number"}>
          <span className={"text-brand"}>Войти</span>
        </Link>
      </div>
    </Col>
  );
};

export default TechInfo;
