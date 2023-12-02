import React, { FC, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Col, Row, Table, Popover, Button, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { DeleteModal, PasswordModal } from "./index";

interface DataType {
  key: string;
  name: string;
  status: string;
  role: string;
  tel: string;
  action?: () => void;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "2",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "3",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "4",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "5",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "6",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "7",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "8",
    name: "Иван Иванов",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
];

const General: FC<{}> = () => {
  const [reset, setReset] = useState(false);
  const [del, setDel] = useState(false);
  const columns: ColumnsType<DataType> = [
    {
      title: "ИМЯ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "СТАТУС",
      dataIndex: "status",
      key: "status",
      render: (val) => {
        return (
          <div
            className={`inline-flex justify-between items-center rounded-2xl p-1 px-5 gap-x-3 bg-green-100`}
            key={val}
          >
            <div className={`text-xs font-medium text-green-800`}>{val}</div>
          </div>
        );
      },
    },
    {
      title: "РОЛЬ",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "ТЕЛЕФОН",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "",
      key: "action",
      dataIndex: "action",
      render: (val, rec) => {
        return (
          <div className="flex flex-1 gap-x-5 justify-center">
            <Popover
              style={{ padding: 0 }}
              content={
                <div className="flex flex-col w-full">
                  <Button
                    icon={<ArrowPathIcon className={"w-4 h-4"} />}
                    type={"default"}
                    className="flex w-full text-left border-none items-center shadow-none"
                    onClick={() => setReset(true)}
                  >
                    Сбросить пароль
                  </Button>
                  <Button
                    icon={<TrashIcon className={"w-4 h-4 text-red-300"} />}
                    type={"default"}
                    className="flex w-full text-left border-none items-center shadow-none"
                    onClick={() => setDel(true)}
                  >
                    Удалить
                  </Button>
                </div>
              }
            >
              <EllipsisVerticalIcon className={"w-6 h-6 shrink-0"} />
            </Popover>
            <Link to={`${rec.key}/view`}>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-3 pt-3 px-5 w-full h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
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
        </Col>
      </Row>
      <PasswordModal show={reset} setShow={setReset} />
      <DeleteModal show={del} setShow={setDel} />
    </Row>
  );
};

export default General;
