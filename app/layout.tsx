import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "هشتمینو | دنیای یادگیری ریاضی هشتم",
  description: "یاد بگیر، تمرین کن، بدرخش! آموزش و تمرین ریاضی پایه هشتم.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
