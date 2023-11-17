import React, { FC } from "react";
import { Row, Col, Dropdown, Select, DatePicker, Switch } from "antd";
import Collection from "../../assets/svg/collection.svg";
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";

const VisitHistory: FC<{}> = () => {
  const [showContent, setShowContent] = React.useState<boolean>(true);

  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-5 pt-5 px-5 w-[50%] h-full">
        <Col className="rounded-xl w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-2 border-dashed border-gray-200">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="w-[75%] flex justify-between">
                <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                  Запись
                </div>
                <div className="inline-block text-xl leading-[24px] font-medium mr-3">
                  19.09.2023
                </div>
              </div>
            </div>
          </div>
          <Row className="flex flex-col w-full gap-y-5 py-[20px]">
            <div className="w-full border-b-2 border-solid border-gray-200 px-[24px] pb-[20px]">
              <Row className="w-[74%] flex flex-col gap-y-2">
                <Col>
                  <Row className="w-full flex justify-between">
                    <div className="text-gray-500">Статус</div>
                    <div className="text-end text-green-600">Успешно</div>
                  </Row>
                </Col>
                <Col>
                  <Row className="w-full flex justify-between">
                    <div className="text-gray-500">Мастер</div>
                    <div className="text-end">Альберт</div>
                  </Row>
                </Col>
                <Col>
                  <Row className="w-full flex justify-between">
                    <div className="text-gray-500">Время</div>
                    <div className="text-end">15:30</div>
                  </Row>
                </Col>
                <Col>
                  <Row className="w-full flex justify-between">
                    <div className="text-gray-500">Причина</div>
                    <div className="text-end">Все понравилось</div>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="w-full py-[16px] px-[24px] flex justify-between items-center gap-x-4">
              <div className="flex flex-col w-[36px] h-[36px]">
                <div className="flex justify-center items-center w-full h-full rounded-full bg-gray-100">
                  <img
                    src={Collection}
                    alt="collection"
                    className="h-1/2 w-1/2"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[80%]">
                <div className="w-full text-gray-500">Услуги</div>
                <div className="w-full">480 000 сум</div>
              </div>
              <div className="flex flex-col w-[10%]">
                <div className="flex bg-inherit justify-center items-center">
                  <ChevronDownIcon
                    className={`w-[30px] h-[30px] transition-transform ${
                      showContent ? "rotate-180 text-brand" : ""
                    }`}
                    onClick={() => {
                      setShowContent(!showContent);
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className={`w-full px-[24px] py-[16px] flex flex-col gap-y-5 ${
                showContent ? "" : "hidden"
              }`}
            >
              <div className="w-full flex flex-col">
                <div className="w-full text-lg font-semibold leading-6">
                  150 000 сум
                </div>
                <div className="w-full text-gray-500">Укладка</div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full text-lg font-semibold leading-6">
                  250 000 сум
                </div>
                <div className="w-full text-gray-500">
                  Стрижка удлинённый дизайн
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full text-lg font-semibold leading-6">
                  130 000 сум
                </div>
                <div className="w-full text-gray-500">
                  Мужская стрижка под машинку
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default VisitHistory;
