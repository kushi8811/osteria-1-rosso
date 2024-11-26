import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import ScrollToFooter from "./_components/Scroll";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s : Osteria 1 Rosso",
    default: "Welcome / Osteria 1 Rosso",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} overflow-x-hidden`}>
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
