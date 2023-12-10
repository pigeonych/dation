import React, { FC, useMemo, useState } from "react";
import { Col, Modal, Row, Select, Switch } from "antd";
import { PencilIcon } from "../../../assets/icons/all";
import { Link } from "react-router-dom";
import TrashIcon from "../../../assets/svg/trash.svg";
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { nanoid } from "nanoid";
import { PlusIcon } from "@heroicons/react/20/solid";
import Notification from "../../../utils/notification";

type Service = {
  name: string;
  price: number;
  duration: number;
  materials: string;
  id: string;
};

const services1: Service[] = [
  { name: "Услуга 1", price: 10000, duration: 1, materials: "Свои", id: "s1" },
  { name: "Услуга 1", price: 10000, duration: 1, materials: "Свои", id: "s2" },
  { name: "Услуга 1", price: 10000, duration: 1, materials: "Свои", id: "s3" },
  { name: "Услуга 1", price: 10000, duration: 1, materials: "Свои", id: "s4" },
];

const services2: Service[] = [
  { name: "Услуга 2", price: 20000, duration: 5, materials: "Свои", id: "s5" },
  { name: "Услуга 2", price: 20000, duration: 5, materials: "Свои", id: "s6" },
  { name: "Услуга 2", price: 20000, duration: 5, materials: "Свои", id: "s7" },
  { name: "Услуга 2", price: 20000, duration: 5, materials: "Свои", id: "s8" },
];

type Category = {
  name: string;
  services: Service[];
  key: string;
  id: string;
};

const categories: Category[] = [
  { name: "Категория 1", services: services1, key: "c1", id: "c1" },
  { name: "Категория 2", services: services2, key: "c2", id: "c2" },
];

const AddService: FC<{
  show: boolean;
  setShow: (show: boolean) => void;
  categoryId?: string;
}> = ({ show, setShow, categoryId }) => {
  const [services, setServices] = useState([
    {
      name: "Услуга 1",
      value: "service1",
    },
    {
      name: "Услуга 2",
      value: "service2",
    },
    {
      name: "Услуга 3",
      value: "service3",
    },
    {
      name: "Услуга 4",
      value: "service4",
    },
  ]);

  const renderSerivces = useMemo(() => {
    return (
      <Row className="flex flex-col w-full" wrap>
        {services.map((s, index, arr) => {
          const rounded =
            index === 0
              ? "rounded-t-lg"
              : index === arr.length - 1
              ? "rounded-b-lg"
              : "";
          return (
            <Col
              key={s.value}
              className={`w-full ${rounded} border-t-2 border-l-2 border-r-2 ${
                index === arr.length - 1 ? "border-b-2" : ""
              } border-gray-100 py-2 px-4 hover:bg-gray-100`}
            >
              {s.name}
            </Col>
          );
        })}
      </Row>
    );
  }, [categoryId]);
  return (
    <Modal
      open={show}
      title={<div>Добавление категории</div>}
      children={
        <Row className={"w-full flex flex-col gap-y-4"}>
          <Col className={"w-full flex flex-col gap-y-1"}>
            <label>Название категории</label>
            <Select
              placeholder={"Выберите"}
              className={"w-full"}
              options={[
                { label: "Категория 1", value: "category1" },
                { label: "Категория 2", value: "category2" },
                { label: "Категория 3", value: "category3" },
              ]}
            />
          </Col>
          <Col className={"w-full max-h-80 overflow-auto"}>
            {renderSerivces}
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
                  Notification(
                    "bottomRight",
                    "success",
                    "Создание категории!",
                    "Категория была успешно создана.",
                    3,
                  );
                }}
              >
                <div className="leading-[20px] font-medium">Создать</div>
              </button>
            </Col>
          </Row>
        );
      }}
    />
  );
};

const Services: FC<{}> = () => {
  const [add, setAdd] = useState(false);
  const servicesList = (category: Category) => {
    return (
      <div className="rounded-md bg-tailwindui-white w-full overflow-hidden flex flex-col items-start justify-start">
        {category.services.map((service) => {
          return (
            <div
              className="self-stretch overflow-hidden flex flex-row items-center justify-between py-4 px-6 border-b-[1px] border-solid border-gray-200"
              key={service.name}
            >
              <div className="flex-1 relative leading-[20px]">
                {service.name}
              </div>
              <div className="flex-1 relative leading-[20px]">
                {service.price} сум
              </div>
              <div className="flex-1 relative leading-[20px]">
                {service.duration} ч.
              </div>
              <div className="flex-1 relative leading-[20px]">
                {service.materials}
              </div>
              <div className="flex flex-1 gap-x-5 justify-end">
                <Switch defaultChecked={true} className="bg-gray-400" />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
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
  };

  const Category: FC<{ category: Category }> = ({ category }) => {
    const [drop, setDrop] = useState(true);
    return (
      <Col
        className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start"
        key={category.key}
      >
        <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
          <div className="flex-1 flex items-start justify-between">
            <div className="self-stretch leading-[24px] font-medium text-xl">
              {category.name}
            </div>
            <div className={"flex gap-x-5 items-center"}>
              <button className="rounded-md bg-[#3B65F326] hover:bg-brand flex items-center justify-center py-[9px] px-[13px] text-sm text-brand hover:text-white">
                <div className="leading-[16px] font-medium">
                  Добавить услугу
                </div>
              </button>
              <ChevronDownIcon
                className={`w-7 h-7 shrink-0 text-gray-500 ${
                  drop ? "" : "rotate-180"
                }`}
                onClick={() => setDrop(!drop)}
              />
            </div>
          </div>
        </div>
        <Row className={`${drop ? "" : "hidden"} bg-white w-full gap-y-5 wrap`}>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-gray-50 px-5 overflow-hidden flex items-center justify-between py-2.5 text-xs text-gray-500 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 leading-[16px]">НАЗВАНИЕ УСЛГУИ</div>
              <div className="flex-1 leading-[16px]">СТОИМОСТЬ</div>
              <div className="flex-1 leading-[16px]">ДЛИТЕЛЬНОСТЬ</div>
              <div className="flex-1 leading-[16px]">МАТЕРИАЛЫ</div>
              <div className="flex-1" />
            </div>
            {servicesList(category)}
          </Col>
        </Row>
      </Col>
    );
  };

  const categoriesList = useMemo(() => {
    return categories.map((category) => {
      return <Category category={category} />;
    });
  }, [categories]);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 w-full h-full">
        <button
          onClick={() => {
            setAdd(true);
          }}
          className="rounded-md w-full bg-transparent border-dashed border-2 border-brand hover:bg-blue-100 hover:border-solid flex items-center justify-center py-6 text-sm text-brand gap-x-2"
        >
          <PlusIcon className={"w-6 h-6"} />
          <div className="leading-[16px] font-medium">Добавить расходник</div>
        </button>
      </Row>
      <Row className="flex flex-col gap-y-5 pt-5 px-5 w-full h-full">
        {categoriesList}
      </Row>
      <AddService show={add} setShow={setAdd} />
    </Row>
  );
};

export default Services;
