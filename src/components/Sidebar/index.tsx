import React, { Fragment, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import logoPng from "../../assets/images/logo.png";
import { startOfToday } from "date-fns";
import { Dropdown, MenuProps } from "antd";

import { Calendar as MiniCalendar } from "./Calendar";
import Navigation from "./Navigation";
import Calendar from "../Calendar";
import EditPage from "../Edit/index";
import LocationMarker from "../../assets/svg/locationmarker.svg";
import ChevronDownIcon from "../../assets/svg/chevrondown.svg";
import Page404 from "../404";
import Company from "../Company";
import Services from "../Services";
import CategoryView from "../Services/Individual/CategoryView";
import Stock from "../Stock";

export default function Sidebar() {
  const today = startOfToday();
  const [branch, setBranch] = useState("Филиал 1");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [day, setDay] = useState(today);

  const branches: MenuProps["items"] = [
    {
      label: "Филиал 1",
      key: "Филиал 1",
    },
    {
      label: "Филиал 2",
      key: "Филиал 2",
    },
    {
      label: "Филиал 3",
      key: "Филиал 3",
    },
  ];

  const changeBranch: MenuProps["onClick"] = (e) => {
    setBranch(e.key);
  };

  const branchMenu: MenuProps = {
    items: branches,
    triggerSubMenuAction: "click",
    onClick: changeBranch,
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={logoPng}
                        alt="Your Company"
                      />
                    </div>
                    <div className="self-stretch box-border h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-5 gap-[12px] text-base border-b-[1px] border-solid border-gray-200">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <img
                          className="w-5 h-5 overflow-hidden shrink-0"
                          alt="locationMarker"
                          src={LocationMarker}
                        />
                        <div className="leading-[24px] font-medium">
                          {branch}
                        </div>
                      </div>
                      <img
                        className="w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src={ChevronDownIcon}
                      />
                    </div>
                    <div className="flex h-fit w-full shrink-0 items-center">
                      <MiniCalendar setDay={setDay} />
                    </div>
                    <Navigation />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}

          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="w-full h-16 p-4 pl-0">
              <Link to={"/"}>
                <img className="h-8 w-auto" src={logoPng} alt="Your Company" />
              </Link>
            </div>
            <Dropdown
              trigger={["click"]}
              menu={branchMenu}
              className="self-stretch box-border h-16 overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-5 gap-[12px] text-base border-b-[1px] border-t-[1px] border-solid border-gray-200"
            >
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="w-5 h-5 overflow-hidden shrink-0"
                  alt="locationMarker"
                  src={LocationMarker}
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  {branch}
                </div>
                <img
                  className="w-5 h-5 overflow-hidden shrink-0"
                  alt="downIcon"
                  src={ChevronDownIcon}
                />
              </div>
            </Dropdown>
            <div className="flex h-fit w-full shrink-0 items-center">
              <MiniCalendar setDay={setDay} />
            </div>
            <Navigation />
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <Routes>
            <Route path={"/"} element={<Company />} />
            // Company
            <Route path={"/company"} element={<Company />} />
            // Records
            <Route path={"/records/general"} element={<Calendar day={day} />} />
            <Route path={"/records/:id/edit"} element={<EditPage edit />} />
            <Route path={"/records/create"} element={<EditPage create />} />
            // Stock
            <Route path={"/stock"} element={<Stock />} />
            // Services
            <Route path={"/services"} element={<Services />} />
            <Route path={"/services/:id"} element={<CategoryView />} />
            // Other routes...
            <Route path={"*"} element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
