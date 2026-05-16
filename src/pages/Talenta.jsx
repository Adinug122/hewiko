

import adi from '../assets/adi.png'
import pandu from '../assets/pandu.png'
import tio from '../assets/tio.png'
function Talenta() {

  const teams = [
  {
    name: "Adi Nugroho",
    role: "Web Developer",
    image: adi,
    desc: "Berpengelaman dalam membuat website dan menyelesaikan masalah umkm",
    skills: ["Laravel", "Tailwind", "MySQL"],
  },
  {
    name: "Tio Fernando",
    role: "Mobile Developer",
    image: tio,
    desc: "Spesialis Mobile Developer dengan menggunakan kotlin",
    skills: ["Firebase", "Kotlin"],
  },
  {
    name: "Pandu Sagalang",
    role: "UI Designer",
    image: pandu,
    desc: "Berpengalaman membangun UI dan design yang responsive",
    skills: ["Figma","Adobe"],
  },
]
  return (
    <>
<div id="team" className='mt-4 min-h-screen max-w-7xl p-4 mx-auto'>
  <h1 className='text-white text-3xl font-bold'>Talenta <span className='text-primary'>Inti</span> Kami</h1>
  <div className='max-w-lg mt-2'>
  <p className='text-slate-500'>Keahlian teknis yang mendalam dipadukan dengan visi kreatif.
Kenali tim arsitek digital yang akan membangun solusi Anda.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
   {teams.map((team,index) => (
     <div
     key={index}
     className="group max-w-sm rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-gray-800
      hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
      <div className="relative h-[500px]">
        <img
          src={team.image}
          alt="Arya Pratama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black
         group-hover:via-black/70 transition-all duration-500"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-xs tracking-[0.2em] uppercase text-cyan-400 mb-2">
           {team.role}
          </p>
          <h3 className="text-3xl font-bold mb-4">
          {team.name}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-5">
           {team.desc}
          </p>
          <div className="flex gap-2 flex-wrap">
            {team.skills.map((skill,i)=>(
            <span key={i} className="px-3 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              {skill}
            </span>
            ))}

        
          </div>
        </div>
      </div>
    </div>
   ))}
  
  
</div>
  </div>

    </>
  )
}

export default Talenta
