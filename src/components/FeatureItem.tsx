"use client"

import React, {useCallback, useState} from "react"
import {featuresProps} from "types"

const FeatureItem = ({
  feature_heading,
  feature_details,
  highlightText,
  isActive,
  ratingNumer = 1,
}: featuresProps) => {
  const [active, setactive] = useState(false)

  const handleActive = useCallback(() => {
    setactive((prev) => !prev)
  }, [])

  return (
    <div className='features__item' onClick={handleActive}>
      <div className='features__icon'>
        <h2
          className={`features__heading text-[1rem] md:text-[1.2rem]  ${
            active || (isActive && "active")
          }`}
        >
          {feature_heading}{" "}
          {highlightText && (
            <span className='rn-highlight'>{highlightText}</span>
          )}
        </h2>{" "}
        {/* <i className={`${faIconSmall} features__icon-small`}></i> */}
        <div className='testimonial__author-rating'>
          {Array(ratingNumer)
            .fill("1")
            .map((_, n) => (
              <i key={n} className='fa fa-star testimonial__rating-icon'></i>
            ))}
        </div>
      </div>
      <div className='features__summary'>
        <p className='features__details text-[0.85rem] md:text-[1rem]'>
          {feature_details}
        </p>
      </div>
    </div>
  )
}

export default FeatureItem
