import React, { FC, useEffect, useMemo, useState } from "react";
import { Button, Col, Row, Select, Upload, Input, Switch, Modal } from "antd";
import { PaperClipIcon } from "../../../assets/icons/all";
import { CheckIcon, StarIcon, XMarkIcon } from "@heroicons/react/20/solid";

const LabelTitles: Record<string, string> = {
  waiting: "Ожидается",
  busy: "Большая занятость",
  ready: "Готово",
  canceled: "Отменено",
  etc: "Какие-то названия",
};

const User: FC<{}> = () => {
  const [active, setActive] = useState(true);
  const [labels, setLabels] = useState(["waiting", "busy", "ready", "etc"]);

  const renderLabels = useMemo(() => {
    return (
      <div className={"flex flex-wrap items-center gap-x-3 gap-y-2"}>
        {labels.map((l) => {
          const textColor =
            l === "waiting"
              ? "text-brand"
              : l === "ready"
              ? "text-green-800"
              : l === "canceled"
              ? "text-red-800"
              : "text-gray-800";

          const icon =
            l === "waiting" ? (
              <StarIcon className={`w-3.5 h-3.5 ${textColor}`} />
            ) : l === "ready" ? (
              <CheckIcon className={`w-3.5 h-3.5 ${textColor}`} />
            ) : null;

          const bgColor =
            l === "waiting"
              ? "bg-blue-100"
              : l === "ready"
              ? "bg-green-100"
              : l === "canceled"
              ? "bg-red-100"
              : "bg-gray-100";

          return (
            <div
              className={`inline-flex justify-between items-center rounded-2xl p-1 px-3 gap-x-1 ${bgColor}`}
            >
              {icon}
              <div className={`text-xs font-medium ${textColor}`}>
                {LabelTitles[l]}
              </div>
              <XMarkIcon
                className={`w-4 h-4 text-sm mt-0.5 ${textColor}`}
                onClick={() => {
                  setLabels((prev) => {
                    return prev.filter((p) => p !== l);
                  });
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }, [labels]);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 flex-1 h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
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
            <Col className="flex w-full px-5 gap-x-3">
              <div className="flex flex-1 flex-col w-full gap-y-1">
                <label className="text-sm">Имя</label>
                <Input placeholder={"Ваше имя"} type="text" />
              </div>
              <div className="flex flex-1 flex-col w-full gap-y-1">
                <label className="text-sm">Роль</label>
                <Input placeholder={"Название роли"} type="text" />
              </div>
            </Col>
            <Col className="w-full flex px-5 gap-x-3">
              <div className="flex flex-1 flex-col gap-y-1">
                <label className="text-sm">Телефон</label>
                <Input placeholder={"+998"} type={"tel"} />
              </div>
              <div className="flex flex-1 flex-col gap-y-1">
                <label className="text-sm">Почта</label>
                <Input placeholder={"example@gmail.com"} type={"email"} />
              </div>
            </Col>
            <Col className="w-full flex px-5 gap-x-3">
              <div className="flex flex-1 flex-col gap-y-1">
                <label className="text-sm">Профессия</label>
                <Select
                  options={[
                    { label: "Профессия 1", value: "prof1" },
                    { label: "Профессия 2", value: "prof2" },
                    { label: "Профессия 3", value: "prof3" },
                  ]}
                  placeholder={"Название"}
                />
              </div>
            </Col>
            <Col className={"w-full flex flex-col px-5 gap-y-1"}>
              <label>О мастере</label>
              <Input.TextArea />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="flex flex-col gap-y-5 pt-5 pr-5 flex-1 h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-center gap-x-5">
              <div className="self-stretch leading-[24px] font-medium text-xl">
                Статус
              </div>
              <div
                className={`inline-flex justify-between items-center rounded-2xl p-1 px-5 gap-x-3 ${
                  active ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <div
                  className={`text-xs font-medium ${
                    active ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {active ? "Активен" : "Не активен"}
                </div>
              </div>
            </div>
            <Switch
              checked={active}
              onChange={(e) => {
                setActive(e);
              }}
              className="bg-gray-400"
            />
          </div>
        </Col>
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-start gap-x-5">
              <div className="self-stretch leading-[24px] font-medium text-xl">
                Дополнительно о мастере
              </div>
            </div>
          </div>
          <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
            <Col className={"w-full px-5 flex flex-col gap-y-2"}>
              <label className={"text-sm"}>Лейблы</label>
              <div className={"flex items-center w-full gap-x-2"}>
                <Select
                  className={"w-full flex-1"}
                  placeholder={"Выбрать"}
                  options={[
                    { value: "waiting", label: "Ожидается" },
                    { value: "ready", label: "Готово" },
                    { value: "busy", label: "Большая занятость" },
                    { value: "canceled", label: "Отменено" },
                  ]}
                  onChange={(v: string) =>
                    setLabels((pr) => (pr.includes(v) ? pr : [...pr, v]))
                  }
                />
                {/*<PlusIcon*/}
                {/*  color={"white"}*/}
                {/*  className={*/}
                {/*    "w-8 h-full py-1 px-1 bg-brand rounded-md cursor-pointer"*/}
                {/*  }*/}
                {/*  onClick={() => {*/}
                {/*    setLabels((prev) => {*/}
                {/*      if (add) return [...prev, add];*/}
                {/*      else return prev;*/}
                {/*    });*/}
                {/*  }}*/}
                {/*/>*/}
              </div>
              {renderLabels}
            </Col>
          </Row>
        </Col>
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-start gap-x-5">
              <div className="self-stretch leading-[24px] font-medium text-xl">
                Настройки
              </div>
            </div>
          </div>
          <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
            <Col className={"w-full px-5 flex flex-col gap-y-4"}>
              <div className={"flex w-full justify-between items-center"}>
                <div>Отображать в бронировании</div>
                <Switch defaultChecked className="bg-gray-400" />
              </div>
              <div className={"flex w-full justify-between items-center"}>
                <div>СМС оповещание</div>
                <Switch defaultChecked className="bg-gray-400" />
              </div>
              <div className={"flex w-full justify-between items-center"}>
                <div>Принимает чаевые</div>
                <Switch defaultChecked className="bg-gray-400" />
              </div>
            </Col>
            <Col
              className={
                "w-full px-5 py-5 flex flex-col gap-y-2 border-t-2 border-gray-100"
              }
            >
              <label className={"text-sm"}>Перерывы между приемами</label>
              <Input type={"number"} min={0} placeholder={"В минутах"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default User;
