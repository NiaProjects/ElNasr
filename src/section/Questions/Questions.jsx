import React, { useState } from "react";
import img from "../../assets/images/Image-21-1.png.png";
import svgheart from "../../assets/images/svgheart.svg";
import svgface from "../../assets/images/svgface.svg";
import svgline from "../../assets/images/svgline.svg";
import { useTranslation } from "react-i18next";


export default function Questions() {

  const { t } = useTranslation("global");
  const faqs = t("questions", { returnObjects: true }).faq;
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-sec py-14">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative rounded-lg">
            <img src={svgline} className="absolute top-1/4 -start-28" alt="" />
            <div className="absolute top-56 right-6 w-20 h-20 flex items-center justify-center shadow-lg bg-white rounded-full">
              <img src={svgheart} alt="" />
            </div>
            <div className="flex gap-8 items-center absolute bg-white p-6 shadow-lg rounded-xl top-96 left-2">
              <img src={svgface} alt="" />
              <div>
                <h6 className="text-3xl font-bold text-sec">84k+</h6>
                <p className="text-gray-400 text-lg">مرضى سعداء</p>
              </div>
            </div>
            <img src={img} className="w-full" alt="" />
          </div>

          <div className="flex items-center w-full">
            <div className="w-full">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-5 text-gray-500 bg-white hover:bg-gray-100 font-medium"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="flex items-center">{faq.question}</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="p-5 bg-blue-100 text-sec font-semibold">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
