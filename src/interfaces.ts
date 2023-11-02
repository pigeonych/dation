import React from "react";

export type NavigationIcon = React.FC<{ className: string | undefined }>;

export type NavigationItem = {
  name: string;
  href: string;
  icon: NavigationIcon;
};
