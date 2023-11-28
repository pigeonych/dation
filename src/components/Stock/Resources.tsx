import React, { FC, useMemo, useState } from "react";
import {
  Row,
  Col,
  Table,
  Space,
  Tag,
  Select,
  Input,
  Modal,
  Upload,
  Button,
  Input as AntdInput,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { PaperClipIcon, PencilIcon } from "../../assets/icons/all";
import TrashIcon from "../../assets/svg/trash.svg";
import { nanoid } from "nanoid";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";

interface DataType {
  key: string;
  name: string;
  quantity: number;
  services: number;
  action?: () => void;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "2",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "3",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "4",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "5",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "6",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "7",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "8",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "9",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "10",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "11",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "12",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "13",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "14",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "15",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "16",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "17",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "18",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "19",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "20",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "21",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "22",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
  {
    key: "23",
    name: "Название ресурса",
    quantity: 32,
    services: 2,
  },
];

const ConsumableModal: FC<{
  show: boolean;
  setShow: (show: boolean) => void;
  view?: boolean;
}> = ({ setShow, show, view }) => {
  const [items, setItems] = useState([`resourceId:${nanoid()}`]);
  const [counter, setCounter] = useState(0);

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
            <div className="w-[100px] flex flex-col gap-y-1 relative">
              <div
                className={`w-full border-[2px] border-gray-100 rounded-md px-2 py-3.5 ${
                  !view
                    ? "hover:border-[#84a5ff]"
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                {!view && (
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
                )}
                <div
                  className={`absolute bottom-[20%] ${
                    counter > 9 ? "right-[44%]" : "right-[47%]"
                  } ${view ? "cursor-default" : ""}`}
                >
                  {counter}
                </div>
                {!view && (
                  <PlusIcon
                    className={
                      "w-5 h-5 absolute bottom-[20%] right-3.5 cursor-pointer"
                    }
                    color={"#9CA3AF"}
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  />
                )}
              </div>
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
    [items, view, counter],
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
            <Input className="w-full" disabled={view} />
          </Col>
          <Col className="flex flex-col flex-1 gap-y-1">
            <label>Количество</label>
            <Input type="number" min={0} className="w-full" disabled={view} />
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
          </Row>
        );
      }}
    />
  );
};

const Resources: FC<{}> = () => {
  const [createModal, setCreateModal] = useState(false);
  const [observeModal, setObserveModal] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Услуги",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: () => {
        return (
          <div className="flex flex-1 gap-x-5 justify-center">
            <img
              className="w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src={TrashIcon}
              onClick={() => {}}
            />
            <div onClick={() => setObserveModal(true)}>
              <PencilIcon className={"w-6 h-6 shrink-0"} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-3 pt-3 px-5 w-full h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
            <div className="flex-1 flex items-start justify-between">
              <div className="self-stretch leading-[24px] font-medium text-xl">
                Ресурсы
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
          <ConsumableModal setShow={setCreateModal} show={createModal} />
          <ConsumableModal setShow={setObserveModal} show={observeModal} view />
        </Col>
      </Row>
    </Row>
  );
};

export default Resources;
