import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Queueflix",
  description: "Webapp to manage a queue of movies and series to watch next with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
