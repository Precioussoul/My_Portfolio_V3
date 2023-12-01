"use client"

import React, {useCallback, useState} from "react"
import {featuresProps} from "types"

const FeatureItem = ({
  feature_heading,
  feature_details,
  highlightText,
  isActive,
  faIconSmall,
}: featuresProps) => {
  const [active, setactive] = useState(false)

  const handleActive = useCallback(() => {
    setactive((prev) => !prev)
  }, [])
  return (
    <div className='features__item' onClick={handleActive}>
      <div className='features__icon'>
        <h2 className={`features__heading ${active || (isActive && "active")}`}>
          {feature_heading}{" "}
          {highlightText && (
            <span className='rn-highlight'>{highlightText}</span>
          )}
        </h2>{" "}
        <i className={`${faIconSmall} features__icon-small`}></i>
      </div>
      <div className='features__summary'>
        <p className='features__details'>{feature_details}</p>
      </div>
    </div>
  )
}

export default FeatureItem
