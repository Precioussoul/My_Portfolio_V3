"use client"

import React from "react"
import {featuresProps} from "types"

const FeatureItem = ({
  feature_heading,
  feature_details,
  highlightText,
  faIconBig,
  faIconSmall,
}: featuresProps) => {
  return (
    <div className='features__item'>
      <span className='features__icon'>
        <i className={`${faIconBig} features__icon-big`}></i>
        <i className={`${faIconSmall} features__icon-small`}></i>
      </span>
      <div className='features__summary'>
        <h2 className='features__heading'>
          {feature_heading}{" "}
          {highlightText && (
            <span className='rn-highlight'>{highlightText}</span>
          )}
        </h2>
        <p className='features__details'>{feature_details}</p>
      </div>
    </div>
  )
}

export default FeatureItem
