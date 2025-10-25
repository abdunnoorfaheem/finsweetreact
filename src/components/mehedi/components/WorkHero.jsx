import React from 'react'
import Container from '../../Container'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const WorkHero = () => {
  return (
    <>
   <section className="bg-[#F4F6FC] py-[80px] md:py-[100px]">
  <div className="container mx-auto px-4">
    <div className="max-w-[700px] mx-auto text-center">
      {/* Small Title */}
      <p className="text-[14px] md:text-[16px] text-primary font-poppins mb-2">
        What we created
      </p>

      {/* Heading */}
      <h3 className="text-[28px] md:text-[40px] lg:text-[48px] text-primary font-bold mb-4">
        Our Work Portfolio
      </h3>

      {/* Description */}
      <p className="text-[14px] md:text-[16px] text-primary font-poppins leading-relaxed">
        We help teams create great digital products by providing them with tools and technology 
        to make the design-to-code process universally accessible.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-6 text-[18px] md:text-[20px] text-primary">
        <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors duration-200" />
        <FaTwitter className="cursor-pointer hover:text-sky-400 transition-colors duration-200" />
        <AiFillInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" />
        <FaLinkedin className="cursor-pointer hover:text-blue-700 transition-colors duration-200" />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default WorkHero