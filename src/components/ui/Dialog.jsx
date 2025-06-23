export default function Dialog({ open, onClose, onSubmit, query, setQuery }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4 py-6">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col items-center animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 transition"
          onClick={onClose}
          type="button"
          aria-label="Tutup"
        >
          &times;
        </button>

        {/* Search Icon */}
        <div className="flex justify-center items-center mb-6 mt-2">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 shadow text-blue-600 dark:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </span>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1">
          Pencarian
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8 text-sm">
          Cari data, produk, atau pengguna secara cepat.
        </p>
        {/* Form */}
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(query);
          }}
          className="w-full flex flex-col gap-4"
        >
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition"
            placeholder="Ketik kata kunci..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
          >
            Cari
          </button>
        </form>
      </div>
    </div>
  );
}
