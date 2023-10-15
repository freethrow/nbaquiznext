import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Header from "@/components/Header";
import { dark } from "@clerk/themes";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Freethrow does it again!",
  description:
    "A brutal basketball statistical bloodbath. You play or you're a loser.",
};

//👇 Import Open Sans font
import { Fredoka } from "next/font/google";

//👇 Configure our font object
const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" data-theme="dracula" className={fredoka.className}>
        <body>
          <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <Header />
            <div className="flex-1 mx-auto w-full md:h-[calc(100vh-98px)] flex flex-col justify-center items-center ">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
