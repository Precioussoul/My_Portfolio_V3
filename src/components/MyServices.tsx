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
              feature_details='My frontend expertise spans translating designs into live websites, web apps, and mobile applications, with seamless API integration and deployment. I have strong experience across various frontend technologies and am currently transitioning to Web3, aiming to become both a Web2 and Web3 engineer.'
            />
            <FeatureItem
              ratingNumer={3}
              Icon={FaCodeCompare}
              feature_heading='Backend Development'
              feature_details='I have gained more experience with Python/Django, Node.js, and Express, writing backend RESTful APIs . I am skilled in handling BaaS services like Firebase, Supabase, Airtable, and Headless CMS, as well as working with databases like MongoDB and PostgreSQL using Prisma. Additionally, I have experience with authentication methods such as Next-Auth, JWT, and more.'
            />
            <FeatureItem
              feature_heading='Cloud and DevOps.'
              ratingNumer={2}
              Icon={IoCloudDone}
              feature_details='I have experience in Cloud and DevOps, including deployments, domain and subdomain configurations, and email system setups. I also work with cloud services like messaging, social sign-ins, and third-party integrations such as Stripe. While not a DevOps expert, I am eager to learn and adapt based on project requirements.'
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
                  Coming from Africa, specifically Nigeria, I&apos;ve seen firsthand how talented developers are often overlooked — not because we lack
                  skill, but because of where we&apos;re from. Even with the rise of remote work and the advantage of overlapping time zones with Europe &
                  LATAM, misconceptions still linger. Talent doesn&apos;t have a nationality — <strong>it has drive, discipline, and delivery.</strong> And
                  I bring all three. <br /> <br /> My academic background? Not elite. I didn&apos;t come from a top-tier university or a traditional tech
                  bootcamp. But I came with hunger. <strong> Hunger to learn. Hunger to grow.</strong> Hunger to prove that what I lack in textbook
                  knowledge, I make up for in real-world results. <br /> <br /> I’ve explored Data Structures & Algorithms (DSA), but I don’t shine in it
                  and often feel like I’m just cramming for the sake of it. My focus, however, is on solving real-world problems with clean architecture,
                  excellent UX, and consistent product delivery. While DSA has its place, my strength lies in building things that work — and ship. And
                  when it comes to building actual products that work,
                  <strong> I show up, I figure it out, adhere to best practices, make it scalable and I deliver.</strong> Every time. <br /> <br />{" "}
                  I&apos;ve worked across multiple stacks, handled full projects on my own, adapted to tools and frameworks on the fly, and always held
                  myself to one standard:
                  <strong> deliver because someone trusted you enough to pay you.</strong> That&apos;s integrity. <br /> <br /> If you're looking for
                  someone who understands <strong>product thinking, writes clean code, and connects frontend and backend </strong> — let's build something
                  amazing. I value your time, money, and trust, and I learn fast, adapt faster, and always deliver.{" "}
                  <strong>Let's talk if that resonates with you!</strong>
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
