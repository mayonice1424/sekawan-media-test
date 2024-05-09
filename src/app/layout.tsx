// import type { Metadata } from "next";
"use client";
import ReduxProvider from "@/redux/provider";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Layout } from "@/components/layout/board/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
