"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import React, {useContext} from "react"
import FeatureItem from "./FeatureItem"

const MyServices = () => {
  const {featureRef} = useContext(ContentContext)
  return (
    <section className='features-section' ref={featureRef}>
      <div className='container'>
        {/* <div className='features__header'>
          <p className='features__header-subtitle'>Features</p>
          <h2 className='features__header-title'>Services</h2>
        </div> */}
        <div className='features__grid'>
          <div className='features__list'>
            <FeatureItem
              active
              faIconBig='fas fa-person-dots-from-line'
              faIconSmall='fas fa-box-tissue'
              feature_heading='Requirement Gathering'
              feature_details='One on One Consultation with new client to gather requirements and discuss design choices and patterns.'
            />
            <FeatureItem
              faIconBig='fas fa-laptop-code'
              faIconSmall='fas fa-mobile-alt'
              feature_heading='Responsive Web-Design'
              feature_details='Manage full-cycle design tasks, handling phases from conception to completion while maintaining guidelines of Responsive Design.'
            />
            <FeatureItem
              faIconBig='fab fa-uikit'
              faIconSmall='fas fa-pen-nib'
              feature_heading='UI Improvement'
              feature_details='Front-End Coding as a core is to provide a good feel user-interface to give users a comfortable UX experiences when intereacting with your website.'
            />
          </div>
          <div className=''></div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
