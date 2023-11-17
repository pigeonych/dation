import { FC, useMemo, useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Client from "./Client";
import Record from "./Record";
import VisitHistory from "./VisitHistory";

type EditType = "record" | "client" | "history";

const TranslatedEditType: Record<string, string> = {
  client: "Клиент",
  record: "Запись",
  history: "История посещений",
};

const EditPage: FC<{
  edit?: boolean;
  create?: boolean;
}> = ({ edit, create }) => {
  const [type, setType] = useState<EditType>("record");

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
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-[585.5px] flex flex-row items-center justify-start gap-[16px]">
          <Link to={"/staff"}>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">
              {edit ? "Редактировать" : "Создать"} запись
            </div>
          </div>
        </div>
        <div className="w-[360.8px] flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="text-red-800 rounded-md bg-red-100 hover:bg-red-200 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px]">
            <div className="leading-[20px] font-medium">Удалить запись</div>
          </button>
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Создать</div>
          </button>
        </div>
      </header>
      <Row className="w-full px-5 pt-3 gap-x-5 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      {type === "record" && <Record />}
      {type === "client" && <Client />}
      {type === "history" && <VisitHistory />}
    </div>
  );
};

export default EditPage;
