"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
// import { Socket, io } from "socket.io-client";
import { supabase } from "@/lib/supabase";
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
    // const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
    //   transports: ["websocket", "polling"],
    //   path: "/socket",
    //   reconnection: true,
    //   reconnectionAttempts: 5,
    // });
    // if (!socket.connected) setUsers(0)
    // socket.on("online-users", (user: number) => {
    //   setUsers(user);
    // });

    // return () => {
    //   socket.disconnect();
    // };
    const channel = supabase.channel("users-online");

    // Lắng nghe các sự kiện presence
    channel
      .on("presence", { event: "sync" }, () => {
        const newState = channel.presenceState();
        const totalUsers = Object.keys(newState).length;
        setUsers(totalUsers);
      })
      .on("presence", { event: "join" }, ({ key, newPresences }) => {
        setUsers((prev) => prev + 1);
      })
      .on("presence", { event: "leave" }, ({ key, leftPresences }) => {
        setUsers((prev) => prev - 1);
      })
      .subscribe();

    // Track user presence
    const userStatus = {
      user: `user-${Math.random().toString(36).substring(7)}`, // Unique user identifier
      online_at: new Date().toISOString(),
    };

    const trackUser = async () => {
      const presenceTrackStatus = await channel.track(userStatus);
    };

    trackUser();

    return () => {
      channel.unsubscribe();
    };
  }, []);

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
