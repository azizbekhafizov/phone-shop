export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Sahifa topilmadi</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Siz izlayotgan sahifa mavjud emas yoki o'chirib yuborilgan.
      </p>
      <a
        href="/"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Bosh sahifaga qaytish
      </a>
    </div>
  );
}
