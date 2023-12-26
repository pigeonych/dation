import React, { FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Row, Col, Select } from "antd";
import BrandIcon from "../../assets/svg/icon.svg";
import GlobeIcon from "../../assets/svg/globe.svg";
import PhoneIcon from "@heroicons/react/20/solid/PhoneIcon";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { CollectionIcon } from "../../assets/icons/sidebar";

const Login: FC<{}> = () => {
  const location = useLocation();

  const isPhone = useMemo(
    () => location.pathname.includes("phone-number"),
    [location],
  );

  return (
    <Row className="min-h-screen w-full">
      <Col
        className={"hidden xl:flex flex-1 justify-center items-center bg-brand"}
      >
        <img src={BrandIcon} alt={"brand-icon"} />
      </Col>
      <Col className={"flex flex-1 justify-center items-center"}>
        <Row className={"flex flex-col w-full h-full p-[24px]"}>
          <Col className={"w-full flex justify-end"}>
            <div className={"flex items-center gap-2"}>
              <Select
                className={"border-none w-32"}
                placeholder={"Русский"}
                options={[
                  { value: "rus", label: "Русский" },
                  { value: "eng", label: "Английский" },
                  { value: "uzb", label: "Узбекский" },
                ]}
                suffixIcon={<img src={GlobeIcon} alt={"globe-icon"} />}
              />
            </div>
          </Col>
          <Col
            className={
              "w-full flex justify-center items-center gap-x-10 mt-16 -mb-16"
            }
          >
            <div className={"flex items-center gap-x-5"}>
              <PhoneIcon
                width={40}
                height={40}
                color={isPhone ? "white" : "#9CA3AF"}
                className={`${
                  isPhone ? "bg-brand" : "bg-gray-200"
                } p-2 rounded-lg`}
              />
              <div className={"flex flex-col"}>
                <span
                  className={`${
                    isPhone ? "text-brand" : ""
                  } font-semibold text-sm`}
                >
                  Шаг 1
                </span>
                <span className={"text-gray-500 text-xs"}>Номер телефона</span>
              </div>
            </div>
            <ChevronRightIcon width={40} height={40} color={"#9CA3AF"} />
            <div className={"flex items-center gap-x-5"}>
              <CollectionIcon
                color={!isPhone ? "white" : "#9CA3AF"}
                className={`${
                  !isPhone ? "bg-brand" : "bg-gray-200"
                } p-2 rounded-lg w-10 h-10`}
              />
              <div className={"flex flex-col"}>
                <span
                  className={`${
                    !isPhone ? "text-brand" : ""
                  } font-semibold text-sm`}
                >
                  Шаг 2
                </span>
                <span className={"text-gray-500 text-xs"}>
                  Выбрать компанию
                </span>
              </div>
            </div>
          </Col>
          <Outlet />
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
