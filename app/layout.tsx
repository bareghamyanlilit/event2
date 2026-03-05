import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Լեա և Լեո",
  description: "Լեա և Լեո",
  openGraph: {
    title: "Լեաի և Լեոի հարսանեկան հրավիրատոմս",
    description: "Best invitation website",
    url: "https://wedding-invitation-2-smoky.vercel.app/",
    siteName: "Լեա և Լեո",
    images: [
      {
        url: "/first.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
