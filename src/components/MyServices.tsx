import React from 'react'
import FeatureItem from './FeatureItem'

const MyServices = () => {
  return (
    <section
      className='features-section'
      id='features'
      data-aos='zoom-in'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration='2000'
    >
      <div className='container'>
        <div className='features__header'>
          <p className='features__header-subtitle'>Features</p>
          <h2 className='features__header-title'>Services</h2>
        </div>
        <div className='features__grid'>
          <FeatureItem
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
          <FeatureItem
            faIconBig='fas fa-gears'
            faIconSmall='fas fa-server'
            feature_heading='Full-Stack Development'
            feature_details='Developed REST API endpoints using NodeJS/Express, AWS API Gateway (serverless framework) and also adopt modern GrapQL architecture. Serving the Data through API to Front-End applications.'
          />
          <FeatureItem
            faIconBig='fas fa-atom'
            faIconSmall='fas fa-mobile-alt'
            feature_heading='Mobile Development '
            highlightText='(React-Native)'
            feature_details='Experience in React allow me to have easy transition into mobile development with React-Native. Building UI screen for small applications and setting things ready for back-end Dev.'
          />
          <FeatureItem
            faIconBig='fas fa-cloud'
            faIconSmall='fas fa-rocket'
            feature_heading='CloudNative Development'
            feature_details='Developing cloud-native application with AWS and MERN STACK and leveraging DevOps practices to accelerate software scaling and delivery'
          />
        </div>
      </div>
    </section>
  )
}

export default MyServices
