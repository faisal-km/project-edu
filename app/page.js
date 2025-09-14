export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-[var(--color-primary)] text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang di Imtiyaz Center
        </h1>
        <p className="text-lg">
          Imtiyaz Overseas Educational Consultant (IOEC) <br />
          Konsultan pendidikan luar negeri terpercaya untuk masa depan Anda.
        </p>
        <a
          href="/program"
          className="mt-6 inline-block bg-white text-[var(--color-primary)] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
        >
          Lihat Program
        </a>
      </div>

      {/* Program Unggulan */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">
          Program Beasiswa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Kuliah di Al-Azhar, Kairo
            </h3>
            <p className="text-gray-700">
              Kesempatan belajar di Universitas Al-Azhar, Mesir dengan dukungan
              penuh.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Studi di Turki</h3>
            <p className="text-gray-700">
              Program beasiswa & mandiri untuk kuliah di berbagai universitas di
              Turki.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">
              Bimbingan Bahasa Arab
            </h3>
            <p className="text-gray-700">
              Persiapan bahasa Arab intensif sebelum keberangkatan ke luar
              negeri.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Siap Mendaftar?</h2>
        <p className="mb-6">
          Jangan tunda masa depan cerahmu. Daftar sekarang juga!
        </p>
        <a
          href="/daftar"
          className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
}
