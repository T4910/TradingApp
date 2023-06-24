"use client";
import { SessionProvider, useSession } from "next-auth/react";

const Session = ({ children }) => {
  // let [ses, loading] = useSession()
  return <SessionProvider>{children}</SessionProvider>;
};

export default Session;