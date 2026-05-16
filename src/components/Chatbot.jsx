import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Bot, SendHorizonal, X, MessageCircle } from "lucide-react";

const SYSTEM_PROMPT = `Kamu HARUS selalu menjawab menggunakan bahasa Indonesia.

Kamu adalah AI Assistant resmi Hewiko, digital agency modern.

Kepribadian:
- Profesional, modern, ramah, natural
- Tidak terlalu formal, tidak terlalu robotik
- Berbicara seperti customer support digital agency premium

Tugas utama:
- Membantu pengunjung memahami layanan Hewiko
- Membantu user memilih layanan yang tepat
- Menjawab pertanyaan seputar website, UI/UX, redesign, dan aplikasi
- Mengarahkan calon client untuk konsultasi lebih lanjut

Tentang Hewiko:
- Hewiko adalah digital agency modern
- Fokus pada web development, UI/UX design, redesign website, dan pengembangan aplikasi
- Mengutamakan design modern, performa, user experience, dan solusi bisnis digital

Gaya menjawab:
- Gunakan bahasa Indonesia
- Jawaban singkat namun jelas (2–5 kalimat kecuali diminta detail)
- Tone hangat dan profesional
- Jangan terdengar seperti AI robot

Aturan penting:
- Jika ditanya siapa kamu: "Saya adalah Asisten AI Hewiko yang siap membantu kebutuhan digital Anda."
- Jika user hanya menyapa: balas dengan hangat dan profesional
- Jika user bingung memilih layanan: tanyakan kebutuhan, rekomendasikan, jelaskan manfaat singkat
- Jika user ingin website: tanyakan tujuannya (company profile / landing page / ecommerce / portfolio / custom web app)
- Jika user menanyakan harga: jelaskan biaya menyesuaikan fitur dan kebutuhan, arahkan konsultasi
- Jika user ingin order atau konsultasi langsung: "Untuk konsultasi langsung, Anda dapat menghubungi tim Hewiko melalui WhatsApp di 0881-7718-672."
- Jika pertanyaan di luar layanan Hewiko: tetap jawab sopan, arahkan kembali bila relevan
- Jangan membuat informasi palsu`;

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return; 

    const userMessage = {
      role: "user",
      content: message,
    };

    const updatedChat = [...chat, userMessage];
    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", {
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...updatedChat,
        ],
      });

      const botMessage = {
        role: "assistant",
        content: res.data.content,
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kendala saat menghubungi server. Silakan coba lagi.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-110 transition-all duration-300 z-50"
        >
          <MessageCircle className="w-8 h-8 text-black" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[650px] rounded-[32px] overflow-hidden border border-white/10 bg-[#081028]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,255,255,0.08)] flex flex-col z-50">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between p-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Bot className="text-black w-6 h-6" />
              </div>
              <div>
                <h1 className="text-white font-semibold text-lg">AI Assistant</h1>
                <p className="text-cyan-400 text-sm">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 relative z-10">

            {/* Empty state */}
            {chat.length === 0 && (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-5">
                    <Bot className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h2 className="text-white text-2xl font-semibold mb-3">How can I help?</h2>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Ask anything about our services, projects, or digital solutions.
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-cyan-400 text-black rounded-br-md"
                      : "bg-white/5 border border-white/10 text-white rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 text-white px-5 py-4 rounded-3xl rounded-bl-md text-sm">
                  Mengetik...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/10 bg-white/[0.02] relative z-10">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-2">
              <input
                type="text"
                placeholder="Ask something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !loading) sendMessage(); 
                }}
                className="flex-1 bg-transparent px-3 text-white outline-none placeholder:text-slate-500"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-12 h-12 rounded-xl bg-cyan-400 flex items-center justify-center hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                <SendHorizonal className="text-black w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;