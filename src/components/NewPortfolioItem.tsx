import Image from "next/image"
import Link from "next/link"
import React, {useEffect} from "react"
import Slider from "react-slick"
import {FiExternalLink} from "react-icons/fi"
import {FaBuildingLock, FaGithub} from "react-icons/fa6"

export type NewPortFolioItemProps = {
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
  toRight?: boolean
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
  toRight,
}: NewPortFolioItemProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  }

  return (
    <div className='portfolio-new__item rounded-md'>
      <div
        style={{
          backgroundImage: `linear-gradient(to top left,#0b1121,#0b112196),url(${
            images.length > 0 && images[0]
          })`,
        }}
        className={`portfolio-new__summary order-1 md:order-1 bg-contain
         `}
      >
        <div
          className={`portfolio-new__heading inline-flex flex-col   ${
            toRight ? "justify-start items-start" : "justify-end items-end"
          } w-full p-4`}
        >
          <span className='portfolio-new__heading-subtitle font-semibold  '>
            {isFeatured ? "Featured Project" : isDevMode ? "Coming soon" : ""}
          </span>
          <h2 className='portfolio-new__heading-title font-bold mt-4 text-lg'>
            {projectTitle}
          </h2>
        </div>
        <div className={`portfolio-new__summary-box ${toRight && " "}`}>
          <p className='p-6 leading-6 font-medium text-[0.9rem]'>
            {projectDescription}
          </p>
        </div>

        <div
          className={`inline-flex flex-col w-full p-4  ${
            toRight ? "justify-start items-start" : "justify-end items-end"
          } `}
        >
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
              isPrivateRepo && (
                <FaBuildingLock className='project__link-icon' size={40} />
              )
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
