import React, { FC, useMemo, useState } from "react";
import { Col, Row } from "antd";
import Resources from "./Resources";
import Consumables from "./Consumables";
import Procurement from "./Procurement";
import Market from "./Market";

type EditType = "resources" | "consumables" | "market" | "procurement";

const TranslatedEditType: Record<string, string> = {
  resources: "Ресурсы",
  consumables: "Расходники",
  market: "Магазин",
  procurement: "Закупки",
};
const Stock: FC<{}> = () => {
  const [type, setType] = useState<EditType>("resources");

  const renderTypes = useMemo(
    () =>
      ["resources", "consumables", "market", "procurement"].map(
        (item: string) => {
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
              {isSelected && (
                <div className="self-stretch bg-indigo-500 h-0.5" />
              )}
            </Col>
          );
        },
      ),
    [type],
  );

  return (
    <div className="flex h-full flex-col text-left text-black font-text-lg-leading-6-font-medium pb-6">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
        <div className="w-[585.5px] flex flex-row items-center justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Склад</div>
          </div>
        </div>
      </header>
      <Row className="flex items-center w-full px-5 pt-3 gap-x-10 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      {type === "resources" && <Resources />}
      {type === "consumables" && <Consumables />}
      {type === "market" && <Market />}
      {type === "procurement" && <Procurement />}
    </div>
  );
};

export default Stock;
