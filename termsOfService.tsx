import React from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animated-gradient {
          background: linear-gradient(270deg, #1cab9d, #16a085, #48c9b0, #117864);
          background-size: 800% 800%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      <div className="animated-gradient text-gray-900 min-h-screen flex flex-col">
        {/* Nội dung chính */}
        <div className="py-16 px-6 md:px-20 lg:px-40 flex flex-col items-center gap-16">
          <div className="max-w-4xl w-full bg-white bg-opacity-90 backdrop-blur-md p-12 rounded-xl shadow-xl border border-[#16a085]">
            <h1 className="text-4xl font-extrabold mb-8 text-[#1CAB9D]">Điều khoản dịch vụ</h1>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">1. Giới thiệu</h2>
              <p className="leading-relaxed">
                Chào mừng bạn đến với H-PAI Chat. Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">2. Quy định sử dụng</h2>
              <p className="leading-relaxed mb-2">
                Bạn cam kết không sử dụng nền tảng cho các hoạt động vi phạm pháp luật, lạm dụng, phá hoại hệ thống, hoặc gây rối trải nghiệm người dùng khác.
              </p>
              <p className="leading-relaxed">
                Chúng tôi có quyền khóa hoặc ngừng cung cấp dịch vụ đối với tài khoản vi phạm.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">3. Quyền sở hữu trí tuệ</h2>
              <p className="leading-relaxed">
                Mọi nội dung, thiết kế, phần mềm và tài liệu trên nền tảng đều thuộc quyền sở hữu của H-PAI hoặc các bên cấp phép. Việc sao chép, sử dụng lại cần được sự đồng ý bằng văn bản.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">4. Trách nhiệm pháp lý</h2>
              <p className="leading-relaxed">
                H-PAI Chat không chịu trách nhiệm với các tổn thất phát sinh do sự gián đoạn dịch vụ, lỗi kỹ thuật, hoặc mất mát dữ liệu – trừ khi có thỏa thuận riêng bằng văn bản.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">5. Thay đổi điều khoản</h2>
              <p className="leading-relaxed">
                Điều khoản có thể được cập nhật bất kỳ lúc nào. Những thay đổi sẽ có hiệu lực kể từ khi được công bố trên website chính thức.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-[#148F77]">6. Liên hệ</h2>
              <p className="leading-relaxed">
                Mọi thắc mắc liên quan đến điều khoản dịch vụ, vui lòng gửi email đến:{" "}
                <a
                  href="mailto:hpaimediatechnology@gmail.com"
                  className="text-[#1CAB9D] hover:underline"
                >
                  hpaimediatechnology@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>

        {/* CTA Gọn – Đẹp – Full chiều ngang */}
        <div className="w-full bg-[#0a2540] text-white text-center shadow-2xl rounded-t-[2rem] overflow-hidden px-6 py-20">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bạn có muốn xem sản phẩm của chúng tôi hoạt động không?
            </h2>
            <p className="mb-8 text-lg">
              Hãy lên lịch dùng thử ngay hôm nay và tự mình trải nghiệm.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#1CAB9D] hover:bg-[#148F77] transition-colors text-white font-semibold py-3 px-6 rounded-full"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
