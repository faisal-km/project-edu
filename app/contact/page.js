export const metadata = {
  title: "Kontak | Imtiyaz Center",
  description: "Hubungi Imtiyaz Center untuk informasi lebih lanjut.",
};

export default function Contact() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="text-center py-16 bg-[var(--color-primary)] text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Kontak Kami</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Ada pertanyaan atau butuh informasi lebih lanjut? Tim Imtiyaz Center
          siap membantu Anda.
        </p>
      </div>

      {/* Kontak Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Informasi Kontak</h2>
          <p className="text-gray-700">
            Silakan hubungi kami melalui nomor atau email berikut:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              📍 <span className="font-semibold">Alamat:</span> Cilegon, Banten,
              Indonesia
            </li>
            <li>
              📞 <span className="font-semibold">Telepon:</span> +62 812 8442
              4839
            </li>
            <li>
              📱 <span className="font-semibold">WhatsApp:</span> +62 877 7722
              7864
            </li>
            <li>
              ✉️ <span className="font-semibold">Email:</span>{" "}
              info@imtiyazcenter.com
            </li>
          </ul>
        </div>

        {/* Form Kontak */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kirim Pesan</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
