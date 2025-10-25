import React from 'react'
import Container from '../../Container'

const CtaSection = () => {
  return (
    <>
   <section className="py-[60px] md:py-[100px] bg-white">
  <Container>
    <div className="w-full md:w-8/12 lg:w-6/12 mx-auto text-center px-4">
      {/* Heading */}
      <h3 className="font-poppins font-bold text-[28px] md:text-[36px] lg:text-[48px] text-primary leading-snug">
        Let's build something great together
      </h3>

      {/* Description */}
      <p className="text-[14px] md:text-[16px] text-primary font-poppins pt-[20px] md:pt-[30px] leading-relaxed">
        Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet,
        scelerisque cursus purus.
      </p>

      {/* Button */}
      <div className="pt-[25px] md:pt-[30px]">
        <button
          className="py-[10px] px-[25px] md:px-[35px] rounded-[50px] bg-quinary text-primary 
          font-poppins font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </div>
  </Container>
</section>

    </>
  )
}

export default CtaSection