import React, { FC, useMemo } from "react";
import { Row, Col, Upload, Button, Switch, TimePicker } from "antd";
import { PaperClipIcon } from "../../../../assets/icons/all";
import Input from "../../../Input";
import { Select } from "antd";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const Main: FC<{}> = () => {
  const [counter, setCounter] = React.useState<number>(1);
  const [inRange, setInRange] = React.useState<boolean>(true);
  const renderPrice = useMemo(() => {
    return inRange ? (
      <Col className="w-full flex justify-between items-end gap-x-5 px-5">
        <div className="flex w-1/2 flex-col gap-y-1">
          <label className="text-sm">Цена</label>
          <Input
            placeholder={"От"}
            className={"border-2 border-gray-100"}
            type="text"
            showIcon
            icon={
              <div
                className={
                  "absolute top-2 right-4 z-30 text-gray-500 text-base"
                }
              >
                USD
              </div>
            }
          />
        </div>
        <div className="flex w-1/2 flex-col gap-y-1">
          <Input
            placeholder={"До"}
            className={"border-2 border-gray-100"}
            type="text"
            showIcon
            icon={
              <div
                className={
                  "absolute top-2 right-4 z-30 text-gray-500 text-base"
                }
              >
                USD
              </div>
            }
          />
        </div>
      </Col>
    ) : (
      <Col className="w-full flex justify-between items-end gap-x-5 px-5">
        <div className="flex w-full flex-col gap-y-1">
          <label className="text-sm">Цена</label>
          <Input
            placeholder={"Цена"}
            className={"border-2 border-gray-100"}
            type="text"
            showIcon
            icon={
              <div
                className={
                  "absolute top-2 right-4 z-30 text-gray-500 text-base"
                }
              >
                USD
              </div>
            }
          />
        </div>
      </Col>
    );
  }, [inRange]);

  return (
    <Row className="flex flex-col gap-y-5 w-full">
      <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
        <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
          <div className="flex-1 flex flex-col items-start justify-center">
            <div className="self-stretch leading-[24px] font-medium text-xl">
              Данные услуги
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
          <Col className="w-full px-5">
            <div className="flex flex-col w-full gap-y-1">
              <label className="text-sm">Название</label>
              <Input
                placeholder={"Моя компания..."}
                className={"border-2 border-gray-100"}
                type="text"
              />
            </div>
          </Col>
          <Col className="w-full px-5">
            <div className="flex flex-col w-full gap-y-1">
              <label className="text-sm">Описание</label>
              <Input
                placeholder={"Русский"}
                className={"border-2 border-gray-100"}
                type="text"
              />
            </div>
          </Col>
          <Col className="w-full flex items-center gap-x-5 px-5">
            <Switch
              checked={inRange}
              onChange={() => {
                setInRange(!inRange);
              }}
              defaultChecked
            />
            <div className="text-sm">Указать цену в диапозоне</div>
          </Col>
          {renderPrice}
          <Col className="w-full flex items-center gap-x-5 px-5">
            <Switch defaultChecked />
            <div className="text-sm">Самостоятельный выбор</div>
          </Col>
          <Col className="w-full flex justify-between items-end gap-x-5 px-5">
            <div className="flex w-1/2 flex-col gap-y-1">
              <label className="text-sm">Длительность</label>
              <TimePicker
                onChange={(e) => {
                  console.log("visit time start: ", e);
                }}
                className={"border-2 border-gray-100 py-2"}
                placeholder={"Начало"}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-y-1">
              <TimePicker
                onChange={(e) => {
                  console.log("visit time end: ", e);
                }}
                className={"border-2 border-gray-100 py-2"}
                placeholder={"Конец"}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="w-full overflow-hidden flex flex-col items-start justify-start">
        <Row className="w-full flex justify-between gap-x-3" wrap>
          <Col className="w-[48%] flex flex-col rounded-lg bg-white">
            <div className="w-full bg-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200 rounded-lg">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Данные услуги
                </div>
              </div>
            </div>
            <Row className="w-full flex flex-col gap-y-5 p-4">
              <Row className="w-full flex items-end gap-3" wrap>
                <Col className="flex-1 flex-col gap-y-1">
                  <label className="text-sm">Ресурс</label>
                  <Select
                    options={[
                      { value: "rs1", label: "Ресурс 1" },
                      { value: "rs2", label: "Ресурс 2" },
                    ]}
                    placeholder={"Выбрать"}
                    className="w-full"
                  />
                </Col>
                <Col className="w-[100px] flex flex-col gap-y-1 relative">
                  <div className="w-full border-[2px] border-gray-100 rounded-md px-2 py-3.5 hover:border-[#84a5ff]">
                    <MinusIcon
                      className={
                        "w-5 h-5 absolute bottom-[20%] left-3.5 cursor-pointer"
                      }
                      color={"#9CA3AF"}
                      onClick={() => {
                        if (counter > 1) {
                          setCounter(counter - 1);
                        }
                      }}
                    />
                    <div
                      className={`absolute bottom-[20%] ${
                        counter > 9 ? "right-[44%]" : "right-[47%]"
                      }`}
                    >
                      {counter}
                    </div>
                    <PlusIcon
                      className={
                        "w-5 h-5 absolute bottom-[20%] right-3.5 cursor-pointer"
                      }
                      color={"#9CA3AF"}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Col className={"w-full"}>
                <button className="rounded-md w-full bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white gap-x-2">
                  <PlusIcon className={"w-6 h-6"} />
                  <div className="leading-[16px] font-medium">
                    Добавить ресурс
                  </div>
                </button>
              </Col>
            </Row>
          </Col>
          <Col className="w-[48%] flex flex-col rounded-lg bg-white">
            <div className="w-full bg-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200 rounded-lg">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Данные услуги
                </div>
              </div>
            </div>
            <Row className="w-full flex flex-col gap-y-5 p-4">
              <Row className="w-full flex items-end gap-3" wrap>
                <Col className="flex-1 flex-col gap-y-2">
                  <label className="text-sm">Ресурс</label>
                  <Select
                    options={[
                      { value: "rs1", label: "Ресурс 1" },
                      { value: "rs2", label: "Ресурс 2" },
                    ]}
                    placeholder={"Выбрать"}
                    className="w-full"
                  />
                </Col>
                <Col className="flex-1 flex-col gap-y-2">
                  <label className="text-sm">Вес</label>
                  <Select
                    options={[
                      { value: "w1", label: "Вес 1" },
                      { value: "w2", label: "Вес 2" },
                    ]}
                    placeholder={"Выбрать"}
                    className="w-full"
                  />
                </Col>
                <Col className="flex-1 flex-col gap-y-2">
                  <label className="text-sm">Цена</label>
                  <Select
                    options={[
                      { value: "pr1", label: "Цена 1" },
                      { value: "pr2", label: "Цена 2" },
                    ]}
                    placeholder={"Выбрать"}
                    className="w-full"
                  />
                </Col>
              </Row>
              <Col className={"w-full"}>
                <button className="rounded-md w-full bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white gap-x-2">
                  <PlusIcon className={"w-6 h-6"} />
                  <div className="leading-[16px] font-medium">
                    Добавить расходник
                  </div>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Main;
