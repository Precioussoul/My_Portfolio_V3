import Image from "next/image"
import Link from "next/link"
import React, {useEffect} from "react"
import Slider from "react-slick"
import {FiExternalLink} from "react-icons/fi"
import {FaBuildingLock, FaGithub} from "react-icons/fa6"

type NewPortFolioItemProps = {
  isPrivateRepo?: boolean
  images?: string[]
  isFeatured?: boolean
  isDevMode?: boolean
  projectTitle?: string
  projectDescription?: string
  projectLiveUrl?: string
  projectGitHubUrl?: string
  techStacks?: string
  isMobile?: boolean
}

const NewPortfolioItem = ({
  isPrivateRepo,
  images = [
    "/assets/images/portfolio/businessAcc.png",
    "/assets/images/portfolio/businessHero.png",
    "/assets/images/portfolio/Aladdin-web.png",
  ],
  isFeatured,
  isDevMode,
  projectTitle,
  projectGitHubUrl,
  projectDescription,
  projectLiveUrl,
  techStacks,
  isMobile,
}: NewPortFolioItemProps) => {
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
      <div className='relative 2xl:w-[700px] w-[550px] h-full hidden md:block order-2 md:order-1'>
        <Slider {...settings}>
          {images &&
            images.length > 0 &&
            images.map((image, idx) => (
              <div className='portfolio-new__img-item' key={idx}>
                <div className='portfolio-new__item-img-box'>
                  <Image
                    width={500}
                    height={500}
                    unoptimized
                    alt=''
                    src={image}
                    className={"portfolio-new__item-img"}
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top left,#0b1121,#0b112196),url(${
            images.length > 0 && isMobile && images[0]
          })`,
        }}
        className={`portfolio-new__summary order-1 md:order-1 bg-contain
        md:!bg-none`}
      >
        <div className='portfolio-new__heading inline-flex flex-col justify-end items-end w-full p-4'>
          <span className='portfolio-new__heading-subtitle font-semibold  '>
            {isFeatured
              ? "Featured Project"
              : isDevMode
              ? "Under Development"
              : ""}
          </span>
          <h2 className='portfolio-new__heading-title font-bold mt-4 text-2xl'>
            {projectTitle}
          </h2>
        </div>
        <div className='portfolio-new__summary-box'>
          <p className='p-6 leading-6 font-medium text-[0.9rem]'>
            {projectDescription}
          </p>
        </div>

        <div className='inline-flex flex-col justify-end items-end w-full p-4'>
          <div className='flex gap-4 items-center flex-wrap'>
            {techStacks &&
              techStacks.split(",").map((stack, idx) => (
                <p key={idx} className='font-semibold text-[0.9rem] '>
                  {stack}
                </p>
              ))}
          </div>
          <div className='flex gap-3'>
            {projectGitHubUrl ? (
              <Link href={projectGitHubUrl} target={"_blank"}>
                <FaGithub className='project__link-icon' size={40} />
              </Link>
            ) : (
              <FaBuildingLock className='project__link-icon' size={40} />
            )}
            {projectLiveUrl && (
              <Link href={projectLiveUrl} target={"_blank"}>
                <FiExternalLink className='project__link-icon' size={40} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPortfolioItem
