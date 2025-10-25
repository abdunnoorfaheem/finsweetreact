import React from 'react'
import Container from '../../Container'
import { FaArrowRightLong } from "react-icons/fa6";
import thum1 from '../mehedi_img/thumb1.png'
import thum2 from '../mehedi_img/thumb2.png'
import thum3 from '../mehedi_img/thumb3.png'
import thum4 from '../mehedi_img/thumb4.png'
import thum5 from '../mehedi_img/thumb5.png'
import thum6 from '../mehedi_img/thumb6.png'





const OurWork = () => {
  return (
    <>
   <section>
  <Container>
    {/* ==== Filter Tabs ==== */}
    <div className="w-full md:w-8/12 lg:w-6/12 mx-auto">
      <div className="py-[30px]">
        <ul className="flex flex-wrap gap-3 md:gap-6 justify-center text-center">
          <li className="text-primary hover:text-tertiary duration-300 ease-in-out text-[14px] md:text-[16px] cursor-pointer">
            All
          </li>
          <li className="text-primary hover:text-tertiary duration-300 ease-in-out text-[14px] md:text-[16px] cursor-pointer">
            UI Design
          </li>
          <li className="text-primary hover:text-tertiary duration-300 ease-in-out text-[14px] md:text-[16px] cursor-pointer">
            Webflow Design
          </li>
          <li className="text-primary hover:text-tertiary duration-300 ease-in-out text-[14px] md:text-[16px] cursor-pointer">
            Figma Design
          </li>
        </ul>
      </div>
    </div>
  </Container>
</section>

<section>
  <Container>
    {/* ==== Portfolio Row 1 ==== */}
    <div className="flex flex-col md:flex-row gap-6 pb-[40px]">
      <div className="w-full md:w-6/12">
        <div>
          <img src={thum1} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 1
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-6/12">
        <div>
          <img src={thum2} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 2
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

    {/* ==== Portfolio Row 2 ==== */}
    <div className="flex flex-col md:flex-row gap-6 pb-[40px]">
      <div className="w-full md:w-6/12">
        <div>
          <img src={thum3} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 3
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-6/12">
        <div>
          <img src={thum4} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 4
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

    {/* ==== Portfolio Row 3 ==== */}
    <div className="flex flex-col md:flex-row gap-6 pb-[40px]">
      <div className="w-full md:w-6/12">
        <div>
          <img src={thum5} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 5
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-6/12">
        <div>
          <img src={thum6} alt="" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h3 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[38px] text-primary pt-[20px]">
            Template 6
          </h3>
          <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px]">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <div className="flex gap-4 items-center pt-[20px]">
            <a className="text-[14px] md:text-[16px] text-primary font-poppins" href="#">
              View Portfolio
            </a>
            <FaArrowRightLong className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

    </>
  )
}

export default OurWork