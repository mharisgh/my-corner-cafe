import { lovelight } from "next/font/google";
import "./globals.css";
// @import url('https://fonts.googleapis.com/css2?family=Love+Light&display=swap');

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Corner Cafe",
  description: "List all delicious dishes menu from My Corner Cafe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
