import { Rubik } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from './Context/AuthContext'

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
