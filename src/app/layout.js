import { yekan } from "@/utils/fonts";

import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.className} container`}>
        <NextAuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
