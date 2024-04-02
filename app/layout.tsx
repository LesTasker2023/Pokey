import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Header from "./Components/Header";
export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex build for Heatable",
};

interface Props {
  children: React.ReactNode;
}
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
