import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Imtiyaz Center",
  description:
    "Konsultan pendidikan luar negeri terpercaya untuk kuliah di Mesir & Turki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-6 border-t">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Imtiyaz Center. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
