import { FC, useMemo, useState } from "react";
import { Row, Col } from "antd";
import Individual from "./Individual/index";
import Holdings from "./Holdings/index";

type EditType = "individual" | "holdings";

const TranslatedEditType: Record<string, string> = {
  individual: "Индивидуальные",
  holdings: "Пакеты",
};

const Services: FC<{}> = () => {
  const [type, setType] = useState<EditType>("individual");

  const renderTypes = useMemo(
    () =>
      ["individual", "holdings"].map((item: string) => {
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
          <div className="flex flex-row items-center justify-start">
            <div className="text-xl font-bold leading-9">Сервисы</div>
          </div>
        </div>
        <div className="w-[360.8px] flex flex-row items-center justify-end gap-[24px] text-sm">
          <button className="text-white rounded-md bg-brand hover:bg-indigo-500 overflow-hidden flex flex-row items-center justify-center py-[9px] px-[17px] text-tailwindui-white">
            <div className="leading-[20px] font-medium">Добавить категорию</div>
          </button>
        </div>
      </header>
      <Row className="w-full px-5 pt-3 gap-x-5 border-b-2 border-b-gray-200">
        {renderTypes}
      </Row>
      {type === "individual" && <Individual />}
      {type === "holdings" && <Holdings />}
    </div>
  );
};

export default Services;
