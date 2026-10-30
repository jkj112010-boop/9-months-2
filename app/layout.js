
import "./globals.css";

export const metadata = {
  title: "For You, Always ♡",
  description: "A little story about us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
