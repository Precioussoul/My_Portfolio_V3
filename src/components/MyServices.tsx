"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import Image from "next/image"
import React, {useCallback, useContext, useState} from "react"
import {FaCodeCompare, FaLaptopCode} from "react-icons/fa6"
import {IoCloudDone} from "react-icons/io5"
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
              Icon={FaLaptopCode}
              feature_heading='Frontend Development'
              feature_details='My expertise in frontend span across translating design to Live websites, web-apps and mobile applications. seamless API integration and Deployments. Broad strong exposure to different frontend technologies. Transitioning to Web3 and leaning to become web 2 and web 3 Engineer.'
            />
            <FeatureItem
              ratingNumer={3}
              Icon={FaCodeCompare}
              feature_heading='Backend Development'
              feature_details='Substantial proficiency in writing backend API with NodeJS/Express, Next.js API folder. Both RESTful and GraphQL and can handles different BaaS such as firebase, superbase, Airtable, Headless CMS. Database like MongoDB and, PostGresSQL with Prisma. Authentication with Next-Auth, JWT and more.'
            />
            <FeatureItem
              feature_heading='Cloud and DevOps.'
              ratingNumer={2}
              Icon={IoCloudDone}
              feature_details='Strong exposure to the cloud (AWS) through hands-on training and projects on Udacity, frontend master and more online courses. improving and building proficiency in this area'
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
                  Started my software engineering journey (self-taught) in 2020
                  while in majoring/studying in computer engineering in
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
                  Here are a few technologies I’ve been working with:(
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
              {/*  */}

              <div className='resumee__skill-showcase'>
                <p className='resumee__skill-name'>Javascript</p>
                <p className='resumee__skill-name'>React</p>
                <p className='resumee__skill-name'>Typescript</p>
                <p className='resumee__skill-name'>NextJS</p>
                <p className='resumee__skill-name'>React Native</p>
                <p className='resumee__skill-name'>Nodejs</p>
                <p className='resumee__skill-name'>Solidity</p>
                <p className='resumee__skill-name'>Python</p>
                <p className='resumee__skill-name'>AWS</p>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
