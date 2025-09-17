import { BookOpen, Globe, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <section className="space-y-20">
      {/* Hero Section */}
      <div className="relative bg-[var(--color-primary)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="Education background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center py-24 px-6">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Selamat Datang di Imtiyaz Center
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Imtiyaz Overseas Educational Consultant (IOEC) <br />
            Konsultan pendidikan luar negeri terpercaya untuk masa depan Anda.
          </p>
          <a
            href="/program"
            className="mt-8 inline-block bg-white text-[var(--color-primary)] font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            🎓 Lihat Program
          </a>
        </div>
      </div>

      {/* Program Unggulan */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Program Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-1">
            <GraduationCap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="font-semibold text-xl mb-3">
              Kuliah di Al-Azhar, Kairo
            </h3>
            <p className="text-gray-600">
              Kesempatan belajar di Universitas Al-Azhar, Mesir dengan dukungan
              penuh.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-1">
            <Globe className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="font-semibold text-xl mb-3">Studi di Turki</h3>
            <p className="text-gray-600">
              Program beasiswa & mandiri untuk kuliah di berbagai universitas di
              Turki.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-1">
            <BookOpen className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="font-semibold text-xl mb-3">
              Bimbingan Bahasa Arab
            </h3>
            <p className="text-gray-600">
              Persiapan bahasa Arab intensif sebelum keberangkatan ke luar
              negeri.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 bg-[var(--color-secondary)] text-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Siap Mendaftar?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Jangan tunda masa depan cerahmu. Daftar sekarang juga dan raih
          kesempatan kuliah di luar negeri bersama Imtiyaz Center.
        </p>
        <a
          href="/daftar"
          className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          🚀 Daftar Sekarang
        </a>
      </div>
    </section>
  );
}
