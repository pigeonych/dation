import React, { FC, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  startOfToday,
  format,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isToday,
  isSameMonth,
  isEqual,
  parse,
  add,
  getDay,
  startOfWeek,
} from "date-fns";
import { translateDate } from "../../utils/translateDate";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Calendar: FC<{
  setDay: React.Dispatch<React.SetStateAction<Date>>;
}> = ({ setDay }) => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMMM-yyyy", new Date());
  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  useEffect(() => {
    setDay(selectedDay);
  }, [selectedDay]);

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  };

  const prevMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  };

  return (
    <div className="flex h-fit w-full flex-col">
      <div className="hidden w-full max-w-md flex-none md:block">
        <div className="flex items-center text-center text-gray-900">
          <button
            type="button"
            onClick={prevMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto text-base font-bold">
            {translateDate(format(firstDayCurrentMonth, "MMMM yyyy"), true)}
          </div>
          <button
            onClick={nextMonth}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          <div>Пн</div>
          <div>Вт</div>
          <div>Ср</div>
          <div>Чт</div>
          <div>Пт</div>
          <div>Сб</div>
          <div>Вс</div>
        </div>
        <div className="isolate mt-2 grid grid-cols-7 rounded-lg text-sm bg-white">
          {newDays.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                "hover:bg-gray-100 border-gray-200 rounded-lg",
                dayIdx === 0 && colStartClasses[getDay(day)],
                "focus:z-10 text-center bg-white",
              )}
            >
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  isEqual(day, selectedDay) && "text-white",
                  !isEqual(day, selectedDay) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-900",
                  !isEqual(day, selectedDay) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-400",
                  isToday(day) && !isEqual(day, selectedDay) && "text-brand",
                  dayIdx === 0 && "rounded-tl-lg",
                  dayIdx === 6 && "rounded-tr-lg",
                  dayIdx === newDays.length - 7 && "rounded-bl-lg",
                  dayIdx === newDays.length - 1 && "rounded-br-lg",
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={classNames(
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-lg",
                    isEqual(day, selectedDay) && isToday(day) && "bg-brand",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-brand",
                  )}
                >
                  {format(day, "d")}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];
