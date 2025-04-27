import type { Metadata } from "next";
import { Fira_Code, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
const firaCode = Fira_Code({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "amrendram",
  description: "this is amrendram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} ${montserrat.className} antialiased`}>
                  <ThemeProvider>

        {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
