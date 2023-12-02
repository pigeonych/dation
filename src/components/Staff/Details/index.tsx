import React, { FC, ReactNode, useMemo, useState } from "react";
import { Button, Col, Input, Modal, Row, Upload } from "antd";
import User from "./User";
import Services from "./Services";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import Stats from "./Stats";
import {
  CalendarIcon,
  ChartBarSquareIcon,
  ChevronLeftIcon,
  FlagIcon,
  RectangleStackIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { PaperClipIcon } from "../../../assets/icons/all";
import Notification from "../../../utils/notification";

type EditType = "user" | "services" | "calendar" | "schedule" | "stats";

const TranslatedEditType: Record<string, string> = {
  user: "Пользователь",
  services: "Услуги",
  calendar: "Календарь",
  schedule: "График работы",
  stats: "Статистика",
};

const EditTypeIcons: Record<string, ReactNode> = {
  user: <UserIcon className={"w-4 h-4"} />,
  services: <RectangleStackIcon className={"w-4 h-4"} />,
  calendar: <CalendarIcon className={"w-4 h-4"} />,
  schedule: <FlagIcon className={"w-4 h-4"} />,
  stats: <ChartBarSquareIcon className={"w-4 h-4"} />,
};

const Details: FC<{}> = () => {
  const [type, setType] = useState<EditType>("user");

  const renderTypes = useMemo(
    () =>
      ["user", "services", "calendar", "schedule", "stats"].map(
        (item: string) => {
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
              <div className="flex flex-row items-center justify-center pt-0 px-1 pb-4 gap-x-2">
                {EditTypeIcons[item]}
                <div className="leading-[20px] font-medium">
                  {TranslatedEditType[item]}
                </div>
              </div>
              {isSelected && (
                <div className="self-stretch bg-indigo-500 h-0.5" />
              )}
            </Col>
          );
        },
      ),
    [type],
  );

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="flex flex-row items-center justify-between gap-[16px]">
          <Link to={"/staff"}>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Иван Иванов</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="rounded-md overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] border-2 border-gray-300 hover:bg-gray-100">
            <div className="leading-[20px] font-medium">Сбросить пароль</div>
          </button>
          <button className="text-red-800 rounded-md border-2 border-red-100 bg-red-100 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] hover:bg-red-500 hover:border-red-500 hover:text-white">
            <div className="leading-[20px] font-medium">Удалить мастера</div>
          </button>
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 border-2 border-brand overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Сохранить</div>
          </button>
        </div>
      </header>

      <Row className="flex items-center w-full px-5 pt-3 gap-x-9 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      {type === "user" && <User />}
      {type === "services" && <Services />}
      {type === "calendar" && <Calendar />}
      {type === "schedule" && <Schedule />}
      {type === "stats" && <Stats />}
    </div>
  );
};

export default Details;
