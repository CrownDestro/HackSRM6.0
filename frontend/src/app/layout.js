import "./globals.css"; // Import global styles if needed
import Navbar from "../Components/Navbar"; // Import your Navbar component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <Navbar /> {/* Navbar will be persistent across all pages */}
        {children} {/* This is where page content will be rendered */}
      </body>
    </html>
  );
}