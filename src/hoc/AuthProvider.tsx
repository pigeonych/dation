import { createContext, ReactElement, useState } from "react";
import { User } from "../interfaces";

export const AuthContext = createContext<{
  user: User | null;
  signIn: (newUser: User, cb: () => void) => void;
  signOut: (cb: () => void) => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (newUser: User, cb: () => void) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
