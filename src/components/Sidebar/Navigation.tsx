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
} from "../../assets/icons/sidebar";
import classNames from "../../utils/classNames";
import { NavigationItem } from "../../interfaces";

const navigations: NavigationItem[] = [
  { name: "Персонал", href: "#", icon: IdentificationIcon },
  { name: "Клиенты", href: "#", icon: UserGroupIcon },
  { name: "Услуги", href: "#", icon: AdjustmentsIcon },
  { name: "Склад", href: "#", icon: ArchiveIcon },
  {
    name: "Бронирования",
    href: "#",
    icon: CollectionIcon,
  },
  { name: "Интеграции", href: "#", icon: LightBulbIcon },
  { name: "Билинг", href: "#", icon: CashIcon },
  { name: "Настройки", href: "#", icon: CogIcon },
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
                  <a
                    href={item.href}
                    className={classNames(
                      isCurrent
                        ? "bg-gray-50 text-brand"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                    )}
                  >
                    <item.icon
                      className={classNames(
                        isCurrent
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    {item.name}
                  </a>
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
