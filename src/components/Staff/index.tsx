import React, { FC, useMemo, useState } from "react";
import { Button, Col, Input, Modal, Row, Upload } from "antd";
import General from "./General";
import Performers from "./Performers";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { PaperClipIcon } from "../../assets/icons/all";
import Notification from "../../utils/notification";

type EditType = "general" | "performers";

const TranslatedEditType: Record<string, string> = {
  general: "Общий список",
  performers: "Исполнители",
};

export const PasswordModal: FC<{
  show: boolean;
  setShow: (show: boolean) => void;
}> = ({ show, setShow }) => {
  return (
    <Modal
      open={show}
      title={<div className={"text-2xl"}>Сбросить пароль?</div>}
      children={
        <div className={"py-4 text-base"}>
          Инструкция будет выслана на почту мастера
        </div>
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
                    "Подтверждение сброса пароля",
                    "Инструкция была выслана на почту мастера.",
                    3,
                  );
                }}
              >
                <div className="leading-[20px] font-medium">Сбросить</div>
              </button>
            </Col>
          </Row>
        );
      }}
    />
  );
};

export const DeleteModal: FC<{
  show: boolean;
  setShow: (show: boolean) => void;
}> = ({ show, setShow }) => {
  return (
    <Modal
      open={show}
      title={
        <div className={"text-2xl pb-4"}>
          Вы действительно хотите удалить этого мастера?
        </div>
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
                className="w-full text-red-800 rounded-md border-2 border-red-100 bg-red-100 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] hover:bg-red-500 hover:border-red-500 hover:text-white"
                onClick={() => {
                  setShow(false);
                  Notification(
                    "bottomRight",
                    "success",
                    "Подтверждение удаления мастера",
                    "Мастер был успешно удалён.",
                    3,
                  );
                }}
              >
                <div className="leading-[20px] font-medium">Удалить</div>
              </button>
            </Col>
          </Row>
        );
      }}
    />
  );
};

const Staff: FC<{}> = () => {
  const [type, setType] = useState<EditType>("general");

  const renderTypes = useMemo(
    () =>
      ["general", "performers"].map((item: string) => {
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
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-full flex flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Персонал</div>
          </div>
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Создать</div>
          </button>
        </div>
      </header>
      <Row className="flex items-center w-full px-5 pt-3 gap-x-10 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      {type === "general" && <General />}
      {type === "performers" && <Performers />}
    </div>
  );
};

export default Staff;
