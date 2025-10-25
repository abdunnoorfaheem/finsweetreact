import React from 'react'
import Image from '../Image'
import Two from "/src/assets/two.png"
import Heading from '../Heading'
import Container from '../Container'

const RevisionFe = () => {
  return (
    <section className='bg-[#F4F6FC] py-[100px]'>
        <Container>
            <div className="lg:flex justify-between items-center gap-10">
                <div className="lg:w-5/12 w-full flex justify-center lg:justify-end ">
                <div className="">
                    <Image imgSrc={Two} />
                </div>
                </div>
                <div className="lg:w-5/12 w-full text-center lg:text-left">
                    <div className="sm:mt-[50px]">
                    <p className='text-black text-[18px] font-medium font-poppins '>Free Revision Rounds</p>
                    <Heading tagName={"h3"} className={"text-[#232536] text-[38px] sm:text-[32px] md:text-[36px]  font-poppins font-semibold py-5"} text={"Get free Revisions and one week of free maintenance "} />
                    <p className='text-primary text-[16px] font-poppins font-normal py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default RevisionFe