import React, { FC, useState, useMemo } from "react";
import { Row, Col, Select, DatePicker, Switch } from "antd";
import Input from "../Input";

import DiscountIcon from "../../assets/svg/discount.svg";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { brand } from "../../constants";
import record from "./Record";

const initialDeposit = 800000;

const Client: FC<{}> = () => {
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [lang, setLang] = useState<"uzb" | "rus" | "eng" | "">("");
  const [deposit, setDeposit] = useState(initialDeposit);
  const [add, setAdd] = useState(0);

  const [recordType, setRecordType] = useState<"manual" | "online">("online");

  const recordTypeRender = useMemo(() => {
    const bgColor = recordType === "online" ? "bg-[#D3DDFF]" : "bg-orange-100";
    const textColor =
      recordType === "online" ? "text-brand" : "text-orange-800";
    const text = recordType === "online" ? "Онлайн бронь" : "Создан вручную";
    return (
      <div
        className={`inline-flex justify-between items-center rounded-2xl p-1 px-3 gap-x-3 ${bgColor} ${textColor}`}
        onClick={() => {
          setRecordType((prev) => (prev === "online" ? "manual" : "online"));
        }}
      >
        <div className={"text-xs font-medium"}>{text}</div>
      </div>
    );
  }, [recordType]);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 w-[60%] h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div>
                <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                  Данные о клиенте
                </div>
                {recordTypeRender}
              </div>
            </div>
          </div>
          <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
            <Row wrap={false} className="w-full flex gap-x-2 justify-between">
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Имя</label>
                <Input
                  placeholder={"Введите ваше имя..."}
                  type={"text"}
                  className={"border-2 border-gray-100"}
                />
              </Col>
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Телефон</label>
                <Input
                  placeholder={"+998"}
                  className={"border-2 border-gray-100"}
                  type={"tel"}
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex gap-x-2 justify-between">
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Пол</label>
                <Select
                  options={[
                    { value: "male", label: "Мужской" },
                    { value: "female", label: "Женский" },
                  ]}
                  placeholder={"Выбрать"}
                  value={gender}
                  className="w-full"
                  onChange={(value, option) => {
                    setGender(value);
                  }}
                />
              </Col>
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Язык клиента</label>
                <Select
                  options={[
                    { value: "uzb", label: "Узбекский" },
                    { value: "rus", label: "Русский" },
                    { value: "eng", label: "Английский" },
                  ]}
                  placeholder={"Выбрать"}
                  value={lang}
                  className="w-full"
                  onChange={(value, option) => {
                    setLang(value);
                  }}
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex gap-x-2 justify-between">
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Дата рождения</label>
                <DatePicker
                  placeholder={"Укажите дату"}
                  className={"border-2 border-gray-300 h-full"}
                  onChange={(e) => {
                    console.log("visit date: ", e);
                  }}
                />
              </Col>
              <Col className="w-1/2 flex flex-col gap-y-1">
                <label className="text-sm">Скидка</label>
                <Input
                  placeholder={"%"}
                  type={"text"}
                  className={"border-2 border-gray-100"}
                  showIcon
                  icon={
                    <img
                      src={DiscountIcon}
                      alt={"discount"}
                      className={"absolute right-3 top-2.5 z-30"}
                    />
                  }
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex flex-col gap-y-1">
                <label className="text-sm">Телеграм</label>
                <Input
                  placeholder={"@username"}
                  type={"text"}
                  className={"border-2 border-gray-100"}
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex gap-x-2">
                <Switch defaultChecked className="bg-gray-400" />
                <label className="text-sm font-normal">
                  Оповещения в телеграм
                </label>
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex flex-col gap-y-2">
                <label className="text-sm">Комментарий</label>
                <Input
                  placeholder={"Ваши комментарии..."}
                  className={"border-2 border-gray-100 h-auto pb-7"}
                  textarea
                  type="text"
                />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="flex flex-col gap-y-5 pt-5 pr-5 w-[40%] h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="w-full flex items-center justify-between text-xl leading-[24px] font-medium mr-3">
                <div className="inline-block ">Депозит</div>
                <div className="text-brand">{deposit} сум</div>
              </div>
            </div>
          </div>
          <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex flex-col gap-y-1">
                <label className="text-sm">Добавить депозит</label>
                <Input
                  placeholder={"Сумма"}
                  type="number"
                  value={add}
                  onChange={(e) => {
                    setAdd(+e.target.value);
                  }}
                  className={"border-2 border-gray-100"}
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex flex-col gap-y-2">
                <label className="text-sm">Комментарий</label>
                <Input
                  placeholder={"Ваши комментарии..."}
                  className={"border-2 border-gray-100 h-auto pb-7"}
                  textarea
                  type="text"
                />
              </Col>
            </Row>
            <Row wrap={false} className="w-full flex">
              <Col className="w-full flex justify-end">
                <button
                  onClick={() => {
                    setDeposit((prev) => (prev += add));
                  }}
                  className="w-[30%] text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white"
                >
                  <div className="leading-[20px] font-medium">Добавить</div>
                </button>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="flex items-center text-xl leading-[24px] font-medium mr-3">
                <div className="inline-block ">История депозита</div>
              </div>
            </div>
          </div>
          <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
            <Row className={"flex gap-x-4"}>
              <Col
                className={
                  "flex justify-center items-center h-[40px] w-[40px] bg-brand text-center rounded-full text-white text-xl"
                }
              >
                <PlusIcon className={"w-1/2 h-1/2"} />
              </Col>
              <Col>
                <Row className="flex flex-col">
                  <Col className="text-base font-semibold leading-6">
                    800 000 сум
                  </Col>
                  <Col className="text-sm text-gray-700 leading-5">
                    Иванова Ирина
                  </Col>
                  <Col className="text-sm text-gray-500 leading-5">
                    18:42, 18 дек. 2023
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={"flex gap-x-4"}>
              <Col
                className={
                  "flex justify-center items-center h-[40px] w-[40px] bg-brand text-center rounded-full text-white text-xl"
                }
              >
                <PlusIcon className={"w-1/2 h-1/2"} />
              </Col>
              <Col>
                <Row className="flex flex-col">
                  <Col className="text-base font-semibold leading-6">
                    800 000 сум
                  </Col>
                  <Col className="text-sm text-gray-700 leading-5">
                    Иванова Ирина
                  </Col>
                  <Col className="text-sm text-gray-500 leading-5">
                    18:42, 18 дек. 2023
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Client;
