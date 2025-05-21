import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#1cab9d] to-[#117864] text-white">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl font-extrabold mb-8 text-[#6FFFE9]">Chính sách bảo mật</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-white/90">1. Thu thập thông tin</h2>
          <p className="leading-relaxed">
            Chúng tôi thu thập thông tin bạn cung cấp như tên, email, và nội dung tin nhắn khi bạn liên hệ hoặc sử dụng dịch vụ. Dữ liệu này được lưu trữ an toàn và sử dụng để cải thiện trải nghiệm người dùng.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-white/90">2. Sử dụng thông tin</h2>
          <p className="leading-relaxed">
            Dữ liệu được dùng để liên hệ, cung cấp dịch vụ, phản hồi yêu cầu và nâng cấp hệ thống. Chúng tôi không bán, chia sẻ hoặc tiết lộ thông tin cá nhân cho bên thứ ba nếu không có sự cho phép.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-white/90">3. Bảo mật thông tin</h2>
          <p className="leading-relaxed">
            Chúng tôi áp dụng các biện pháp bảo mật tiên tiến như mã hóa và kiểm soát truy cập để bảo vệ dữ liệu của bạn khỏi mất mát, truy cập trái phép hoặc rò rỉ.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-white/90">4. Quyền của bạn</h2>
          <p className="leading-relaxed">
            Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân. Hãy liên hệ với chúng tôi qua email để thực hiện các quyền này.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white/90">5. Liên hệ</h2>
          <p className="leading-relaxed">
            Nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách bảo mật, vui lòng liên hệ:{" "}
            <a
              href="mailto:hpaimediatechnology@gmail.com"
              className="text-[#6FFFE9] underline"
            >
              hpaimediatechnology@gmail.com
            </a>
          </p>
        </section>
      </div>

      {/* CTA giống ảnh bạn gửi */}
      <div className="w-full bg-[#0a2540] py-16 px-8 md:px-20 text-center shadow-2xl rounded-t-3xl">
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
  );
}
