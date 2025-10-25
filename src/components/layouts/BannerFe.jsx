import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Button from '../Button'
import Banner from "/src/assets/banner_right.png"
import Heading from '../Heading'
import  logo_one from "/src/assets/logo_one.png"
import logo_two from "/src/assets/logo_two.png"
import logo_three from "/src/assets/logo_three.png"
import logo_four from "/src/assets/logo_four.png"
import logo_five from "/src/assets/logo_five.png"


const BannerFe = () => {
  return (
    <>

    <section className='bg-quaternary py-[100px]'>
    
        <Container>
          <div className="lg:flex lg:flex-wrap justify-between items-center gap-10">
            <div className="w-5/12 lg:w-6/12 sm:w-full">
          <div className="">
            <Heading tagName ={"h2"} className ={"font-poppins font-semibold text-[52px] lg:text-[40px] md:text-[32px] sm:text-[24px]  text-white  sm:pr-0  sm:text-left pr-10"} text={"All the features you need"} />
            <p className='font-poppins font-medium text-[16px] text-white py-6 sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button className={"py-4 px-10 border border-[rgba(244,246,252,0.2)] text-white hover:bg-quinary hover:text-primary transition ease-in-out duration-300"} text={"View Pricing"}/>           
          </div>
          </div>
          <div className="w-5/12 lg:w-5/12 sm:w-full flex justify-center lg:justify-end">
          <div className="sm:mt-[50px]">
           <Image imgSrc={Banner} />
           
          </div>
          </div>
          </div>

        </Container>
    </section>



    {/* banner part end */}

    {/* logo part start */}
    <section className='bg-white py-[100px]'>
      <Container>
         <div className="lg:flex lg:flex-wrap justify-between items-center gap-10">
          <div className="w-2/12 md:w-3/12 sm:w-full sm:text-left">
          <Heading tagName={"h3"}  className={"text-primary font-poppins text-[38px] md:text-[32px] sm:text-[24px] font-semibold"} text={"100.000+"}/>
          <p className='text-primary font-poppins text-[16px] font-normal'>Figma Users</p>
         </div>
         <div className="w-9/12 md:w-8/12 sm:w-full">
         <div className="flex flex-wrap justify-between items-center sm:justify-start gap-6 sm:gap-8 sm:mt-[30px]">
          <Image imgSrc={logo_one} />
          <Image imgSrc={logo_two} />
          <Image imgSrc={logo_three} />
          <Image imgSrc={logo_four}  />
          <Image imgSrc={logo_five}  />
         </div>
         </div>
         </div>
      </Container>
    </section>


    {/* logo part end */}
    </>

  )
}

export default BannerFe