import React from 'react'
import Image from '../Image'
import bannerBlog from '/src/assets/blogBanner.png'
import Container from '../Container'

const BannerBlog = () => {
  return (
    <>
    <Container>
        <section id="blogBanner">
      <div class=" text-center pt-16 pb-8">
        <h1
          class="text-primary lg:text-[48px] text-[16px] lg:px-[220px] font-poppins font-semibold md:text-3xl "
        >
          A UX Case Study on Creating a Studious Environment for Students
        </h1>
        <p class="text-primary text-[12px] lg:text-[16px] pb-2.5">Andrew Jonson Posted on 27th January 2021</p>
        <Image imgSrc={bannerBlog}/>
        <p class="lg:px-[300px] lg:pt-12 pt-6 pb-4 text-primary text-[16px] lg:text-[18px]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <a href="#" class="text-tertiary lg:text-[18px]">Read more</a>
      </div>
    </section>
    </Container>
    </>
  )
}

export default BannerBlog