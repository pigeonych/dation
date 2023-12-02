import React, { FC, useMemo } from "react";
import { Button, Col, Row, Select, Upload } from "antd";
import {
  PaperClipIcon,
  TelegramIcon,
  FacebookIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from "../../assets/icons/all";
import Input from "../Input";

const countryOptions = [
  { value: "uzb", label: "Узбекистан" },
  { value: "rus", label: "Россия" },
  { value: "usa", label: "США" },
];

const Company: React.FC<{}> = () => {
  const [country, setCountry] = React.useState("uzb");
  const renderCountry = useMemo(() => {
    const label = countryOptions.find((item) => item.value === country)?.label;
    return (
      <div
        className={`inline-flex justify-between items-center rounded-2xl p-1 px-5 gap-x-3 bg-green-100`}
        key={country}
      >
        <div className={`text-xs font-medium text-green-800`}>{label}</div>
      </div>
    );
  }, [country]);

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-full flex flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Моя компания</div>
          </div>
        </div>
        <div className="w-[360.8px] flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Сохранить</div>
          </button>
        </div>
      </header>
      <Row className="isolate w-full h-full overflow-auto">
        <Row className="flex flex-col gap-y-5 pt-5 px-5 flex-1 h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Данные о компании
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
                  <label className="text-sm">Название компании</label>
                  <Input
                    placeholder={"Моя компания..."}
                    className={"border-2 border-gray-100"}
                    type="text"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Социальные сети
                </div>
              </div>
            </div>
            <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
              <Col
                className={
                  "w-full px-5 pb-5 h-full flex flex-col items-center gap-y-5 border-b-2 border-gray-100"
                }
              >
                <Row className="flex gap-x-5 items-end w-full">
                  <TelegramIcon
                    className={
                      "bg-brand w-[40px] h-[40px] border-b-2 rounded-md py-2 px-2"
                    }
                  />
                  <Col className={"flex flex-col gap-y-2 flex-1"}>
                    <div className="text-sm">Telegram</div>
                    <Input
                      placeholder={"Выбрать"}
                      className={"border-2 border-gray-100"}
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="flex gap-x-5 items-end w-full">
                  <WhatsAppIcon
                    className={
                      "bg-brand w-[40px] h-[40px] border-b-2 rounded-md py-2 px-2"
                    }
                  />
                  <Col className={"flex flex-col gap-y-2 flex-1"}>
                    <div className="text-sm">WhatsApp</div>
                    <Input
                      placeholder={"Выбрать"}
                      className={"border-2 border-gray-100"}
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="flex gap-x-5 items-end w-full">
                  <FacebookIcon
                    className={
                      "bg-brand w-[40px] h-[40px] border-b-2 rounded-md py-2 px-2"
                    }
                  />
                  <Col className={"flex flex-col gap-y-2 flex-1"}>
                    <div className="text-sm">Facebook</div>
                    <Input
                      placeholder={"Выбрать"}
                      className={"border-2 border-gray-100"}
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="flex gap-x-5 items-end w-full">
                  <WebsiteIcon
                    className={
                      "bg-brand w-[40px] h-[40px] border-b-2 rounded-md py-2 px-2"
                    }
                  />
                  <Col className={"flex flex-col gap-y-2 flex-1"}>
                    <div className="text-sm">Website</div>
                    <Input
                      placeholder={"Выбрать"}
                      className={"border-2 border-gray-100"}
                      type="text"
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="w-full flex px-5 justify-end">
                <button className="rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-white">
                  <div className="leading-[20px] font-medium">Сохранить</div>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="flex flex-col gap-y-5 pt-5 pr-5 flex-1 h-full">
          <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
            <div className="w-full bg-tailwindui-white flex flex-row items-center justify-center p-4 border-b-[1px] border-solid border-gray-200">
              <div className="flex-1 flex items-start gap-x-5">
                <div className="self-stretch leading-[24px] font-medium text-xl">
                  Хранение данных
                </div>
                {renderCountry}
              </div>
            </div>
            <Row className="flex flex-col bg-white w-full py-5 gap-y-5 wrap">
              <Col className={"w-full px-5 flex flex-col gap-y-2"}>
                <label className={"text-sm"}>Место хранения</label>
                <Select
                  options={countryOptions}
                  placeholder={"Выбрать"}
                  value={country}
                  className="w-full"
                  onChange={(value, option) => {
                    setCountry(value);
                  }}
                />
              </Col>
              <Col
                className={
                  "w-full px-5 pb-5 flex flex-col gap-y-2 border-b-2 border-gray-100"
                }
              >
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
              <Col className="w-full flex px-5 justify-between">
                <div className={"text-red-600 w-[70%]"}>
                  Нажимая “Сохранить” ваша компания временно будет
                  приостановлена, так как данные будут переноситься и т.д.
                </div>
                <button className="rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-white h-full">
                  <div className="leading-[20px] font-medium">Сохранить</div>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Company;
