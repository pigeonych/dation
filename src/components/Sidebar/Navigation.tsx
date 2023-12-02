import React, { ReactNode } from "react";
import {
  AdjustmentsIcon,
  ArchiveIcon,
  CashIcon,
  CogIcon,
  CollectionIcon,
  IdentificationIcon,
  LightBulbIcon,
  UserGroupIcon,
  ViewGridIcon,
  ViewListIcon,
} from "../../assets/icons/sidebar";
import { Menu } from "antd";
import classNames from "../../utils/classNames";
import { NavigationItem } from "../../interfaces";
import { Link } from "react-router-dom";

const navigations: NavigationItem[] = [
  {
    name: "Компания",
    to: "/company",
    icon: ViewListIcon,
    children: [
      { name: "О компании", to: "/company/about", icon: null },
      { name: "Филиалы", to: "/company/branches", icon: null },
    ],
  },
  {
    name: "Записи",
    to: "/records",
    icon: ViewGridIcon,
    children: [
      { name: "Общий график", to: "/records/general", icon: null },
      { name: "Персональный график", to: "/records/:id/personal", icon: null },
    ],
  },
  { name: "Персонал", to: "/staff", icon: IdentificationIcon },
  { name: "Клиенты", to: "/clients", icon: UserGroupIcon },
  { name: "Услуги", to: "/services", icon: AdjustmentsIcon },
  { name: "Склад", to: "/stock", icon: ArchiveIcon },
  {
    name: "Бронирования",
    to: "/reservations",
    icon: CollectionIcon,
  },
  { name: "Интеграции", to: "/integration", icon: LightBulbIcon },
  { name: "Билинг", to: "/billing", icon: CashIcon },
  {
    name: "Настройки",
    to: "/settings",
    icon: CogIcon,
    children: [
      { name: "Моя компания", to: "/settings/company", icon: null },
      { name: "Тарифы", to: "/settings/rates", icon: null },
    ],
  },
];

const Navigation: React.FC<{}> = () => {
  const [currentNavigation, setCurrentNavigation] = React.useState(
    navigations[0],
  );

  return (
    <Menu className="w-full px-3" mode="inline">
      {navigations.map((n) => {
        const isChosen = n.name === currentNavigation.name;
        return n.children ? (
          <Menu.SubMenu
            title={
              <div className="flex flex-1 items-center gap-x-3">
                {n.icon && (
                  <n.icon
                    className={classNames("h-6 w-6 shrink-0")}
                    color={"#9CA3AF"}
                  />
                )}
                {n.name}
              </div>
            }
            key={n.name.toLowerCase()}
          >
            {n.children.map((nc) => {
              const isCurrent = nc.name === currentNavigation.name;
              return (
                <Menu.Item
                  key={nc.name.toLowerCase()}
                  style={
                    isCurrent
                      ? {
                          backgroundColor: "#3b65f3",
                        }
                      : {}
                  }
                  onClick={() => setCurrentNavigation(nc)}
                >
                  <Link to={nc.to} className="flex flex-1 items-center">
                    <span style={isCurrent ? { color: "white" } : {}}>
                      {nc.name}
                    </span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        ) : (
          <Menu.Item
            key={n.name.toLowerCase()}
            className={"w-full"}
            style={
              isChosen
                ? {
                    backgroundColor: "#3b65f3",
                  }
                : {}
            }
            onClick={() => setCurrentNavigation(n)}
          >
            <Link to={n.to} className="flex flex-1 items-center gap-x-3">
              {n.icon && (
                <n.icon
                  className={classNames(
                    isChosen
                      ? "text-white"
                      : "text-gray-400 group-hover:text-indigo-600",
                    "h-6 w-6 shrink-0",
                  )}
                  color={isChosen ? "white" : "#9CA3AF"}
                />
              )}
              <span style={isChosen ? { color: "white" } : {}}>{n.name}</span>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default Navigation;
