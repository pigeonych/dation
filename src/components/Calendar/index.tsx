import React, { FC, useEffect, useRef } from "react";

import classNames from "../../utils/classNames";
import TimeIcon from "../../assets/svg/clock.svg";
import { format } from "date-fns";
import { translateDate } from "../../utils/translateDate";
import { rusWeekDays } from "../../constants";
import Select from "../Select";
import Input from "../Input";

const Calendar: FC<{ day: Date }> = ({ day }) => {
  const container = useRef<HTMLDivElement>(null);
  const containerNav = useRef<HTMLDivElement>(null);
  const containerOffset = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <h1 className="font-semibold leading-6 text-gray-800 text-2xl leading-9">
          <time dateTime={format(day, "yyyy-MM-dd")}>
            {translateDate(format(day, "MMMM dd"), false) +
              ", " +
              rusWeekDays[day.getDay()]}
          </time>
        </h1>
        <div className="flex items-center">
          <button
            type="button"
            className="ml-6 rounded-md  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Создать запись
          </button>
        </div>
      </header>
      <div className="flex bg-gray-100 w-full py-4 px-6 items-center justify-between gap-x-4">
        <div className="sm:w-64 md:w-72 xl:w-80 2xl:w-96">
          <Input placeholder={"Поиск..."} type={"text"} />
        </div>
        <div className="sm:w-52 md:w-56 xl:w-64 2xl:w-64">
          <Select placeholder="По сотрудникам" />
        </div>
        <div className="sm:w-52 md:w-56 xl:w-64 2xl:w-64">
          <Select placeholder="По ресурсам" />
        </div>
        <div className="sm:w-52 md:w-56 xl:w-64 2xl:w-64">
          <Select placeholder="По категориям" />
        </div>
        <div className="sm:w-52 md:w-56 xl:w-64 2xl:w-64">
          <Select placeholder="Выбрать статус" />
        </div>
      </div>
      <div
        ref={container}
        className="isolate flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div
            ref={containerNav}
            className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
          >
            <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                M{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  10
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                T{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  11
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                W{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                  12
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                T{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  13
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                F{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  14
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                S{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  15
                </span>
              </button>
              <button
                type="button"
                className="flex flex-col items-center pb-3 pt-2"
              >
                S{" "}
                <span className="mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900">
                  16
                </span>
              </button>
            </div>

            <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <div>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-around ml-2">
                  <span className="text-xs font-medium leading-5 text-black">
                    Тимур
                  </span>
                  <span className="text-xs font-normal text-gray-500 leading-normal">
                    Барбер
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    7AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    7PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11PM
                  </div>
                </div>
                <div />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="col-start-8 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style={{
                  gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
                }}
              >
                <li
                  className="relative mt-px flex sm:col-start-4"
                  style={{ gridRow: "68 / span 30" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg p-2 bg-yellow-200 text-xs leading-5 hover:bg-yellow-100 gap-y-2"
                  >
                    <div className="py-2 px-4 h-6 items-center bg-yellow-100 rounded-xl hidden lg:flex xl:justify-start lg:justify-center">
                      <div className={"w-2 h-2 bg-yellow-400 rounded-full"} />
                      <p className="text-yellow-800 ml-2 text-xs font-normal leading-3 hidden xl:block">
                        В процессе
                      </p>
                    </div>
                    <p className="text-black text-xs font-normal">
                      +998 93 999 88 77
                    </p>
                    <div className="flex items-center">
                      <img src={TimeIcon} alt="time-icon" />
                      <p className="text-xs font-normal text-gray-500 ml-1">
                        11:00 - 15:00
                      </p>
                    </div>
                    <p className="text-xs leading-4">
                      Стрижка, укладка, гель для волос
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px flex sm:col-start-3"
                  style={{ gridRow: "92 / span 30" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">
                      Flight to Paris
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-12T07:30">7:30 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px hidden sm:col-start-6 sm:flex"
                  style={{ gridRow: "122 / span 24" }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
                  >
                    <p className="order-1 font-semibold text-gray-700">
                      Meeting with design team at Disney
                    </p>
                    <p className="text-gray-500 group-hover:text-gray-700">
                      <time dateTime="2022-01-15T10:00">10:00 AM</time>
                    </p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;