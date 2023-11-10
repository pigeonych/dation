import React, { FC, useMemo, useState } from "react";
import { Row, Col, DatePicker, Modal, Select, Switch } from "antd";
import Input from "../Input";
import { TimePicker } from "antd/lib";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import TrashIcon from "../../assets/svg/trash.svg";
import Notification from "../../utils/notification";
import { StatusType } from "../../interfaces";
import { Statuses } from "../../constants";

type EditType = "record" | "client" | "history";
type Serivce = {
  name: string;
  price: number;
};

const TranslatedEditType: Record<string, string> = {
  client: "Клиент",
  record: "Запись",
  history: "История посещений",
};

const staticServices: Serivce[] = [
  {
    name: "Стрижка",
    price: 200000,
  },
  {
    name: "Стрижка1",
    price: 200000,
  },
  {
    name: "Стрижка2",
    price: 200000,
  },
  {
    name: "Стрижка3",
    price: 200000,
  },
];

const EditPage: FC<{}> = () => {
  const [type, setType] = React.useState<EditType>("record");
  const [services, setServices] = useState<Serivce[]>(staticServices);
  const [showDeletionModal, setShowDeletionModal] = useState(false);
  const [serviceBeingDeleted, setServiceBeingDeleted] = useState<Serivce>();
  const [status, setStatus] = useState<StatusType>("process");

  const servicesList = useMemo(() => {
    return (
      <div className="rounded-md bg-tailwindui-white w-full overflow-hidden flex flex-col items-start justify-start">
        {services.map((service) => {
          return (
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-4 px-6 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 relative leading-[20px]">
                {service.name}
              </div>
              <div className="flex-1 relative leading-[20px]">
                {service.price} сум
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={TrashIcon}
                onClick={() => {
                  setServiceBeingDeleted(service);
                  setShowDeletionModal(true);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }, [services]);

  const renderStatus = useMemo(() => {
    let circleColor = "bg-yellow-400";
    let bgColor = "bg-yellow-100";
    if (status === "done") {
      circleColor = "bg-blue-400";
      bgColor = "bg-blue-100";
    } else if (status === "canceled") {
      circleColor = "bg-red-400";
      bgColor = "bg-red-100";
    }

    return (
      <div
        className={`inline-flex justify-between items-center rounded-2xl p-1 px-3 gap-x-3 ${bgColor}`}
      >
        <div className={"text-xs font-medium"}>{Statuses[status]}</div>
        <div className={`w-2 h-2 rounded-full ${circleColor}`} />
      </div>
    );
  }, [status]);

  const renderTypes = useMemo(
    () =>
      ["record", "client", "history"].map((item: string) => {
        const isSelected = item === type;
        return (
          <Col
            className={`flex flex-col items-center justify-center ${
              isSelected ? "text-indigo-500" : "text-black"
            }`}
            onClick={() => {
              setType(item as EditType);
            }}
            key={item}
          >
            <div className="flex flex-row items-center justify-center pt-0 px-1 pb-4 gap-[8px]">
              <div className="leading-[20px] font-medium">
                {TranslatedEditType[item]}
              </div>
            </div>
            {isSelected && <div className="self-stretch bg-indigo-500 h-0.5" />}
          </Col>
        );
      }),
    [type],
  );

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium">
      <Modal
        open={showDeletionModal}
        children={
          <header className={"text-base font-bold p-[24px] pb-0"}>
            Вы действительно хотите удалить запись?
          </header>
        }
        closeIcon={null}
        centered
        maskClosable={true}
        onCancel={() => {
          setShowDeletionModal(false);
        }}
        footer={() => {
          return (
            <Row className="p-[20px]" justify={"space-between"}>
              <Col className="w-[45%]">
                <button
                  className="w-full rounded-md overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] border-2 border-gray-300"
                  onClick={() => {
                    setShowDeletionModal(false);
                  }}
                >
                  <div className="leading-[20px] font-medium">Отмена</div>
                </button>
              </Col>
              <Col className="w-[45%]">
                <button
                  className="w-full text-white rounded-md bg-red-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px]"
                  onClick={() => {
                    setShowDeletionModal(false);
                    if (serviceBeingDeleted)
                      setServices((prevServices) =>
                        prevServices.filter((item, index) => {
                          return (
                            index !== services.indexOf(serviceBeingDeleted)
                          );
                        }),
                      );
                    Notification(
                      "topRight",
                      "success",
                      "Услуга успешно удалена",
                      `${serviceBeingDeleted?.name} был удален из списка услуг`,
                      3,
                    );
                    setServiceBeingDeleted(undefined);
                  }}
                >
                  <div className="leading-[20px] font-medium">Удалить</div>
                </button>
              </Col>
            </Row>
          );
        }}
      />

      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-[585.5px] flex flex-row items-center justify-start gap-[16px]">
          <Link to={"/staff"}>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">
              Редактировать запись
            </div>
          </div>
        </div>
        <div className="w-[360.8px] flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="text-red-800 rounded-md bg-red-100 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px]">
            <div className="leading-[20px] font-medium">Удалить запись</div>
          </button>
          <button className="text-white rounded-md bg-indigo-600 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Создать</div>
          </button>
        </div>
      </header>
      <Row className="w-full px-5 pt-3 gap-x-5 bg-gray-100 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      <Row className="isolate w-full h-full overflow-auto bg-gray-100">
        <Row className="flex flex-col gap-y-5 pt-5 px-5 w-[60%] h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Запись
                </div>
              </div>
            </div>
            <Row className="bg-white w-full px-5 py-5 gap-y-5 wrap">
              <Col className="w-full flex justify-around gap-x-5">
                <div className="flex flex-col w-1/2 gap-y-1">
                  <label className="text-sm">Имя </label>
                  <Input
                    placeholder={"Ваше имя..."}
                    className={"border-2 border-gray-100"}
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-1/2 gap-y-1">
                  <label className="text-sm">Телефон</label>
                  <Input
                    placeholder={"+998"}
                    className={"border-2 border-gray-100"}
                    type={"tel"}
                  />
                </div>
              </Col>
              <Col className={"h-full w-full"}>
                <div className="flex flex-col w-full h-full gap-y-1">
                  <label className="text-sm">Комментарий от клиента</label>
                  <Input
                    placeholder={"Ваши рекомендации..."}
                    className={"border-2 border-gray-100 h-auto pb-7"}
                    textarea
                    type="text"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="leading-[24px] font-medium text-xl">Визит</div>
              </div>
            </div>
            <Row className="bg-white w-full px-5 py-5 gap-y-5 wrap">
              <Col className={"w-full"}>
                <div className="flex flex-col w-full gap-y-1">
                  <label className="text-sm">Исполнитель</label>
                  <Input
                    placeholder={"Ваши рекомендации..."}
                    className={"border-2 border-gray-100"}
                    defaultValue={"Тимур"}
                    showClear
                    type="text"
                  />
                </div>
              </Col>
              <Col className="w-full flex justify-around gap-x-5">
                <div className="flex flex-col w-1/2 gap-y-1">
                  <label className="text-sm">Дата</label>
                  <DatePicker
                    placeholder={"Укажите дату"}
                    className={"border-2 border-gray-300"}
                    onChange={(e) => {
                      console.log("visit date: ", e);
                    }}
                  />
                </div>
                <div className="flex flex-col w-1/2 gap-y-1">
                  <label className="text-sm">Время</label>
                  <TimePicker
                    onChange={(e) => {
                      console.log("visit time: ", e);
                    }}
                    className={"border-2 border-gray-300"}
                    placeholder={"Начало"}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center py-3 px-4 gap-[10px] text-lg text-black border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="leading-[24px] font-medium text-xl">Услуги</div>
              </div>
              <button className="rounded-md bg-brand shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[9px] px-[13px] text-sm text-tailwindui-white font-text-sm-regular">
                <div className="leading-[16px] font-medium text-white">
                  Добавить услугу
                </div>
              </button>
            </div>
            <div className="w-full bg-gray-50 overflow-hidden flex flex-row items-center justify-between py-2.5 px-[21px] text-xs text-gray-500 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 relative leading-[16px]">УСЛУГА</div>
              <div className="flex-1 relative leading-[16px]">ЦЕНА</div>
              <div className="relative leading-[16px] text-center flex items-center justify-center w-6 shrink-0 opacity-[0]">
                X
              </div>
            </div>
            {servicesList}
          </Col>
        </Row>
        <Row className="flex flex-col gap-y-5 pt-5 pr-5 w-[40%] h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div>
                  <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                    Статус
                  </div>
                  {renderStatus}
                </div>
              </div>
            </div>
            <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
              <Col className="w-full flex flex-col gap-y-2">
                <label className={"block"}>Выбрать статус</label>
                <Select
                  options={[
                    { value: "process", label: "В процессе" },
                    { value: "done", label: "Завершено" },
                    { value: "canceled", label: "Отменено" },
                  ]}
                  placeholder={"В процессе"}
                  className="w-full"
                  onChange={(value, option) => {
                    setStatus(value as StatusType);
                  }}
                />
              </Col>
              <Col className="w-full flex flex-col gap-y-2">
                <label className={"block"}>Тип оплаты</label>
                <Select
                  options={[
                    { value: "cash", label: "Наличными" },
                    { value: "card", label: "Картой" },
                  ]}
                  placeholder={"Наличными"}
                  className="w-full"
                />
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div>
                  <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                    Оплата
                  </div>
                </div>
              </div>
            </div>
            <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
              <Col className="w-full flex flex-col gap-y-2">
                <label className={"block"}>Статус оплаты</label>
                <Select
                  options={[
                    { value: "pre-payment", label: "Предоплата" },
                    { value: "post-payment", label: "Постоплата" },
                  ]}
                  placeholder={"Предоплата"}
                  className="w-full"
                  onChange={(value, option) => {}}
                />
              </Col>
              <Col className="w-full flex flex-col gap-y-2">
                <label className={"block"}>Объем предоплаты</label>
                <Input
                  placeholder={"0 сум"}
                  type={"text"}
                  className={"border-2 border-gray-100"}
                />
              </Col>
              <Col className="w-full flex flex-col gap-y-2">
                <label className={"block"}>Скидка</label>
                <Input
                  placeholder={"0%"}
                  type={"text"}
                  className={"border-2 border-gray-100"}
                />
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div>
                  <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                    Уведомления
                  </div>
                </div>
              </div>
            </div>
            <Row className="flex flex-col w-full gap-y-5 px-[24px] py-[20px]">
              <Col className="w-full flex gap-x-2">
                <Switch defaultChecked />
                <label className="text-sm font-normal">
                  Уведомления в телеграм бот
                </label>
              </Col>
              <Col className="w-full flex gap-x-2">
                <Switch defaultChecked />
                <label className="text-sm font-normal">СМС оповещение</label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditPage;
