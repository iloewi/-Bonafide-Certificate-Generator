export const metadata = {
  title: "Bonafide Certificate Generator",
  description: "Generate bonafide certificates instantly, beautifully.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  );
}
