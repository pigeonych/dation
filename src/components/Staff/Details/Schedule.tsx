import React, { FC, useMemo } from "react";
import { Row, Col, Switch, TimePicker } from "antd";
import { PlusIcon } from "@heroicons/react/20/solid";
import { rusWeekDays } from "../../../constants";

const Schedule: FC<{}> = () => {
  const renderCards = useMemo(() => {
    return rusWeekDays.map((day) => {
      return (
        <Col
          className="rounded-lg overflow-hidden  flex flex-col items-start bg-white justify-start"
          key={day.toLowerCase()}
        >
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-center gap-y-3">
              <div className="flex justify-between w-full items-center text-center text-gray-900">
                <div className={"font-bold text-base"}>{day}</div>
                <Switch defaultChecked className="bg-gray-400" />
              </div>
              <div className="flex h-fit w-full flex-col gap-y-5">
                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"flex flex-1 flex-col gap-y-1"}>
                    <label className={"text-xs"}>Начало работы</label>
                    <TimePicker placeholder={"Выберите"} />
                  </div>
                  <div className={"flex flex-1 flex-col gap-y-1"}>
                    <label className={"text-xs"}>Конец работы</label>
                    <TimePicker placeholder={"Выберите"} />
                  </div>
                </div>

                <div className={"flex justify-between items-center gap-x-4"}>
                  <div className={"flex flex-1 flex-col gap-y-1"}>
                    <label className={"text-xs"}>Начало перерыва</label>
                    <TimePicker placeholder={"Выберите"} />
                  </div>
                  <div className={"flex flex-1 flex-col gap-y-1"}>
                    <label className={"text-xs"}>Конец перерыва</label>
                    <TimePicker placeholder={"Выберите"} />
                  </div>
                </div>
                <div className={"flex-1"}>
                  <button className="rounded-md w-full bg-transparent border-dashed border-2 border-brand hover:bg-blue-100 hover:border-solid flex items-center justify-center py-2 text-sm text-brand gap-x-2">
                    <PlusIcon className={"w-6 h-6"} />
                    <div className="leading-[16px] font-medium">
                      Добавить расходник
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    });
  }, []);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex gap-10 pt-5 px-5 h-full" wrap>
        {renderCards}
      </Row>
    </Row>
  );
};

export default Schedule;
