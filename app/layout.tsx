import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/custom.css"
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header/>
              </header>
        <main> {children} </main>
      </body>
    </html>
  );
}