import React, { FC } from "react";
import { Row, Col } from "antd";
import wallet from "../../../assets/images/wallet.png";
import { CheckIcon } from "../../../assets/icons/all";
import { BanknotesIcon, HeartIcon, UsersIcon } from "@heroicons/react/20/solid";
const Stats: FC<{}> = () => {
  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex gap-10 pt-5 px-5 h-full w-full" wrap>
        <Col className="rounded-lg overflow-hidden flex w-full flex-col items-start bg-white justify-start pl-4">
          <Row className={"w-full justify-between items-center"}>
            <Col className={"flex flex-col gap-y-3 pl-3 sm:py-5"}>
              <div className={"flex gap-x-2 items-center"}>
                <CheckIcon color={"#3B65F3"} />
                <div className={"text-brand"}>Заработано за всё время</div>
              </div>
              <div className={"font-bold text-3xl -mt-2 mb-2"}>256 000 сум</div>
              <div className={"flex gap-x-3 items-center"}>
                <div
                  className={"flex flex-col pr-10 border-r-2 border-gray-300"}
                >
                  <div className={"flex items-center gap-x-1 text-gray-500"}>
                    <BanknotesIcon className={"h-3.5 h-3.5 mt-0.5"} />
                    <div>Выручка</div>
                  </div>
                  <div className={"text-lg font-semibold"}>155 000 сум</div>
                </div>
                <div
                  className={"flex flex-col px-10 border-r-2 border-gray-300"}
                >
                  <div className={"flex items-center gap-x-1 text-gray-500"}>
                    <HeartIcon className={"h-3.5 h-3.5 mt-0.5"} />
                    <div>Чаевых</div>
                  </div>
                  <div className={"text-lg font-semibold"}>35 000 сум</div>
                </div>
                <div className={"flex flex-col pl-10"}>
                  <div className={"flex items-center gap-x-1 text-gray-500"}>
                    <UsersIcon className={"h-3.5 h-3.5 mt-0.5"} />
                    <div>Оказано услуг</div>
                  </div>
                  <div className={"text-lg font-semibold"}>357</div>
                </div>
              </div>
            </Col>
            <Col className={"hidden sm:block md:hidden lg:hidden xl:block"}>
              <img src={wallet} alt={"wallet"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Stats;
