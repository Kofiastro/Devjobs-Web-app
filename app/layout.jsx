import { kumbhSans } from "./ui/fonts";
import "./globals.css";


export const metadata = {
  title: "Devjobs-web-app",
  description: "jobs web app ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
}
