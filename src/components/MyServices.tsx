"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import React, {useCallback, useContext, useState} from "react"
import FeatureItem from "./FeatureItem"

const MyServices = () => {
  const {featureRef} = useContext(ContentContext)

  return (
    <section className='features-section' ref={featureRef}>
      <div className='container'>
        <div className='features__grid'>
          <div className='features__list'>
            <FeatureItem
              isActive
              faIconBig='fas fa-person-dots-from-line'
              faIconSmall='fas fa-box-tissue'
              feature_heading='Frontend Development'
              feature_details='One on One Consultation with new client to gather requirements and discuss design choices and patterns.'
            />
            <FeatureItem
              faIconBig='fas fa-laptop-code'
              faIconSmall='fas fa-mobile-alt'
              feature_heading='Backend Development'
              feature_details='Manage full-cycle design tasks, handling phases from conception to completion while maintaining guidelines of Responsive Design.'
            />
            <FeatureItem
              faIconBig='fab fa-uikit'
              faIconSmall='fas fa-pen-nib'
              feature_heading='Cloud-Computing'
              feature_details='Front-End Coding as a core is to provide a good feel user-interface to give users a comfortable UX experiences when intereacting with your website.'
            />
          </div>
          <div className='features__introduce'>
            <span className='features__introduce-subHeading'>Introduce</span>
            <div className='features__introduce-wrapper'>
              <h2 className='features__introduce-heading'>
                Every Journey begin with a just start
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
