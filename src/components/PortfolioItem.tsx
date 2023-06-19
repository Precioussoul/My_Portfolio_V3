"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {portfolioItemProps} from "types"

const PortfolioItem = ({
  project_image_url,
  projectlink,
  project_detailsText,
  projectTechStack,
  project_category,
  project_name,
  projectGithubLink,
}: portfolioItemProps) => {
  return (
    <div className='portfolio__item'>
      <div className='portfolio__image-box'>
        <Link href={projectlink} target='_blank'>
          <Image
            src={project_image_url}
            alt='Portfolio image'
            className='portfolio__image'
            width={500}
            height={500}
          />
        </Link>

        <div className='portfolio__text-detail'>
          <p className='portfolio-text'>{project_detailsText}</p>
          <br />
          <p className='portfolio-text'>
            <span className='highlighted bold'>Built with :</span>{" "}
            {projectTechStack}{" "}
          </p>
        </div>
      </div>
      <div className='portfolio__details'>
        <div className='project__category'>
          <Link href='#' target='_blank' className='project__category-name'>
            {project_category}
          </Link>
          <span className='project__stack-icon'>
            <i className='fab fa-react'></i>
            <i className='fab fa-css3-alt'></i>
            <i className='fab fa-sass'></i>
          </span>
        </div>
        <div className='project__name-box'>
          <Link href={projectlink} target='_blank' className='project__name'>
            {project_name}{" "}
          </Link>
        </div>
        <div className='project__link-box'>
          <Link href={projectlink} target={"_blank"}>
            {" "}
            <i className='fas fa-location-arrow project__link-icon'></i>
          </Link>
          {projectGithubLink ? (
            <Link href={projectGithubLink} target='_blank'>
              <i className='fab fa-github fa-2x project__link-icon'></i>
            </Link>
          ) : (
            <i className='fas fa-user-lock fa-2x project__link-icon'></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
