import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Four from "/src/assets/four.png"
import Heading from '../Heading'

const DeliveryFe = () => {
  return (
    <section className='bg-[rgba(163,126,31,0.1)] py-[100px]'>
        <Container>
            <div className="lg:flex justify-between items-center gap-10">
                <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
                <div className="">
                    <Image imgSrc={Four} />
                </div>
                </div>
                <div className="lg:w-5/12 w-full text-center lg:text-left">
                <div className="sm:mt-[50px]">
                   <p className='text-black text-[18px] font-medium font-poppins '>Quick Delivery</p>
                    <Heading tagName={"h3"} className={"text-[#232536] text-[38px] sm:text-[32px] md:text-[36px]  font-poppins font-semibold py-5"} text={"Guranteed 1 week delivery for standard five pager website "} />
                    <p className='text-primary text-[16px] font-poppins font-normal py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> 
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default DeliveryFe