import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mosaic Freelance",
  description: "Mosaic Freelance is a platform in Telegram Mini Apps (TMA) build on TON blockchain for freelancers and customers to discover and collaborate on projects.",
  keywords: ["Mosaic Freelance", "Mosaic", "freelance", "blockchain", "ton", "Telegram Mini Apps", "TON blockchain", "freelancers", "customers", "projects"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
