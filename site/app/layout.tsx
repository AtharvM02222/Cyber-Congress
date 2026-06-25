import type { Metadata } from "next";
import "./globals.css";
import { NotchNavbar } from "@/components/ui/notch-navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Cyber Congress | AISG46",
  description:
    "The cybersecurity society of Amity International School, Sector 46, Gurugram",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <style>{`
          link[rel="icon"] {
            border-radius: 50%;
          }
        `}</style>
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NotchNavbar />
          <main className="flex-1 mt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
