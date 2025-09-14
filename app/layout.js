export const metadata = {
  title: "Imtiyaz Center",
  description: "Imtiyaz Overseas Educational Consultant (IOEC)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Imtiyaz Center"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-800">
                Imtiyaz Center
              </span>
            </div>
            <nav className="space-x-6">
              <a
                href="/"
                className="text-gray-700 hover:text-[var(--color-primary)]"
              >
                Home
              </a>
              <a
                href="/tentang"
                className="text-gray-700 hover:text-[var(--color-primary)]"
              >
                Tentang Kami
              </a>
              <a
                href="/program"
                className="text-gray-700 hover:text-[var(--color-primary)]"
              >
                Program
              </a>
              <a
                href="/kontak"
                className="text-gray-700 hover:text-[var(--color-primary)]"
              >
                Kontak
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-10">
          <div className="container text-center py-6 text-sm text-gray-600">
            © 2025 Imtiyaz Center. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
