import React, { FC, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Row, Col, Switch } from "antd";
import Main from "./Main";
import Settings from "./Settings";
import Localization from "./Localization";
import Masters from "./Masters";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

type EditType = "main" | "settings" | "localization" | "masters";

const TranslatedEditType: Record<string, string> = {
  main: "Основное",
  settings: "Настройки",
  localization: "Локализация",
  masters: "Мастера",
};

const CategoryView: FC<{}> = () => {
  const [type, setType] = useState<EditType>("main");

  const renderTypes = useMemo(
    () =>
      ["main", "settings", "localization", "masters"].map((item: string) => {
        const isSelected = item === type;
        return (
          <Col
            className={`flex flex-col items-center justify-center ${
              isSelected ? "text-indigo-500" : "text-black"
            }`}
            onClick={() => {
              setType(item as EditType);
            }}
            key={item}
          >
            <div className="flex flex-row items-center justify-center pt-0 px-1 pb-4 gap-[8px]">
              <div className="leading-[20px] font-medium">
                {TranslatedEditType[item]}
              </div>
            </div>
            {isSelected && <div className="self-stretch bg-indigo-500 h-0.5" />}
          </Col>
        );
      }),
    [type],
  );

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="flex flex-row items-center justify-between gap-[16px]">
          <Link to={"/services"}>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Категория 1</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Сохранить</div>
          </button>
        </div>
      </header>
      <Row className="isolate w-full h-full overflow-auto">
        <Row className="flex flex-col gap-y-5 pt-5 px-5 w-[40%] h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-5 px-7 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex items-center justify-between">
                <div className="self-stretch font-medium text-xl">
                  Список услуг
                </div>
                <PlusIcon
                  color={"white"}
                  className={
                    "w-9 h-9 py-1 px-1 bg-brand rounded-md cursor-pointer"
                  }
                />
              </div>
            </div>
            <Row className="flex flex-col bg-white w-full">
              <Col
                className={
                  "w-full flex justify-between items-center px-7 py-5 border-b-2 border-gray-100"
                }
              >
                <div className={"text-sm"}>Название услуги</div>
                <Switch defaultChecked={false} className="bg-gray-400" />
              </Col>
              <Col
                className={
                  "w-full flex justify-between items-center px-7 py-5 border-b-2 border-gray-100"
                }
              >
                <div className={"text-sm"}>Название услуги</div>
                <Switch defaultChecked={true} className="bg-gray-400" />
              </Col>
              <Col
                className={
                  "w-full flex justify-between items-center px-7 py-5 border-b-2 border-gray-100"
                }
              >
                <div className={"text-sm"}>Название услуги</div>
                <Switch defaultChecked={true} className="bg-gray-400" />
              </Col>
              <Col
                className={
                  "w-full flex justify-between items-center px-7 py-5 border-b-2 border-gray-100"
                }
              >
                <div className={"text-sm"}>Название услуги</div>
                <Switch defaultChecked={true} className="bg-gray-400" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="flex flex-col gap-y-5 pt-5 pr-5 w-[60%] h-full">
          <Row className="w-full pt-3 gap-x-5 border-b-2 border-b-gray-200">
            {renderTypes}
          </Row>
          <Row className={"w-full flex flex-col"}>
            {type === "main" && <Main />}
            {type === "settings" && <Settings />}
            {type === "localization" && <Localization />}
            {type === "masters" && <Masters />}
          </Row>
        </Row>
      </Row>
    </div>
  );
};

export default CategoryView;
