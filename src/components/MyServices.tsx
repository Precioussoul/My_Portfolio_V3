"use client"
import Image from "next/image"
import {FaCodeCompare, FaLaptopCode} from "react-icons/fa6"
import {IoCloudDone} from "react-icons/io5"
import FeatureItem from "./FeatureItem"

const MyServices = () => {
  return (
    <section id='features' className='features-section'>
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
              <h2 className='features__introduce-heading'>I don&apos;t know it all But I always deliver.</h2>
              <span className='italic text-sm'>That&apos;s not just a statement; it&apos;s the foundation of my work ethic.</span>
            </div>
            <div className='Summary__Details'>
              <div className='Summary__preview-text'>
                <p>
                  Coming from Africa, I&apos;ve seen firsthand how talented developers are often overlooked — not because we lack skill, but because of
                  where we&apos;re from. Even with the rise of remote work and the advantage of overlapping time zones with Europe & LATAM, misconceptions
                  still linger. Talent doesn&apos;t have a nationality — <strong>it has drive, discipline, and delivery.</strong> And I bring all three.{" "}
                  <br /> <br /> My academic background? Not elite. I didn&apos;t come from a top-tier university or a traditional tech bootcamp. But I came
                  with hunger. <strong> Hunger to learn. Hunger to grow.</strong> Hunger to prove that what I lack in textbook knowledge, I make up for in
                  real-world results. <br /> <br /> I&apos;ll be honest — I&apos;m not good at Data Structures and Algorithms. Not even close to being the
                  best. But I don&apos;t let that stop me. Because in real-world development, the problems aren&apos;t always academic — they&apos;re
                  practical. And when it comes to building actual products that work,
                  <strong> I show up, I figure it out, adhere to best practices, make it scalable and I deliver.</strong> Every time. <br /> <br />{" "}
                  I&apos;ve worked across multiple stacks, handled full projects on my own, adapted to tools and frameworks on the fly, and always held
                  myself to one standard:
                  <strong> deliver because someone trusted you enough to pay you.</strong> That&apos;s integrity. <br /> <br /> If you&apos;re looking to
                  hire someone who checks all the right boxes on paper — I may not be your candidate. But if you want someone who{" "}
                  <strong> values your time, your money, your trust </strong> — someone who learns fast, adapts faster, and always delivers —{" "}
                  <strong>then let&apos;s talk.</strong>
                </p>
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
