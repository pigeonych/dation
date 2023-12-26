import React, { FC } from "react";
import { Col, Input, Select } from "antd";
import { Link } from "react-router-dom";

const PersonalInfo: FC<{}> = () => {
  return (
    <Col
      className={
        "w-full flex flex-1 flex-col justify-center items-start px-40 py-24"
      }
    >
      <div className={"text-3xl font-semibold mb-3"}>Регистрация</div>
      <div className={"mb-4 text-gray-500"}>
        Заполните все пункты для завершения регистрации, после с вами свяжется
        менеджер для дальнейшней и бла бла бла
      </div>
      <div className={"flex gap-x-5 items-center w-full"}>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Название компании*</label>
          <Input type={"text"} />
        </div>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Сфера бизнеса*</label>
          <Input type={"text"} />
        </div>
      </div>
      <div className={"flex gap-x-5 items-center w-full"}>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Ваша роль</label>
          <Input type={"text"} />
        </div>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Сколько филиалов</label>
          <Input type={"number"} />
        </div>
      </div>
      <div className={"flex gap-x-5 items-center w-full"}>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Размер компании</label>
          <Select />
        </div>
        <div className={"flex flex-col gap-y-1 w-full mb-5"}>
          <label>Страна</label>
          <Select />
        </div>
      </div>
      <Link to={"/log-in/phone-number"} className={"w-full"}>
        <button className="text-white rounded-md bg-brand border-2 border-solid border-brand hover:bg-transparent hover:text-brand overflow-hidden flex flex-row items-center justify-center py-2 px-3 w-full mb-3">
          <div className="leading-[20px] font-medium">Завершить</div>
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

export default PersonalInfo;
