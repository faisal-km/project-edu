export const metadata = {
  title: "Program | Imtiyaz Center",
  description:
    "Daftar program Imtiyaz Center untuk kuliah di luar negeri: Mesir, Turki, dan bimbingan bahasa Arab.",
};

export default function Program() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="text-center py-16 bg-[var(--color-secondary)] text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Program Imtiyaz Center</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Kami menyediakan berbagai program untuk membantu siswa Indonesia
          menempuh pendidikan di luar negeri, khususnya Mesir dan Turki.
        </p>
      </div>

      {/* Daftar Program */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Program 1 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
            Studi di Universitas Al-Azhar, Kairo
          </h2>
          <p className="text-gray-700 mb-4">
            Kesempatan kuliah di salah satu universitas Islam tertua dan terbaik
            di dunia. Tersedia jalur beasiswa maupun mandiri.
          </p>
          <a
            href="https://bit.ly/imtiyaz26-27"
            target="_blank"
            className="inline-block bg-[var(--color-primary)] text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Program 2 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
            Studi di Universitas Turki
          </h2>
          <p className="text-gray-700 mb-4">
            Belajar di kampus-kampus bergengsi Turki dengan peluang beasiswa
            penuh maupun sebagian. Program tersedia untuk berbagai jurusan.
          </p>
          <a
            href="https://bit.ly/imtiyaz26-27"
            target="_blank"
            className="inline-block bg-[var(--color-primary)] text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Program 3 */}
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
            Bimbingan Bahasa Arab & Persiapan
          </h2>
          <p className="text-gray-700 mb-4">
            Program intensif bahasa Arab serta persiapan akademik untuk
            menunjang keberhasilan studi di luar negeri.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Siap Bergabung?</h2>
        <p className="mb-6">Pilih program terbaikmu bersama Imtiyaz Center.</p>
        <a
          href="/contact"
          className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Konsultasi Gratis
        </a>
      </div>
    </section>
  );
}
