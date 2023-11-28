import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Row,
  Col,
  Table,
  Modal,
  Select,
  Input as AntdInput,
  Tag,
  DatePicker,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  ChevronRightIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Input from "../Input";
import { nanoid } from "nanoid";

interface DataType {
  key: string;
  date: string;
  storage: number;
  total: number;
  action?: () => void;
}

const data: DataType[] = [
  {
    key: "1",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "2",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "3",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "4",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "5",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "6",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "7",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "8",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "9",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "10",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "11",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "12",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "13",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "14",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "15",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "16",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "17",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "18",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "19",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "20",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "21",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "22",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
  {
    key: "23",
    date: "Название ресурса",
    storage: 32,
    total: 2,
  },
];

const ConsumableModal: FC<{
  show: boolean;
  setShow: (show: boolean) => void;
  view?: boolean;
}> = ({ setShow, show, view }) => {
  const [items, setItems] = useState([
    `resourceId:${nanoid()}`,
    `resourceId:${nanoid()}`,
    `resourceId:${nanoid()}`,
  ]);

  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const itemsRender = useMemo(
    () =>
      items.map((id, index) => {
        const isLabeled = index === 0;
        return (
          <Col
            className="flex flex-1 justify-between gap-x-3 items-end"
            key={id}
          >
            <div className="flex flex-col flex-1 gap-y-1">
              {isLabeled && <label className="text-sm">Ресурс</label>}
              <Select
                placeholder="Выбрать"
                options={[
                  { value: "resource1", label: "Шампунь 1" },
                  { value: "resource2", label: "Шампунь 2" },
                  { value: "resource3", label: "Шампунь 3" },
                ]}
                showSearch
                filterOption={filterOption}
                disabled={view}
              />
            </div>
            <div className="flex flex-col flex-1 gap-y-1">
              {isLabeled && <label>Расход</label>}
              <AntdInput
                type="number"
                min={0}
                placeholder={"Ввести"}
                className="w-full"
                disabled={view}
              />
            </div>
            <div className="flex flex-col flex-1 gap-y-1">
              {isLabeled && <label>Цена</label>}
              <AntdInput
                type="number"
                min={0}
                placeholder={"Ввести"}
                className="w-full"
                disabled={view}
              />
            </div>
            {!view && (
              <XMarkIcon
                className="w-8 h-8 border-2 border-gray-100 bg-gray-100 rounded-lg text-gray-500 cursor-pointer"
                onClick={() => {
                  setItems((prev) => {
                    return prev.filter((item) => item !== id);
                  });
                }}
              />
            )}
          </Col>
        );
      }),
    [items],
  );

  return (
    <Modal
      open={show}
      title={
        <Row className="flex justify-between items-center">
          <Col className="text-base font-semibold">
            {view ? "Смотреть" : "Создать"} расходник
          </Col>
          <Col>
            <XMarkIcon className="w-5 h-5" onClick={() => setShow(false)} />
          </Col>
        </Row>
      }
      children={
        <Row className="flex flex-col w-full h-full py-4 gap-y-3">
          <Col className="flex flex-col flex-1 gap-y-1">
            <label>Ресурс</label>
            <Select
              showSearch
              disabled={view}
              placeholder="Выбрать"
              filterOption={filterOption}
              options={[
                { value: "market1", label: "Магазин 1" },
                { value: "market2", label: "Магазин 2" },
                { value: "market3", label: "Магазин 3" },
              ]}
            />
          </Col>
          {itemsRender}
          {!view && (
            <Col className="w-full">
              <button
                onClick={() => {
                  setItems((prev) => [...prev, `resourceId:${nanoid()}`]);
                }}
                className="rounded-md w-full bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white gap-x-2"
              >
                <PlusIcon className={"w-6 h-6"} />
                <div className="leading-[16px] font-medium">
                  Добавить расходник
                </div>
              </button>
            </Col>
          )}
          <Col className="flex flex-col flex-1 gap-y-1">
            <label>Комментарий</label>
            <Input
              textarea
              disabled={view}
              type="text"
              placeholder="Оставить комментарий"
              className="border-2 border-gray-100 h-auto pb-7"
            />
          </Col>
        </Row>
      }
      closeIcon={null}
      centered
      maskClosable={true}
      onCancel={() => {
        setShow(false);
      }}
      footer={() => {
        return (
          <Row className="flex flex-col gap-y-5">
            <Col className="flex items-center justify-center w-full text-base font-semibold">
              Итого: 100 000 сум
            </Col>
            <Col className="w-full">
              <Row className="flex justify-between items-center gap-x-5">
                <Col className="flex-1">
                  <button
                    className="w-full rounded-md overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] border-2 border-gray-300 hover:bg-gray-100"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="leading-[20px] font-medium">Отмена</div>
                  </button>
                </Col>
                <Col className="flex-1">
                  <button
                    className="w-full text-white rounded-md border-2 border-brand bg-brand overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] hover:bg-blue-500 hover:border-blue-500"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="leading-[20px] font-medium">
                      {view ? "Сохранить" : "Добавить"}
                    </div>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      }}
    />
  );
};

const Procurement: FC<{}> = () => {
  const [createModal, setCreateModal] = useState(false);
  const [observeModal, setObserveModal] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Хранение",
      dataIndex: "storage",
      key: "storage",
    },
    {
      title: "Общая сумма",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: () => {
        return (
          <div className="flex flex-1 gap-x-5 justify-center">
            <ChevronRightIcon
              className="w-6 h-6"
              onClick={() => setObserveModal(true)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-2.5 pt-2.5 px-5 w-full h-full">
        <Col className="flex w-full gap-x-5">
          <Select
            className="flex-1"
            placeholder="Выбрать склад"
            options={[
              { value: "stock1", label: "Склад 1" },
              { value: "stock2", label: "Склад 2" },
            ]}
          />
          <DatePicker placeholder="Выбрать дату" className="flex-1" />
        </Col>
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-start justify-between">
              <div className="self-stretch leading-[24px] font-medium text-xl">
                Закупки
              </div>
            </div>
            <button
              onClick={() => setCreateModal(true)}
              className="rounded-md bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white"
            >
              <div className="leading-[16px] font-medium">Добавить услугу</div>
            </button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            className="w-full"
            pagination={{
              responsive: true,
              style: {
                marginRight: 10,
                display: "flex",
                alignItems: "center",
              },
              hideOnSinglePage: true,
              showTotal: (total, range) => {
                return (
                  <div className="justify-self-start">
                    <span>
                      <span className={"font-semibold"}>{range[0]}-</span>
                      <span className={"font-semibold"}>
                        {range[1]}
                      </span> из{" "}
                      <span className={"font-semibold"}>{total}</span>{" "}
                      результатов
                    </span>
                  </div>
                );
              },
            }}
          />
          <ConsumableModal show={createModal} setShow={setCreateModal} />
          <ConsumableModal show={observeModal} setShow={setObserveModal} view />
        </Col>
      </Row>
    </Row>
  );
};

export default Procurement;
