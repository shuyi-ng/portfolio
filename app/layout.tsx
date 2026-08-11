import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shuyi Ng | Web Developer",
  description: "Portfolio of Shuyi Ng, a frontend-focused web developer building clear, fast and useful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
