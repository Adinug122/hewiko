import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsapp = () => {
    const phoneNumber = "628817718672";

    const text = `
Halo, saya ${form.name}

Email: ${form.email}

Layanan:
${form.service}

Pesan:
${form.message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center relative z-10">
        
        {/* LEFT */}
        <div>
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
            KONTAK
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-8">
            Diskusikan bisnis Anda
            <span className="text-cyan-400">
              {" "}Kami siap membantu.
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14">
            
            {/* CONTACT */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Hubungi Kami
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>

                  <p className="break-all">
                    hewiikooo@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>

                  <p>0881-7718-672</p>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Alamat
              </h3>

              <div className="space-y-6 text-slate-400">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>

                  <p>
                    Madiun, Jawa Timur
                    <br />
                    Indonesia
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>

                  <p>
                    Senin — Jumat
                    <br />
                    09.00 - 17.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-[40px]"></div>

          <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* NAME */}
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-500 mb-3 block">
                  Hallo, Nama Saya
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-2xl border border-white/10 bg-[#161B2E] px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs uppercase tracking-widest text-slate-500 mb-3 block">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-white/10 bg-[#161B2E] px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* SERVICE */}
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 mb-3 block">
                  Bicara Tentang Proyek
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#161B2E] px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
                >
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest text-slate-500 mb-3 block">
                Tentang Proyek
              </label>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your project description"
                className="w-full rounded-2xl border border-white/10 bg-[#161B2E] px-5 py-4 text-white outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              onClick={sendToWhatsapp}
              className="w-full mt-8 rounded-2xl bg-cyan-400 text-black font-semibold py-4 md:py-5 text-base md:text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;