import React, { useEffect } from "react";
import AOS from "aos";

export default function Content() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="info" className="relative py-sectionMB md:py-section">
      <div className="page-container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-[24px] md:text-[36px] font-bold text-[#0B1347] mb-[30px] md:mb-[60px]"
        >
          NỘI DUNG <br />
          <span className="title-border --blue">SEMINAR</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative md:h-[388px] flex items-center justify-center text-white py-[30px] px-[30px]"
          >
            <img
              className="absolute inset-0 z-[-1] h-full w-full object-cover rounded-[15px]"
              src="/images/content-1.png"
              alt=""
            />
            <div>
              <h3 className="text-[24px] md:text-[36px] font-extrabold uppercase text-center leading-[1]">
                Phần 1
              </h3>
              <h4 className="text-[18px] md:text-[24px] font-semibold text-center">
                Tìm hiểu về Cơ chế Thị trường
              </h4>
              <div className="mt-[20px] font-medium">
                <p>
                  - Purpose: Tầm nhìn - Sứ mệnh - Giá trị Văn hóa của Doanh
                  nghiệp.
                </p>
                <p>- DISC - Thấu hiểu bản thân & Xây dựng đội ngũ.</p>
                <p>
                  - Motivators - Khai vấn 7 động lực của Vô thức quyết định 85%
                  sự thành công.
                </p>
                <p>
                  - Generating Cashflow - Công thức tạo ra dòng tiền cho doanh
                  nghiệp.
                </p>
                <p>
                  - Streetwise Marketing - Công thức tạo ra USP & điểm độc nhất.
                </p>
                <p>
                  - Power Team - Cách tạo ra đòn bẩy chuỗi cung ứng, tạo ra
                  nguồn khách hàng tiềm năng vô tận.
                </p>
                <p>- SaleRICH - Xây dựng phương pháp bán hàng.</p>
                <p>- 6 bước xây dựng doanh nghiệp thành công.</p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative h-[388px] flex items-center justify-center text-white px-[30px]"
          >
            <img
              className="absolute inset-0 z-[-1] h-full w-full object-cover rounded-[15px]"
              src="/images/content-2.png"
              alt=""
            />
            <div>
              <h3 className="text-[24px] md:text-[36px] font-extrabold uppercase text-center leading-[1]">
                Phần 2
              </h3>
              <h4 className="text-[18px] md:text-[24px] font-semibold text-center">
                Tìm hiểu về Cơ chế Vốn
              </h4>
            </div>
          </div>
        </div>
      </div>
      <img
        className="md:block hidden absolute left-0 bottom-[100px] z-[-2]"
        srcSet="/icons/line-icon1.png 2x"
        alt=""
      />
      <img
        className="md:block hidden absolute right-0 top-[40px]"
        srcSet="/icons/line-icon2.png 2x"
        alt=""
      />
    </section>
  );
}
