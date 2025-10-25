import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import icon_one from "/src/assets/icon_one.png"
import Image from '../Image'
import icon_two from "/src/assets/icon_two.png"
import icon_three from "/src/assets/icon_three.png"


const BenefitsFe = () => {
  return (
   <section className='py-[50px] bg-white'>
    <Container>
      <div className="">
        <Heading tagName={"h2"} className={"text-primary font-poppins font-semibold text-[48px] lg:text-[40px] md:text-[32px] sm:text-[24px] text-center lg:pl-[200px] lg:pr-[200px] max-w-[900px] mx-auto"}  text={"The benefits of working with our team"}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[50px]">
          <div className="">
        <div className="border bg-[#F4F6FC]  overflow-hidden shadow-sm hover:shadow-md transition duration-300 ease-in-out border-none h-full">
          <div className="p-6">
            <Image imgSrc={icon_one} />
            <Heading tagName={"h6"} className={"text-primary font-poppins font-medium text-[24px] sm:text-[20px] py-4"} text={"Customize with ease"} />
            <p className="text-primary font-poppins font-normal text-[16px] lg:pr-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        </div>
        <div className="">
        <div className="border bg-[#F4F6FC]  overflow-hidden shadow-sm hover:shadow-md transition duration-300 ease-in-out border-none h-full">
          <div className="p-6">
            <Image imgSrc={icon_two} />
            <Heading tagName={"h6"} className={"text-primary font-poppins font-medium text-[24px] sm:text-[20px] py-4"} text={"Perfectly Responsive"} />
            <p className="text-primary font-poppins font-normal text-[16px] lg:pr-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        </div>
        <div className="">
        <div className="border bg-[#F4F6FC]  overflow-hidden shadow-sm hover:shadow-md transition duration-300 ease-in-out border-none h-full">
          <div className="p-6">
            <Image imgSrc={icon_three} />
            <Heading tagName={"h6"} className={"text-primary font-poppins font-medium text-[24px] sm:text-[20px] py-4"} text={"Friendly Support"} />
            <p className="text-primary font-poppins font-normal text-[16px] lg:pr-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        </div>
      </div>
    </Container>
   </section>






  )
}

export default BenefitsFe