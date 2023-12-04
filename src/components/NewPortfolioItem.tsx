import Image from "next/image"
import React, {useEffect} from "react"
import Slider from "react-slick"

const NewPortfolioItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }

  return (
    <div className='portfolio-new__item'>
      <div className='relative w-[700px] h-full'>
        <Slider {...settings}>
          <div className='portfolio-new__img-item'>
            <div className='portfolio-new__item-img-box'>
              <Image
                width={500}
                height={500}
                unoptimized
                alt=''
                src={"/assets/images/portfolio/Aladdin-web.png"}
                className={"portfolio-new__item-img"}
              />
            </div>
          </div>
          <div className='portfolio-new__img-item'>
            <div className='portfolio-new__item-img-box'>
              <Image
                width={500}
                height={500}
                unoptimized
                alt=''
                src={"/assets/images/portfolio/businessHero.png"}
                className={"portfolio-new__item-img"}
              />
            </div>
          </div>
          <div className='portfolio-new__img-item'>
            <div className='portfolio-new__item-img-box'>
              <Image
                width={500}
                height={500}
                unoptimized
                alt=''
                src={"/assets/images/portfolio/businessAcc.png"}
                className={"portfolio-new__item-img"}
              />
            </div>
          </div>
        </Slider>
      </div>
      <div className='portfolio-new__summary'>
        <div className='portfolio-new__heading inline-flex flex-col justify-end items-end w-full p-4'>
          <span className='portfolio-new__heading-subtitle font-semibold  '>
            Featured Project
          </span>
          <h2 className='portfolio-new__heading-title font-bold mt-4 text-2xl'>
            Aladdin Business
          </h2>
        </div>
        <div className='portfolio-new__summary-box'>
          <p className='p-6 leading-6 font-medium text-[0.9rem]'>
            A fintech web-app that allow business of all kind that access to
            banking services at the business-level, international payment
            solutions and beyonds. Available soon. currently in development.
          </p>
        </div>

        <div className='inline-flex flex-col justify-end items-end w-full p-4'>
          <div className='flex gap-4 items-center'>
            {"React, Redux, Chakra UI, Typescript, Internal APIs,"
              .split(",")
              .map((stack, idx) => (
                <p key={idx} className='font-semibold text-[0.9rem] '>
                  {stack}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPortfolioItem
