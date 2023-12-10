import React, { FC, useEffect, useMemo, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Row, Col, Switch } from "antd";
import { translateDate } from "../../../utils/translateDate";
import moment from "moment";
import { rusWeekDays, rusWeekDaysShort } from "../../../constants";

type ItemType = {
  startTime?: string;
  endTime?: string;
  work: boolean;
  key: number;
  process?: "ready" | "processing" | "canceled";
};

const items: ItemType[] = [
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 1,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 2,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 3,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 4,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 5,
  },
  {
    work: false,
    key: 6,
  },
  {
    work: false,
    key: 7,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 8,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 9,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    work: true,
    process: "ready",
    key: 10,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    process: "processing",
    work: true,
    key: 11,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    process: "processing",
    work: true,
    key: 12,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    process: "canceled",
    work: true,
    key: 13,
  },
  {
    startTime: "10:00",
    endTime: "22:00",
    process: "canceled",
    work: true,
    key: 14,
  },
];

const Calendar: FC<{}> = () => {
  const [thisMoment, setThisMoment] = useState<moment.Moment>(
    moment().startOf("day"),
  );
  const [chosenMoment, setChosenMoment] = useState(thisMoment);
  const thisMonth = useMemo(() => thisMoment.format("MMMM"), [thisMoment]);
  const thisYear = useMemo(() => thisMoment.format("YYYY"), [thisMoment]);

  const twoWeeks = useMemo(() => {
    let _twoWeeks: moment.Moment[] = [];

    for (let i = 0; i < 14; i++) {
      const day = thisMoment.clone().add(i, "days");
      _twoWeeks.push(day);
    }

    return _twoWeeks;
  }, [thisMoment, chosenMoment]);

  const render2Weeks = useMemo(() => {
    return (
      <Row className={"w-full flex gap-x-3"} wrap>
        {twoWeeks.map((m) => {
          const isChosen = chosenMoment.clone().isSame(m);
          const date = m.clone().format("DD");
          const dayOfWeek = rusWeekDaysShort[m.clone().day()];
          const isWeekends = m.clone().day() === 6 || m.clone().day() === 5;
          return (
            <Col
              key={m.clone().unix()}
              onClick={() => {
                setChosenMoment(m);
              }}
              className={`flex-1 py-2 px-6 border-2 border-white hover:border-gray-100 flex flex-col ${
                isChosen ? "bg-brand border-brand" : ""
              } justify-center items-center rounded-lg`}
            >
              <div
                className={`${
                  isChosen
                    ? "text-white"
                    : isWeekends
                    ? "text-red-500"
                    : "text-black"
                }`}
              >
                {date}
              </div>
              <div
                className={`${
                  isChosen
                    ? "text-white"
                    : isWeekends
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {dayOfWeek}
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }, [twoWeeks]);

  const renderItems = useMemo(() => {
    return (
      <Row
        className={"flex w-full gap-x-3 border-t-2 border-gray-100 pt-4"}
        wrap
      >
        {items.map((item) => {
          const bgColor =
            item.process === "ready"
              ? "bg-green-200"
              : item.process === "processing"
              ? "bg-yellow-200"
              : item.process === "canceled"
              ? "bg-red-200"
              : "bg-gray-200";
          const textColor =
            item.process === "ready"
              ? "text-green-800"
              : item.process === "processing"
              ? "text-yellow-800"
              : item.process === "canceled"
              ? "text-red-800"
              : "text-gray-800";
          return (
            <Col
              className={`flex-1 py-6 px-6 border-2 border-white hover:border-gray-100 flex flex-col justify-center items-center rounded-lg ${bgColor} ${textColor}`}
            >
              {item.startTime} - {item.endTime}
            </Col>
          );
        })}
      </Row>
    );
  }, []);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 flex-1 h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-center gap-x-5">
              <div className="flex h-fit w-full flex-col gap-y-5">
                <div className="hidden w-full max-w-md flex-none md:block">
                  <div className="flex items-center text-center text-gray-900">
                    <button
                      type="button"
                      onClick={() => {
                        setThisMoment(thisMoment.clone().subtract(2, "weeks"));
                      }}
                      className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <ChevronLeftIcon
                        className="h-7 w-7 text-black"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex-auto text-base font-bold">
                      {translateDate(`${thisMonth} ${thisYear}`, true)}
                    </div>
                    <button
                      onClick={() => {
                        setThisMoment(thisMoment.clone().add(2, "weeks"));
                      }}
                      type="button"
                      className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <ChevronRightIcon
                        className="h-7 w-7 text-black"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className={"w-full"}>{render2Weeks}</div>
                <div className={"w-full"}>{renderItems}</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Calendar;
