"use client"

import React, {useCallback, useState} from "react"
import {FaCodeCompare} from "react-icons/fa6"
import {featuresProps} from "types"

const FeatureItem = ({feature_heading, feature_details, highlightText, isActive, ratingNumer = 1, Icon = FaCodeCompare}: featuresProps) => {
  const [active, setactive] = useState(false)

  const handleActive = useCallback(() => {
    setactive((prev) => !prev)
  }, [])

  return (
    <div className='features__item' onClick={handleActive}>
      <div className='features__icon'>
        <h2 className={`features__heading text-[1rem] md:text-[1.2rem]  ${active || (isActive && "active")}`}>
          {feature_heading} {highlightText && <span className='rn-highlight'>{highlightText}</span>}
        </h2>{" "}
        <div className='testimonial__author-rating'>{<Icon size={28} className='testimonial__rating-icon' />}</div>
      </div>
      <div className='features__summary'>
        <p className='features__details text-[0.8rem] md:text-[0.85rem]'>{feature_details}</p>
      </div>
    </div>
  )
}

export default FeatureItem
