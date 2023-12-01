import Image from "next/image"
import React, {useEffect} from "react"
import AladImg1 from "../assets/images/portfolio/Aladdin-web.png"
import AladImg2 from "../assets/images/portfolio/Aladdin-Mobile.png"

const NewPortfolioItem = () => {
  useEffect(() => {
    let slides = document.getElementsByClassName("portfolio-new__item-img-box")

    function addActive(slide: any) {
      slide.classList.add("active")
    }

    function removeActive(slide: any) {
      slide.classList.remove("active")
    }

    addActive(slides[0])
    setInterval(function () {
      for (let i = 0; i < slides.length; i++) {
        if (i + 1 == slides.length) {
          addActive(slides[0])
          setTimeout(removeActive, 1000, slides[i])
          break
        }
        if (slides[i].classList.contains("active")) {
          setTimeout(removeActive, 1000, slides[i])
          addActive(slides[i + 1])
          break
        }
      }
    }, 3000)
  }, [])
  return (
    <div className='portfolio-new__item'>
      <div className='relative w-1/2 h-full'>
        <div className='portfolio-new__img-item'>
          <div className='portfolio-new__item-img-box'>
            <Image
              width={500}
              height={500}
              alt=''
              src={AladImg1}
              className={"portfolio-new__item-img"}
            />
          </div>
        </div>
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
