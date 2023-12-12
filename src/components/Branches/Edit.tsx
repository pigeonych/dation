import React, { FC, useMemo, useState } from "react";
import { Button, Col, Row, Select, Upload, Input, Switch } from "antd";
import { PaperClipIcon } from "../../assets/icons/all";

import maps from "../../assets/images/maps-placeholder-2.png";
import Notification from "../../utils/notification";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const countryOptions = [
  { value: "uzb", label: "Узбекистан" },
  { value: "rus", label: "Россия" },
  { value: "usa", label: "США" },
];

const cityOptions = [
  { value: "tshk", label: "Ташкент" },
  { value: "smrk", label: "Самарканд" },
  { value: "buxr", label: "Бухара" },
];

export const Edit: React.FC<{}> = () => {
  const [active, setActive] = useState(true);
  const renderStatus = useMemo(() => {
    const label = active ? "Активен" : "Не активен";
    const bgColor = active ? "bg-green-100" : "bg-red-100";
    const textColor = active ? "text-green-800" : "text-red-800";
    return (
      <div
        className={`inline-flex justify-between items-center rounded-2xl p-1 px-5 gap-x-3 ${bgColor}`}
      >
        <div className={`text-xs font-medium ${textColor}`}>{label}</div>
      </div>
    );
  }, [active]);

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-full flex flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-row items-center justify-start gap-x-3">
            <Link to={"/company/branches"}>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            <div className="text-xl font-bold leading-9">Филиал 1</div>
          </div>
        </div>
        <div className="w-[360.8px] flex flex-row items-center justify-end gap-6 text-sm">
          <button className="text-red-800 rounded-md bg-red-100 overflow-hidden flex flex-row items-center justify-center py-2 px-3 hover:bg-red-500 hover:border-red-500 hover:text-white">
            <div className="leading-[20px] font-medium">Удалить филиал</div>
          </button>
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-2 px-3 text-tailwindui-white">
            <div className="leading-[20px] font-medium">Сохранить</div>
          </button>
        </div>
      </header>
      <Row className="isolate w-full h-full overflow-auto">
        <Row className="flex flex-col gap-y-5 pt-5 px-5 flex-1 h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Данные о компании
                </div>
              </div>
            </div>
            <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
              <Col
                className={
                  "w-full px-5 pb-5 h-full flex items-center gap-x-5 border-b-2 border-gray-100"
                }
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt={"company-img"}
                  className={"rounded-3xl w-[20%] h-[20%] object-cover"}
                />
                <Col className={"w-[40%] flex flex-col gap-y-2"}>
                  <Upload name={"file"} action="#">
                    <Button
                      className={
                        "flex items-center justify-between px-6 py-4 gap-x-2"
                      }
                    >
                      <PaperClipIcon className={"w-1/2 h-1/2"} />
                      <div className="font-sm leading-6 text-gray-900 font-semibold">
                        Выбрать
                      </div>
                    </Button>
                  </Upload>
                  <div className="text-red-500 text-sm">
                    Файл не должен превышать размер в 2 мб
                  </div>
                </Col>
              </Col>
              <Col className="w-full flex px-5 gap-x-5">
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Название</label>
                  <Input placeholder={"Вот такое вот название"} type="text" />
                </div>
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Номер телефона</label>
                  <Input placeholder={"Ввести"} type="tel" />
                </div>
              </Col>
              <Col className="w-full px-5 gap-x-5">
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Описание</label>
                  <Input.TextArea placeholder={"Комментарии"} />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Локация
                </div>
              </div>
            </div>
            <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
              <Col className="w-full flex px-5 gap-x-5">
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Страна</label>
                  <Select options={countryOptions} placeholder={"Выберите"} />
                </div>
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Город</label>
                  <Select options={cityOptions} placeholder={"Выберите"} />
                </div>
              </Col>
              <Col className="w-full px-5 gap-x-5">
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Ориентир</label>
                  <Input placeholder={"Ввести"} />
                </div>
              </Col>
              <Col className="w-full px-5 gap-x-5">
                <div className="flex flex-1 flex-col gap-y-1">
                  <label className="text-sm">Ссылка на адрес</label>
                  <Input placeholder={"Ввести"} />
                </div>
              </Col>
              <Col className="w-full px-5 gap-x-5">
                <img src={maps} alt={"maps-placeholder"} className={"w-full"} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="flex flex-col gap-y-5 pt-5 pr-5 flex-1 h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex items-start gap-x-5">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Статус
                </div>
                {renderStatus}
              </div>
              <div className={"flex-1 flex justify-end"}>
                <Switch
                  checked={active}
                  onChange={(s) => setActive(s)}
                  className="bg-gray-400"
                />
              </div>
            </div>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex items-start gap-x-5">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Онлайн бронирование
                </div>
              </div>
              <div className={"flex-1 flex justify-end"}>
                <Switch defaultChecked={true} className="bg-gray-400" />
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
