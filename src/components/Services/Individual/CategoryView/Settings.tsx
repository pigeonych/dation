import React, { FC } from "react";
import { Col, Row, Switch, InputNumber, TimePicker } from "antd";

const Settings: FC<{}> = () => {
  return (
    <Row className="flex flex-col gap-y-5 w-full">
      <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
        <Row className="flex flex-col bg-white w-full p-5 gap-y-5 wrap">
          <Col className="w-full flex justify-between">
            <div>Отображать в онлайн бронировании</div>
            <Switch defaultChecked />
          </Col>
          <Col className="w-full flex justify-between">
            <div>Только если первый заказ</div>
            <Switch defaultChecked />
          </Col>
          <Col className="w-full flex justify-between gap-x-5">
            <div className="flex-1 flex flex-col gap-y-1">
              <label>Если сумма более</label>
              <InputNumber min={0} className="w-full" />
            </div>
            <div className="flex-1 flex flex-col gap-y-1">
              <label>Процент предоплаты</label>
              <InputNumber min={0} className="w-full" />
            </div>
          </Col>
          <Col className="w-full flex justify-between items-end gap-x-5">
            <div className="flex-1 flex flex-col gap-y-1">
              <label>Диапозон времени</label>
              <TimePicker placeholder={"Начало"} />
            </div>
            <div className="flex-1 flex flex-col gap-y-1">
              <TimePicker placeholder={"Конец"} />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Settings;
