import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Image from '../Image'
import three from "/src/assets/three.png"

const SupportFe = () => {
  return (
    <section className='bg-white py-[100px]'>
        <Container>
            <div className="lg:flex justify-between items-center gap-10">
                <div className="lg:w-5/12 w-full text-center lg:text-left">
                <div className="">
                    <p className='text-black text-[18px] font-medium font-poppins '>24/7 Support</p>
                    <Heading tagName={"h3"} className={"text-[#232536] text-[38px] sm:text-[32px] md:text-[36px]  font-poppins font-semibold py-5"} text={"Working with us, you will be getting 24/7 priority support "} />
                    <p className='text-primary text-[16px] font-poppins font-normal py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                </div>
                <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
                <div className="sm:mt-[50px]">
                  <Image imgSrc={three} />
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SupportFe