'use client'
import React, { useContext } from 'react'
import TestimonialItem from './TestimonialItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Keyboard } from 'swiper'
import { ContentContext } from '@/contexts/ScrollContext'

const Testimonial = () => {
  const { testimonialRef } = useContext(ContentContext)
  return (
    <section
      className='testimonial__section'
      id='Testimonial'
      ref={testimonialRef}
      data-aos='flip-left'
      data-aos-duration='2000'
      data-aos-delay='300'
      data-aos-easing='ease-out-cubic'
    >
      <div className='container testimonial__container'>
        <div className='testimonial__header'>
          <p className='testimonial__header-subtitle'>
            Hear from those that I have worked with
          </p>
          <h3 className='testimonial__header-title'>Testimonials</h3>
        </div>

        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            dynamicBullets: true,
          }}
          keyboard
          modules={[Pagination, Keyboard]}
          className='mySwiper'
        >
          <SwiperSlide>
            <TestimonialItem
              author_imageUrl='/assets/images/testimonial/rec7.jpeg'
              author_speech='
                We at @Connou have been collaborating with Sofi for a number of months and we highly recommend him. 
                Sofi possesses excellent qualities such as the ability to work independently, a deep understanding of various technologies, quick learning and drive. These attributes make him an exceptional fit for a dynamic and agile start-up.
                The quality that stands out the most is his strong motivation and passion for software engineering.'
              author_name='Mike Mock'
              author_position='CTO - Connou'
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialItem
              author_imageUrl='/assets/images/testimonial/rec6.jpeg'
              author_speech='
                I am writing to highly recommend Sofi for any web development project. Sofi recently developed our company website and the end result exceeded our expectations.
From the beginning, Sofi demonstrated a strong understanding of our needs and was able to translate them into a functional and visually appealing website.  He is also a great communicator and was able to manage the project effectively, ensuring that deadlines were met and that the final product was of the highest quality.
I would not hesitate to work with Sofi again and I strongly recommend him for any web development project. Please do not hesitate to contact me if you require any further information.
                '
              author_name='Lukas Georg Kromminga'
              author_position='CEO - Connou'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech="As a UX designer, I've worked with Sofiyullah to create Connou's new website. From my experience, Sofiyulla is a tireless and highly motivated professional, always willing to learn and improve his skills. It was a pleasure to work and learn together."
              author_name='Hernan Biz'
              author_position='UI/UX Designer - Connou'
              author_imageUrl='/assets/images/testimonial/rec5.jpeg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_imageUrl='/assets/images/testimonial/BeeSpeed.jpeg'
              author_speech='
                          Always available to help, incredibly proficient, hits
                          deadlines without fail, hard working and trustworthy.
                          In my experience, no project is too much trouble, and
                          with Sofiyullah you really get a rare entity – someone
                          that can simplify what can be a very complex at times
                          and provide a valueable opinion that best fit. I can
                          recommend his services without hesitation to anybody.
                        '
              author_name='Okunade Bolaji'
              author_position='CEO - BeeSpeed'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech='I worked as a ux designer with Sofiyullah on a web development project and he is a joy to work with. I was surprised by how quickly he understood the deliverables and his perfect implementation of my designs. He knows his onions and is an asset to any team'
              author_name='Abdullah Adeniyi Arala'
              author_position='UI/UX Designer - MyComDAO'
              author_imageUrl='/assets/images/testimonial/rec8.jpeg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech='Sofiyullah is a multi talented, multi skilled developer. I have had the privilege to work with him on the first luluwebsite. He has provided us with his time, advice and expertise professionally. 
Delivery was neat and an exact implementation of what our design team prototyped. Will work with and recommend him anytime.'
              author_name='Toluwabori Oloba'
              author_position='Founder -  MyComDAO'
              author_imageUrl='/assets/images/testimonial/rec4.jpeg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech="Sofiyullah Abdullah is one of the best developer I've seen, he's my personal mentor, very professional and hardworking and willing to learn. I'll personally recommend him for any Frontend development role. He's always been a superb developer."
              author_name='Abdul-Rasheed Wahab'
              author_position='Sofware Developer - ALX-Africa'
              author_imageUrl='/assets/images/testimonial/rec1.jpeg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech='Sofiyullah is highly enthusiastic, motivated and self-driven. Sofiyullah is as well selfless and team driven. He is at all time, willing to share his knowledge and as well encourage his peers through pep talks.'
              author_name='Abdulmuizz AbdulMalik'
              author_position='Software Developer - ALX-Africa'
              author_imageUrl='/assets/images/testimonial/rec2.jpeg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              author_speech='Sofiyullah is well versed with problem solving skills, he is a good communicator who knows why things work the way they do. His knowledge of cloud tools makes him stand out among peers and he is a good team player.'
              author_name='Kabeer Abiodun'
              author_position='Software Engineer - ALX-T'
              author_imageUrl='/assets/images/testimonial/rec3.jpeg'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
