import React from "react";
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
import classNames from "../../utils/classNames";
import { NavigationItem } from "../../interfaces";
import { Link } from "react-router-dom";

const navigations: NavigationItem[] = [
  { name: "Компания", to: "/company", icon: ViewListIcon },
  { name: "Записи", to: "/records/general", icon: ViewGridIcon },
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
  { name: "Настройки", to: "/settings", icon: CogIcon },
];
const Navigation: React.FC<{}> = () => {
  const [currentNavigation, setCurrentNavigation] = React.useState(
    navigations[0],
  );

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigations.map((item) => {
              const isCurrent = item.name === currentNavigation.name;
              return (
                <li key={item.name} onClick={() => setCurrentNavigation(item)}>
                  <Link
                    to={item.to}
                    className={classNames(
                      isCurrent
                        ? "bg-brand text-white"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                    )}
                  >
                    <item.icon
                      className={classNames(
                        isCurrent
                          ? "text-white"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0",
                      )}
                      color={isCurrent ? "white" : "#9CA3AF"}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
