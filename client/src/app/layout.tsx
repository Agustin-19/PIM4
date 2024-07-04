import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/NavBar/page';
import Footer from '@/components/Footer/page';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olga Storage ",
  description: "E-Commerce en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <div className="flex-grow content">
              {children}
            </div>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
