
export default function Layanan() {
  return (
    <div id="service">
      <ServiceContent />
    </div>
  );
}

function ServiceContent() {
      const services = [
  {
    title: "Pembuatan Software",
    description:
      "Pengembangan aplikasi kustom yang tangguh menggunakan teknologi modern untuk solusi tepat guna.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 014-4h1a5 5 0 019.9-1A4 4 0 1120 15H3z"
        />
      </svg>
    ),
    tags: ["Layanan Terpadu", "Modern Stack"],
    active: false,
  },

  {
    title: "UI/UX Design",
    description:
      "Perancangan antarmuka yang intuitif dan pengalaman pengguna yang memikat, fokus pada estetika dan fungsionalitas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 3a3.75 3.75 0 00-3.75 3.75v.443a3.75 3.75 0 00.879 2.4l.878 1.024a3.75 3.75 0 010 4.766l-.878 1.024A3.75 3.75 0 006 18.807v.443A3.75 3.75 0 009.75 23h4.5A3.75 3.75 0 0018 19.25v-.443a3.75 3.75 0 00-.879-2.4l-.878-1.024a3.75 3.75 0 010-4.766l.878-1.024A3.75 3.75 0 0018 7.193V6.75A3.75 3.75 0 0014.25 3h-4.5z"
        />
      </svg>
    ),
    tags: ["Layanan Terpadu", "Premium Design"],
    active: true,
  },

  {
    title: "Konsultasi Digital",
    description:
      "Membantu merumuskan strategi teknologi yang efektif untuk ide-ide inovatif dan pengembangan bisnis digital.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
        />
      </svg>
    ),
    tags: ["Layanan Terpadu", "Business Strategy"],
    active: false,
  },
];
  return (
 <section className="max-w-7xl mx-auto px-4 py-24">
  
  <div className="text-center mb-16">
    <p className="text-primary font-medium mb-3">
      Layanan Kami
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Solusi Digital Modern
    </h2>

    <p className="text-slate-400 max-w-2xl mx-auto mt-4">
      Kami membantu bisnis berkembang melalui teknologi modern,
      desain premium, dan solusi digital yang scalable.
    </p>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {services.map((service, index) => (
      <div
        key={index}
        className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2
          
          ${
            service.active
              ? "border border-cyan-500/50 bg-[#06111F] shadow-[0_0_40px_rgba(0,255,255,0.08)]"
              : "border border-white/10 bg-[#111827]/80 hover:border-cyan-500/60"
          }
        `}
      >
        
    
        <div
          className={`absolute inset-0 transition duration-500
            ${
              service.active
                ? "bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.15),transparent_70%)]"
                : "opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.15),transparent_70%)]"
            }
          `}
        ></div>

        <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#06203A] flex items-center justify-center mb-8">
          {service.icon}
        </div>

    
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-5">
            {service.title}
          </h3>

          <p className="text-slate-400 leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="flex gap-3 flex-wrap">
            {service.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-2 text-sm rounded-lg
                  
                  ${
                    service.active
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-white/10 text-slate-300"
                  }
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}

  </div>
</section>
  )
}
