export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="text-5xl font-black text-red-600 tracking-tighter mb-6">ABC</div>
        <p className="text-slate-400 mb-8 max-w-md text-lg">Membawa kehangatan dan rasa pedas yang tak tergantikan ke setiap meja makan keluarga Indonesia.</p>
        <div className="flex gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors font-bold">IG</a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors font-bold">X</a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors font-bold">FB</a>
        </div>
        <div className="text-sm text-slate-500 font-medium">
          ~Mohammad Ariq Haqi.
        </div>
      </div>
    </footer>
  );
}