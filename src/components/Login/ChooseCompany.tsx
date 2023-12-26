import React, { FC, useMemo, useState } from "react";
import { Checkbox, Col, Input, Modal, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import companyImage from "../../assets/images/company.png";
import Notification from "../../utils/notification";
import { useAuth } from "../../hooks/useAuth";
import Countdown from "react-countdown";

type Company = {
  name: string;
  role: string;
  id: string;
};

const companies: Company[] = [
  {
    name: "Название компании",
    role: "owner",
    id: "c1",
  },
  {
    name: "Название компании",
    role: "owner",
    id: "c2",
  },
  {
    name: "Название компании",
    role: "owner",
    id: "c3",
  },
];

type State = "default" | "tel" | "sms" | "recover";

const PasswordModal: FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState<State>("default");
  const countdown = 120 * 1000;

  const from = location.state?.from?.pathname || "/";

  const renderContent = useMemo(() => {
    switch (state) {
      case "default": {
        return (
          <Row className={"w-full flex flex-col"}>
            <Col className={"w-full font-semibold text-lg"}>Введите пароль</Col>
            <Col className={"w-full text-gray-400 mb-5 pr-6"}>
              Введите пароль введенный при регистрации или полученный от вашей
              администрации
            </Col>
            <Col className={"w-full flex flex-col gap-y-1 mb-2"}>
              <label>Пароль</label>
              <Input type={"password"} />
            </Col>
            <Col className={"w-full flex justify-between"}>
              <div className={"flex gap-x-2"}>
                <Checkbox />
                <span>Запомнить меня</span>
              </div>
              <div
                className={"text-brand cursor-pointer"}
                onClick={() => setState("tel")}
              >
                Забыли пароль?
              </div>
            </Col>
          </Row>
        );
      }
      case "tel": {
        return (
          <Row className={"w-full flex flex-col"}>
            <Col className={"w-full font-semibold text-lg"}>
              Введите номер телефона
            </Col>
            <Col className={"w-full text-gray-400 mb-5 pr-6"}>
              Мы отправим вам СМС-код для подтверждения
            </Col>
            <Col className={"w-full flex flex-col gap-y-1 mb-2"}>
              <label>Номер телефона</label>
              <Input type={"tel"} />
            </Col>
          </Row>
        );
      }

      case "sms": {
        return (
          <Row className={"w-full flex flex-col"}>
            <Col className={"w-full font-semibold text-lg"}>
              Введите СМС-код
            </Col>
            <Col className={"w-full text-gray-400 mb-5 pr-6"}>
              Код отправлен на номер{" "}
              <strong className={"text-black"}>+998935295445</strong>
            </Col>
            <Col className={"w-full flex flex-col gap-y-1 mb-2"}>
              <label>СМС-код</label>
              <Input type={"text"} placeholder={"— — — — —"} />
            </Col>
            <Col className={"w-full text-gray-500 flex items-center gap-x-1.5"}>
              Отправим код ещё раз через{" "}
              <Countdown
                date={Date.now() + countdown}
                renderer={({ hours, minutes, seconds, completed }) => {
                  return (
                    <span>
                      0{minutes}:{seconds > 9 ? seconds : "0" + seconds}
                    </span>
                  );
                }}
              />
            </Col>
          </Row>
        );
      }

      case "recover": {
        return (
          <Row className={"w-full flex flex-col"}>
            <Col className={"w-full font-semibold text-lg"}>
              Восстановление пароля
            </Col>
            <Col className={"w-full text-gray-400 mb-5 pr-6"}>
              Пароль должен состоять минимум из 8 символов и содержать цифры и
              специальные символы (! “ # $ % ‘ () *)
            </Col>
            <Col className={"w-full flex flex-col gap-y-1 mb-2"}>
              <label>Пароль</label>
              <Input type={"password"} />
            </Col>
            <Col className={"w-full flex flex-col gap-y-1 mb-2"}>
              <label>Повторите пароль</label>
              <Input type={"password"} />
            </Col>
          </Row>
        );
      }

      default:
        return null;
    }
  }, [state]);

  return (
    <Modal
      open={open}
      children={renderContent}
      centered
      maskClosable={true}
      onCancel={() => {
        setOpen(false);
      }}
      footer={() => {
        return (
          <button
            className="text-white rounded-md bg-brand border-2 border-solid border-brand hover:bg-transparent hover:text-brand overflow-hidden flex flex-row items-center justify-center py-2 px-3 w-full"
            onClick={() => {
              if (["default", "recover"].includes(state)) {
                auth?.signIn(
                  {
                    username: "Ivan",
                    password: "password",
                  },
                  () => {
                    navigate(from, { replace: true });
                  },
                );
              } else if (state === "tel") {
                setState("sms");
              } else if (state === "sms") {
                setState("recover");
              }
            }}
          >
            <div className="leading-[20px] font-medium">
              {state === "recover" ? "Завершить" : "Продолжить"}
            </div>
          </button>
        );
      }}
    />
  );
};

export const ChooseCompany: FC<{}> = () => {
  const [company, setCompany] = useState<Company>(companies[0]);
  const [openModal, setOpenModal] = useState(false);
  const renderCompanies = useMemo(() => {
    return (
      <Row className={"flex flex-col gap-y-3"}>
        {companies.map((c, index) => {
          const selected = c.id === company.id;
          return (
            <Col
              key={c.id}
              className={`w-full p-4 flex gap-x-3 items-center ${
                selected
                  ? "border-brand bg-transparent"
                  : "border-gray-200 bg-gray-200"
              } border-2
                border-solid rounded-xl hover:bg-transparent hover:border-brand`}
              onClick={() => setCompany(c)}
            >
              <img
                src={companyImage}
                alt={"company"}
                className={"rounded-lg"}
              />
              <div className={"flex flex-col"}>
                <strong>{c.name}</strong>
                <span>
                  Роль: <strong>{c.role}</strong>
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  }, [companies, company]);

  return (
    <Col
      className={
        "w-full flex flex-1 flex-col justify-center items-start px-40 py-24"
      }
    >
      <div className={"text-3xl font-semibold mb-5"}>Выберите компанию</div>
      <div className={"mb-4 text-gray-500"}>
        Мы видим несколько аккаунтов использующие этот номер телефона:{" "}
        <strong className={"text-black"}>+998910018181</strong>. Выберите в
        какую вы хотите зайти.
      </div>
      <div className={"flex flex-col gap-y-1 w-full mb-5"}>
        {renderCompanies}
      </div>
      <button
        className="text-white rounded-md bg-brand border-2 border-solid border-brand hover:bg-transparent hover:text-brand overflow-hidden flex flex-row items-center justify-center py-2 px-3 w-full mb-3"
        onClick={() => setOpenModal(true)}
      >
        <div className="leading-[20px] font-medium">Продолжить</div>
      </button>
      <div className={"flex justify-center items-center gap-x-2 w-full"}>
        <strong>У вас нет аккаунта?</strong>
        <Link to={"/sign-up/tech-info"}>
          <span className={"text-brand"}>Регистрация</span>
        </Link>
      </div>
      <PasswordModal open={openModal} setOpen={setOpenModal} />
    </Col>
  );
};
