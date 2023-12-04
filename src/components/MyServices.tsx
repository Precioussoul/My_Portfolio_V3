"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import Image from "next/image"
import React, {useCallback, useContext, useState} from "react"
import FeatureItem from "./FeatureItem"

const MyServices = () => {
  const {featureRef} = useContext(ContentContext)

  return (
    <section className='features-section' ref={featureRef}>
      <div className='container'>
        <div className='features__grid'>
          <div className='features__list order-2 md:order-1'>
            <FeatureItem
              isActive
              ratingNumer={5}
              faIconBig='fas fa-person-dots-from-line'
              faIconSmall='fas fa-box-tissue'
              feature_heading='Frontend Development'
              feature_details='One on One Consultation with new client to gather requirements and discuss design choices and patterns.'
            />
            <FeatureItem
              faIconBig='fas fa-laptop-code'
              faIconSmall='fas fa-mobile-alt'
              ratingNumer={3}
              feature_heading='Backend Development'
              feature_details='Manage full-cycle design tasks, handling phases from conception to completion while maintaining guidelines of Responsive Design.'
            />
            <FeatureItem
              faIconBig='fab fa-uikit'
              faIconSmall='fas fa-pen-nib'
              feature_heading='Cloud-Computing'
              ratingNumer={2}
              feature_details='Front-End Coding as a core is to provide a good feel user-interface to give users a comfortable UX experiences when intereacting with your website.'
            />
          </div>
          <div className='features__introduce order-1 md:order-2'>
            <span className='features__introduce-subHeading'>About Me</span>
            <div className='features__introduce-wrapper'>
              <h2 className='features__introduce-heading'>
                The Journey began with a &quot;just start&quot; Mindset.
              </h2>
            </div>
            <div className='Summary__Details'>
              <div className='Summary__preview-text'>
                <p>
                  Started my software engineering journey (self-taught) 3 years
                  ago while in majoring/studying in computer engineering in
                  polytechnic. My passion for coding/programming exceeded my
                  passion for computer hardware repairs. And since then,
                  I&apos;ve taken a lot of courses, gained a lot of experience
                  and work remotely for startups, direct clients and
                  collaborated with talented people to build saas products.
                  Outside of work, I spend most of my time inside (introvert)
                  doing one of the following: Taking courses online (50%),
                  watching movies(20%), surving social media (10%) and
                  family(20%).
                </p>
              </div>

              <div className='Summary__stacks'>
                <h4 className='Summary__stacks-info'>
                  Technologies that am using and worked with (
                  <span className='rn-highlight fwb'>
                    Full-Stack Software Engineer
                  </span>
                  ):
                </h4>
                <div className='Summary__stacks-icon-box'>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/icons-18.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/javascript.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/icons-16.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/reactredux.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/next-js.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/sanity.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/node-js.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/express.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/mongodb.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/grapQl.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/postgres.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/firebase-480.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/icons-08.png'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/aws-2.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/google-cloud-2.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/docker-3.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/kubernets.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className='Summary__stacks-icon'>
                    <Image
                      src='/assets/images/icons/travis-ci.svg'
                      alt=''
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
