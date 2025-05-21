import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gửi dữ liệu tới backend ở đây
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&display=swap');

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animated-gradient {
          background: linear-gradient(270deg, #1cab9d, #14786e, #25bfa3, #118567);
          background-size: 800% 800%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      <div className="min-h-screen flex flex-col md:flex-row overflow-hidden text-gray-900">
        {/* Bên trái */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-16 text-white bg-gradient-to-br from-[#1cab9d] to-[#117864] shadow-2xl">
          <div className="max-w-md mx-auto space-y-10">
            {/* Logo */}
            <div className="bg-[#0a2540] rounded-xl p-8 text-center shadow-md border border-white/10">
              <h2
                className="text-6xl md:text-5xl font-bold tracking-widest text-[#6FFFE9] drop-shadow"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                H-PAI
              </h2>
              <p
                className="text-4xl font-light mt-2 text-[#6FFFE9]/80 tracking-widest"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Công Nghệ AI
              </p>
            </div>

            {/* Mô tả */}
            <div>
              <h1 className="text-2xl font-bold mb-2 text-white">LIÊN HỆ VỚI CHÚNG TÔI</h1>
              <p className="text-white/90 leading-relaxed">
                H-PAI MEDIA luôn sẵn sàng hỗ trợ bạn trên hành trình chuyển đổi số thông minh. Liên hệ với chúng tôi để biết thêm thông tin.
              </p>
            </div>

            {/* Thông tin liên hệ */}
            <div className="space-y-6 text-white text-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 text-white" />
                <div>
                  <strong>Địa chỉ:</strong><br />
                  BS8, Vinhome Grand Park, Phường Long Bình, TP. Thủ Đức, TP.HCM
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 text-white" />
                <div>
                  <strong>Hotline:</strong><br />
                  <a href="tel:0868790365" className="hover:underline">0868 790 365</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 text-white" />
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:hpaimediatechnology@gmail.com" className="hover:underline">
                    hpaimediatechnology@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bên phải: Form liên hệ */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg m-6">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 text-gray-900">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2 text-lg">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên của bạn"
                className="w-full rounded-md px-4 py-3 border border-[#1CAB9D] focus:outline-none focus:ring-2 focus:ring-[#1CAB9D] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
                className="w-full rounded-md px-4 py-3 border border-[#1CAB9D] focus:outline-none focus:ring-2 focus:ring-[#1CAB9D] transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2 text-lg">
                Tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Nhập tin nhắn của bạn"
                className="w-full rounded-md px-4 py-3 border border-[#1CAB9D] focus:outline-none focus:ring-2 focus:ring-[#1CAB9D] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1CAB9D] hover:bg-[#159e8c] text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              Gửi liên hệ
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600 mt-4 text-center font-semibold">
                ✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi nhanh nhất.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-600 mt-4 text-center font-semibold">
                ❌ Có lỗi xảy ra. Vui lòng thử lại sau.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}



