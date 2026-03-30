export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 py-14 px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-[15px] text-gray-500 mb-3">
          Designed & Built by <strong className="text-white font-semibold">Favour Williams</strong> — The App Builder
        </p>
        <p className="text-[13px] text-gray-700">
          &copy; {new Date().getFullYear()} favourwilliams — Building mobile experiences that matter.
        </p>
      </div>
    </footer>
  );
}
