import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { io } from "socket.io-client";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const server = process.env.SERVER || "http://localhost:4000";

const socket = io(server);

socket.on("connect", () => {
  console.log(`⚡️[frontend]: Connected to ${server} - ${socket.id}`);
});

export const metadata: Metadata = {
  title: "Socket.io Next.js Example",
  description: "Let's deal with sockets in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
