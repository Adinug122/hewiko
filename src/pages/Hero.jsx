export default function Hero() {
  return (
    <div id="home" className="min-h-screen mt-12 bg-gray-900 relative">
  <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 text-center">
    <div className="absolute inset-0 flex items-center justify-center ">
      <div className="w-96 h-80 bg-cyan-600 rounded-full opacity-30 -translate-x-[100px] blur-3xl"></div>
    </div>
    <div className="-mt-35">
      <div className='max-w-[250px] mb-5 mx-auto bg-[#262A37] px-3.5 py-1 rounded-2xl border-2 border-[#3C494E]'>
        <h2 className='text-primary font-semibold'>DIGITAL CRAFTSMANSHIP</h2>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white trac">Membangun Masa <br></br>Depan</h1>
      <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold bg-linear-to-r  from-[#00D2FF] to-[#00686F]  bg-clip-text text-transparent'>Melalui Kode Presisi.</h1>
      <p className="py-6 text-slate-400 text-sm md:text-xl">
   Hewiko adalah mitra teknologi untuk startup dan perusahaan besar. Kami
menggabungkan seni desain dengan kekuatan rekayasa perangkat lunak untuk
menciptakan produk digital yang luar biasa.
      </p>
      <div className="flex items-center justify-center gap-4">
      <button className="rounded-lg text-white font-semibold bg-[#262A37] px-6 py-3 border-2 border-[#3C494E]">
        Mulai Proyek
      </button>
      <button className="rounded-lg bg-primary px-6 py-3 text-slate-900 font-bold shadow-lg shadow-primary/20">
      Portofolio
      </button>
      </div>

    </div>
  </div>
</div>
  )
}
