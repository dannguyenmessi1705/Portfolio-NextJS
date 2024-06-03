"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Socket, io } from "socket.io-client";
type Props = {
  children: ReactNode;
};
type Context = {
  users: number;
};
const SocketContext = createContext<Context>({
  users: 0,
});

export function SocketProvider({ children }: Props) {
  const [users, setUsers] = useState<number>(0);
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
      transports: ["websocket", "polling"],
      path: "/socket",
      reconnection: true,
      reconnectionAttempts: 5,
    });
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("online-users", (user: number) => {
      setUsers(user);
    });

    return () => {
      socket.disconnect();
    };
    //eslint-disable-next-line
  }, [users]);

  const value = { users };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}
