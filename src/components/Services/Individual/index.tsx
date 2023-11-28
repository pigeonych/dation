import React, { FC, useMemo } from "react";
import { Row, Col, Switch } from "antd";
import { PencilIcon } from "../../../assets/icons/all";
import { Link } from "react-router-dom";

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

const Individual: FC<{}> = () => {
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
                <PencilIcon className={"w-6 h-6 shrink-0"} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const categoriesList = useMemo(() => {
    return categories.map((category) => {
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
                <Link to={`/services/${category.id}`}>
                  <PencilIcon className={"w-6 h-6 shrink-0"} />
                </Link>
              </div>
            </div>
          </div>
          <Row className="bg-white w-full gap-y-5 wrap">
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
    });
  }, [categories]);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 w-full h-full">
        {categoriesList}
      </Row>
    </Row>
  );
};

export default Individual;
