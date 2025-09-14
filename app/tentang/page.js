export default function About() {
  return (
    <section className="space-y-12">
      {/* Judul */}
      <div className="text-center py-16 bg-[var(--color-secondary)] text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Tentang Imtiyaz Center</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Imtiyaz Overseas Educational Consultant (IOEC) adalah konsultan
          pendidikan luar negeri yang telah berdiri sejak 2018. Kami berkomitmen
          untuk membantu generasi muda Indonesia meraih pendidikan terbaik di
          universitas internasional.
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Menjadi jembatan utama bagi para pelajar Indonesia untuk menuntut
            ilmu di luar negeri, khususnya di Mesir dan Turki, dengan kualitas
            pendidikan yang unggul serta berlandaskan nilai-nilai Islami.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              Membantu calon mahasiswa dalam proses pendaftaran universitas luar
              negeri.
            </li>
            <li>Menyediakan bimbingan persiapan bahasa Arab dan akademik.</li>
            <li>Memberikan konsultasi dan pendampingan selama masa studi.</li>
            <li>
              Menjalin kerja sama dengan universitas terkemuka di Mesir & Turki.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Bergabung Bersama Kami</h2>
        <p className="mb-6">
          Siapkan masa depan cerahmu bersama Imtiyaz Center. Hubungi kami untuk
          mendapatkan informasi lebih lanjut.
        </p>
        <a
          href="/kontak"
          className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}
