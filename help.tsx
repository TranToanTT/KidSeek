import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpPage() {
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
        .help-gradient {
          background: linear-gradient(270deg, #1cab9d, #148f77, #25bfa3, #118567);
          background-size: 800% 800%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      {/* Vùng nội dung chính */}
      <div className="help-gradient text-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-8">Trợ giúp & Câu hỏi thường gặp</h1>

          <Accordion.Root type="multiple" className="w-full space-y-4">
            {faqList.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border border-white/30 rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-md"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full justify-between items-center px-5 py-4 text-left font-semibold text-white hover:bg-white/10 transition">
                    {faq.question}
                    <ChevronDown className="transition-transform duration-200 AccordionChevron" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-4 pt-2 text-white/90 leading-relaxed">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* Phần CTA giống hình bạn gửi */}
      <div className="w-screen bg-[#0a2540] px-6 pt-24 pb-28 text-white text-center rounded-t-3xl shadow-2xl">
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
    </>
  );
}

const faqList = [
  {
    question: "1. Tôi cần làm gì để bắt đầu sử dụng H-PAI?",
    answer:
      "Bạn chỉ cần truy cập vào nền tảng của chúng tôi, tạo tài khoản nếu cần, và bắt đầu khám phá các tính năng như AI hỗ trợ học tập, tạo nội dung, chatbot thông minh và hơn thế nữa.",
  },
  {
    question: "2. Dữ liệu cá nhân của tôi có được bảo mật không?",
    answer:
      "Chúng tôi tuân thủ nghiêm ngặt các chính sách bảo mật. Mọi thông tin cá nhân của bạn sẽ được mã hóa và không chia sẻ với bên thứ ba nếu không có sự cho phép rõ ràng từ bạn.",
  },
  {
    question: "3. Làm sao để liên hệ đội ngũ kỹ thuật?",
    answer: (
      <>
        Gửi email đến{" "}
        <a
          href="mailto:hpaimediatechnology@gmail.com"
          className="text-[#6FFFE9] underline"
        >
          hpaimediatechnology@gmail.com
        </a>{" "}
        hoặc gọi hotline{" "}
        <a href="tel:0868790365" className="text-[#6FFFE9] underline">
          0868 790 365
        </a>.
      </>
    ),
  },
  {
    question: "4. Tôi có thể đề xuất tính năng mới không?",
    answer:
      "Chắc chắn rồi! Hãy gửi đề xuất tính năng mới cho chúng tôi qua trang Liên hệ. Chúng tôi luôn trân trọng ý kiến đóng góp của người dùng.",
  },
];
