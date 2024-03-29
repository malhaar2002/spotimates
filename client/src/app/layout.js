import localFont from "@next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export const metadata = {
  title: "Spotimates",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
        {children}
      </body>
    </html>
  );
}
