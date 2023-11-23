import React from "react";

export type NavigationIcon = React.FC<{
  className: string | undefined;
  color: string;
}>;

export type NavigationItem = {
  name: string;
  to: string;
  icon: NavigationIcon;
};

export type StatusType = "process" | "done" | "canceled";
