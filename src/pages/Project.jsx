import { ExternalLink, GitBranchPlus, Github } from "lucide-react";
import adeva from '../assets/adeva.png'
import orderBy from '../assets/dashboardorder.png'
import hoventory from '../assets/hoventory.png'
const projects = [
  {
    title: "Rental Mobil Adeva",
    image:adeva,
    description:
      "Website Rental mobil menggunakan payment gateway",
    demo: "#",
    github: "#",
  },
  {
    title: "Order By Table Website",
    image:orderBy,
    description:
      "Platform pemesanan restoran melalui qrcode yang memudahkan pelanggan",
    demo: "#",
    github: "#",
  },
  {
    title: "Hoventory",
    category: "Frontend Development",
    image:hoventory
   ,
    description:
      "Aplikasi Inventory berbasis mobile",
    demo: "#",
    github: "#",
  },
];

export default function Project() {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <span className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
          PROJECT
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Project Terbaru Kami
        </h2>

        <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
          Beberapa project yang telah kami kerjakan dengan desain modern,
          performa cepat, dan pengalaman pengguna yang optimal.
        </p>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>

        
              <div className="flex items-center gap-4 mt-8">
                <a
                  href={project.demo}
                  className="flex items-center justify-center gap-2 flex-1 bg-cyan-400 text-gray-900 font-semibold py-3 rounded-2xl hover:opacity-90 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>

           
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}