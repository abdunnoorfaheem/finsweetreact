import React, { useState } from 'react'
import Container from '../Container'
import { FaArrowRightLong } from 'react-icons/fa6'


const fff = [
    {
        id: 1,
        question: "How much time does it take?",
        answer:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis maxime, error, eveniet iusto, animi voluptas veritatis doloribus dolores molestias quisquam totam nobis suscipit ratione. Iusto eius aspernatur quia reprehenderit.",
    },
    {
        id: 2,
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis maxime, error, eveniet iusto, animi voluptas veritatis doloribus dolores molestias quisquam totam nobis suscipit ratione. Iusto eius aspernatur quia reprehenderit.",
    },
    {
        id: 3,
        question: "How do you communicate?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis maxime, error, eveniet iusto, animi voluptas veritatis doloribus dolores molestias quisquam totam nobis suscipit ratione. Iusto eius aspernatur quia reprehenderit.",
    },
    {
        id: 4,
        question: "I have a bigger project. Can you handle it?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis maxime, error, eveniet iusto, animi voluptas veritatis doloribus dolores molestias quisquam totam nobis suscipit ratione. Iusto eius aspernatur quia reprehenderit.",
    },
    {
        id: 5,
        question: "What is your class naming convention?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis maxime, error, eveniet iusto, animi voluptas veritatis doloribus dolores molestias quisquam totam nobis suscipit ratione. Iusto eius aspernatur quia reprehenderit.",
    },
];


const Faq = () => {
       const [openIndex, setOpenIndex] = useState(1);
    
        const toggle = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
  return (
     <section>
                <Container>
                    <div className="bg-white lg:py-[120px] py-10">
                        <div className="lg:flex">
                            <div className="lg:w-2/6">
                                <div className="">
                                    <h2 className="text-[#282938] lg:text-[38px] text-[22px] font-semibold font-pops">Frequently asked questions</h2>
                                    <div className="lg:mt-[16px] flex items-center ">
                                        <a href="#" className="text-[#2405F2] lg:text-[18px] text-[13px] font-medium font-pops flex ">Contact us for more info <FaArrowRightLong className="text-[#2405F2] lg:ml-4 lg:mt-2  ml-2 mt-1 inline-block " /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-4/6 w-full">
                                <div className="lg:mt-0 mt-7 space-y-4">
                                    {fff.map((Faq, index) => (
                                        <div key={Faq.id} className="border-b pb-4">
                                            <button
                                                onClick={() => toggle(index)}
                                                className="w-full flex items-center justify-between text-left"
                                            >
                                                <span className="text-indigo-600 font-medium lg:w-8 w-7">
                                                    {Faq.id.toString().padStart(2, "0")}
                                                </span>
                                                <span className="flex-1 text-gray-900 font-semibold lg:text-lg text-sm">
                                                    {Faq.question}
                                                </span>
                                                <span className=" text-xl">
                                                    {openIndex === index ? "✕" : "+"}
                                                </span>
                                            </button>
    
                                            {openIndex === index && Faq.answer && (
                                                <div className="mt-3 pl-8 text-gray-600 text-sm leading-relaxed lg:w-[850px] w-[370px]">
                                                    {Faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
    
                    </div>
                </Container>
            </section>
  )
}

export default Faq
