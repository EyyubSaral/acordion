import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
