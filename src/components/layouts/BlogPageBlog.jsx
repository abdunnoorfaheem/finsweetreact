import React from 'react'
import Container from '../Container'
import Image from '../Image'
import blog1 from '/src/assets/blog1.png'

const BlogPageBlog = () => {
  return (
    <>
    <Container>
        <section id="ourBlog">
        <h3 class="text-primary lg:text-[48px] text-2xl font-poppins font-semibold text-center mb-12">Our Blog</h3>
      <div class="container ">
        <div class="lg:flex lg:mb-8 xl:flex xl:mb-8 md:flex md:mb-8 gap-8 pl-10">
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px] ">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px] ">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px]">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
        </div>
      </div>
      <div class="container mt-6">
        <div class="lg:flex lg:mb-8 md:flex md:mb-8 gap-8 pl-10">
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px]">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px] ">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
          <div class="blogItem lg:w-1/3 font-poppins">
            <Image imgSrc={blog1}/>
          <p class="pt-8 pb-4 text-[14px]">27 jan 2025</p>
          <h4 class="lg:text-2xl font-medium pr-16 text-primary">
            How one Webflow user grew his single person consultancy from $0-100K
            in 14 months
          </h4>
          <p class="pt-4 lg:pb-6 pb-3 lg:text-[16px] text-[14px] text-primary">
            See how pivoting to Webflow changed one person’s sales strategy and
            allowed him to attract
          </p>
          <a href="#" class="text-tertiary lg:text-[18px] text-[16px] sm:mb-5">Read more <i class="fa-solid fa-right-long"></i>  </a>
          </div>
        </div>
      </div>
    </section>
    </Container>
    </>
  )
}

export default BlogPageBlog