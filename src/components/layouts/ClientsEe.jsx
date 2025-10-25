import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Image from '../Image'
import One from "/src/assets/one.png"

const ClientsEe = () => {
  return (
    <section className='py-[100px] bg-white'>
        <Container>
            <div className=" lg:flex items-center justify-between gap-10">
                <div className="lg:w-5/12 w-full text-center lg:text-left">
                <div className="">
                    <p className='text-black text-[18px] font-medium font-poppins '>Use Client-first</p>
                    <Heading tagName={"h3"} className={"text-[#232536] text-[38px] sm:text-[32px] md:text-[36px]  font-poppins font-semibold py-5"} text={"Top agencies and freelancers around the world use Client-first "} />
                    <p className='text-primary text-[16px] font-poppins font-normal py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                </div>
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
                <div className="sm:mt-[50px]">
                    <Image imgSrc={One} />
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ClientsEe