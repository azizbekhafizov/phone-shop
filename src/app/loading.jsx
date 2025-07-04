export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center flex-col text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-opacity-50 mb-4"></div>
      <p className="text-lg text-gray-600">Yuklanmoqda...</p>
    </div>
  );
}
