import React, { FC, useMemo, useState } from "react";
import { Col, Modal, Row, Select, Input as AntdInput, TimePicker } from "antd";
import { PencilIcon } from "../../../../assets/icons/all";
import TrashIcon from "../../../../assets/svg/trash.svg";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Input from "../../../Input";

type Master = {
  name: string;
  price: number;
  time: number;
  consumables: string;
};

const masters: Master[] = [
  {
    name: "Иван Иванов",
    price: 100000,
    time: 1,
    consumables: "Свои",
  },
  {
    name: "Иван Иванов",
    price: 100000,
    time: 1,
    consumables: "Свои",
  },
  {
    name: "Иван Иванов",
    price: 100000,
    time: 1,
    consumables: "Свои",
  },
  {
    name: "Иван Иванов",
    price: 100000,
    time: 1,
    consumables: "Свои",
  },
];

const Masters: FC<{}> = () => {
  const [create, setCreate] = useState(false);
  const mastersInfo = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <div className="rounded-md bg-tailwindui-white w-full overflow-hidden flex flex-col items-start justify-start">
        {masters.map((master) => {
          return (
            <div
              className="self-stretch overflow-hidden flex flex-row items-center justify-between py-4 px-6 border-b-[1px] border-solid border-gray-200"
              key={master.name}
            >
              <div className="flex-1 leading-[20px]">{master.name}</div>
              <div className="flex-1 leading-[20px]">{master.price} сум</div>
              <div className="flex-1 leading-[20px]">{master.time} ч.</div>
              <div className="flex-1 leading-[20px]">{master.consumables}</div>

              <div className="flex flex-1 gap-x-5 justify-end">
                <PencilIcon className={"w-6 h-6"} />
                <img
                  className="w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={TrashIcon}
                  onClick={() => {}}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [masters]);

  const mastersList = useMemo(() => {
    return (
      <Col
        className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start"
        key="masters"
      >
        <Row className="bg-white w-full gap-y-5 wrap">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-gray-50 px-5 overflow-hidden flex items-center justify-between py-2.5 text-xs text-gray-500 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 leading-[16px]">ИМЯ</div>
              <div className="flex-1 leading-[16px]">ЦЕНА</div>
              <div className="flex-1 leading-[16px]">ВРЕМЯ</div>
              <div className="flex-1 leading-[16px]">РАСХОДНИКИ</div>
              <div className="flex-1" />
            </div>
            {mastersInfo}
          </Col>
        </Row>
      </Col>
    );
  }, [mastersInfo]);

  return (
    <Row className="flex flex-col gap-y-5 w-full">
      <Modal
        open={create}
        title={
          <Row className="flex justify-between items-center">
            <Col className="text-base font-semibold">Создать мастера</Col>
            <Col>
              <XMarkIcon className="w-5 h-5" onClick={() => setCreate(false)} />
            </Col>
          </Row>
        }
        children={
          <Row className="flex flex-col w-full h-full py-4 gap-y-3">
            <Col className="flex flex-col flex-1 gap-y-1">
              <label>Мастер</label>
              <Select
                options={[
                  { value: "ivan", label: "Иван Иванов" },
                  { value: "ivan1", label: "Иван Иванов1" },
                  { value: "ivan2", label: "Иван Иванов2" },
                ]}
              />
            </Col>
            <Col className="flex flex-1 justify-between gap-x-5 items-end">
              <div className="flex flex-col flex-1 gap-y-1">
                <label className="text-sm">Цена</label>
                <Input
                  placeholder={""}
                  className={"border-2 border-gray-100 h-full"}
                  type="text"
                  showIcon
                  icon={
                    <div
                      className={
                        "absolute top-1 right-4 z-30 text-gray-500 text-base"
                      }
                    >
                      USD
                    </div>
                  }
                />
              </div>
              <div className="flex flex-col flex-1 gap-y-1">
                <label>Длительность</label>
                <TimePicker.RangePicker placeholder={["От", "До"]} clearIcon />
              </div>
            </Col>
            <Col className="flex flex-col flex-1 gap-y-1">
              <label>Расходники</label>
              <AntdInput />
            </Col>
          </Row>
        }
        closeIcon={null}
        centered
        maskClosable={true}
        onCancel={() => {
          setCreate(false);
        }}
        footer={() => {
          return (
            <Row className="flex justify-between items-center gap-x-5">
              <Col className="flex-1">
                <button
                  className="w-full rounded-md overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] border-2 border-gray-300 hover:bg-gray-100"
                  onClick={() => {
                    setCreate(false);
                  }}
                >
                  <div className="leading-[20px] font-medium">Отмена</div>
                </button>
              </Col>
              <Col className="flex-1">
                <button
                  className="w-full text-white rounded-md border-2 border-brand bg-brand overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] hover:bg-blue-500 hover:border-blue-500"
                  onClick={() => {
                    setCreate(false);
                  }}
                >
                  <div className="leading-[20px] font-medium">Добавить</div>
                </button>
              </Col>
            </Row>
          );
        }}
      />
      <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
        <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
          <div className="flex-1 flex items-center justify-between">
            <div className="self-stretch leading-[28px] font-medium text-xl">
              Список мастеров
            </div>
            <div className={"flex gap-x-5 items-center"}>
              <button
                onClick={() => setCreate(true)}
                className="rounded-md bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white"
              >
                <div className="leading-[16px] font-medium">Добавить</div>
              </button>
            </div>
          </div>
        </div>
        <Row className="flex flex-col gap-y-5 w-full h-full">{mastersList}</Row>
      </Col>
    </Row>
  );
};

export default Masters;
