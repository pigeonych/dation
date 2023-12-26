import { useLocation, Navigate } from "react-router-dom";
import { ReactElement } from "react";
import { useAuth } from "../hooks/useAuth";

export const RequireAuth = ({
  children,
}: {
  children: ReactElement;
}): ReactElement | null => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth?.user) {
    return <Navigate to={"/login/phone-number"} state={{ from: location }} />;
  }

  return children;
};
