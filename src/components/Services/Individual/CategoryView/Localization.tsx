import React, { FC } from "react";
import { Col, Row } from "antd";
import Input from "../../../Input";

const Localization: FC<{}> = () => {
  return (
    <Row className="flex flex-col gap-y-5 w-full">
      <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
        <Row className="flex bg-white w-full p-5 gap-x-3 wrap">
          <Col className="flex-1 flex flex-col gap-y-1">
            <label>Название на русском</label>
            <Input
              placeholder={"Название"}
              type="text"
              showClear
              className={"border-2 border-gray-100"}
            />
          </Col>
          <Col className="flex-1 flex flex-col gap-y-1">
            <label>Название на английском</label>
            <Input
              placeholder={"Name"}
              type="text"
              showClear
              className={"border-2 border-gray-100"}
            />
          </Col>
          <Col className="flex-1 flex flex-col gap-y-1">
            <label>Название на узбекском</label>
            <Input
              placeholder={"Nomi"}
              type="text"
              showClear
              className={"border-2 border-gray-100"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Localization;
