import React, { FC, useMemo, useState } from "react";
import { Col, Row, Switch, TimePicker } from "antd";
import { PlusIcon } from "@heroicons/react/20/solid";
import maps from "../../assets/images/maps-placeholder.png";
import { Link } from "react-router-dom";

const Branches: FC<{}> = () => {
  const renderCards = useMemo(() => {
    return [
      { name: "Филиал 1", id: "branch1" },
      { name: "Филиал 2", id: "branch2" },
      { name: "Филиал 3", id: "branch3" },
    ].map((br, index) => {
      return (
        <Col
          className="rounded-lg overflow-hidden  flex flex-col items-start bg-white justify-start"
          key={br.id}
        >
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-center gap-y-3">
              <div className={"w-full"}>
                <img src={maps} alt={"maps-placeholder"} />
              </div>
              <div className="flex justify-between w-full items-center text-center text-gray-900 px-4">
                <div className={"font-bold text-base"}>{br.name}</div>
                <Switch defaultChecked className="bg-gray-400" />
              </div>
              <div className="flex h-fit w-full flex-col gap-y-6 px-4 pb-4 pt-2">
                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"text-gray-500"}>Статус</div>
                  <div className={"text-green-500"}>Активен</div>
                </div>
                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"text-gray-500"}>Страна</div>
                  <div className={"font-semibold"}>Узбекистан</div>
                </div>
                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"text-gray-500"}>Город</div>
                  <div className={"font-semibold"}>Ташкент</div>
                </div>
                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"text-gray-500"}>График работы</div>
                  <div className={"font-semibold"}>09:00 - 23:00</div>
                </div>
                <div className={"flex-1"}>
                  <Link to={`${br.id}/edit`}>
                    <button className="rounded-md w-full bg-brand border-2 border-brand hover:bg-transparent hover:text-brand hover:border-solid flex items-center justify-center py-3 text-sm text-white">
                      <div className="leading-[16px] font-medium">
                        Редактировать
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }, []);
  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-full flex flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Филиалы</div>
          </div>
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-3 px-4 text-tailwindui-white gap-x-2">
            <PlusIcon className={"w-5 h-5"} />
            <div className="leading-[20px] font-medium">Добавить филиал</div>
          </button>
        </div>
      </header>
      <Row className="isolate w-full h-full overflow-auto">
        <Row className="flex flex-col gap-y-5 pt-5 px-5 w-full h-full">
          <button
            onClick={() => {}}
            className="rounded-md w-full bg-transparent border-dashed border-2 border-brand hover:bg-blue-100 hover:border-solid flex items-center justify-center py-6 text-sm text-brand gap-x-2"
          >
            <PlusIcon className={"w-6 h-6"} />
            <div className="leading-[16px] font-medium">Добавить филиал</div>
          </button>
        </Row>
        <Row className="flex gap-10 pt-5 px-5 h-full" wrap>
          {renderCards}
        </Row>
      </Row>
    </div>
  );
};

export default Branches;
