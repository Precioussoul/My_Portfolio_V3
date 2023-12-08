"use client"
import Link from "next/link"
import React, {useContext} from "react"
import Image from "next/image"
import {ContentContext} from "@/contexts/ScrollContext"
import ExperienceItem from "./ExperienceItem"

const ResumeeSection = () => {
  const {resumeeRef} = useContext(ContentContext)
  function openTab(evt: any, TabName: string) {
    const resumeeTabs = document.querySelectorAll(".resumee__tab-item")
    const tabContents = document.querySelectorAll(".tab-content")

    tabContents.forEach((tabContent: any) => {
      tabContent.style.display = "none"
    })

    resumeeTabs.forEach((resumeTab) => {
      resumeTab.className = resumeTab.className.replace(" active", " ")
    })

    document.getElementById(TabName)!.style.display = "block"
    evt.currentTarget.className += " active"
  }

  return (
    <section className='resumee-section' id='Resumee' ref={resumeeRef}>
      <div className='container'>
        <div className='resumee__header'>
          <p className='resumee__header-subtitle'>Where I work</p>
          <h2 className='resumee__header-title'>Work Experience</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex items-start'>
            <ul className='resumee__tabs !flex-col gap-4'>
              <li
                className='resumee__tab-item font-medium active'
                onClick={(event) => openTab(event, "Aladdin")}
              >
                Aladdin Digital Bank
              </li>
              <li
                className='resumee__tab-item font-medium'
                onClick={(event) => openTab(event, "Connou")}
              >
                Connou
              </li>
              <li
                className='resumee__tab-item font-medium'
                onClick={(event) => openTab(event, "ALX")}
              >
                ALX Africa
              </li>
              <li
                className='resumee__tab-item font-medium'
                onClick={(event) => openTab(event, "BeeSpeed")}
              >
                BeeSpeed Tech
              </li>
            </ul>

            <div
              className='tab-content active'
              id='Aladdin'
              style={{display: "block"}}
            >
              <ExperienceItem
                role='Frontend Engineer'
                company='Aladdin Digital Bank'
                start_date='May 2023'
                isPresent
                bullet_points={[
                  `Revitalized the Aladdin Mobile app, enhancing its user interface with a modern design using React-Native, Emotions, and Typescript.
                Contributed to a 30% increase in user satisfaction by implementing intuitive navigation and interactive elements.`,

                  `Streamlined API integration with Redux toolkit and RTK Query, seamlessly channeled data into the frontend UI components, reducing feature
                implementation time by 20% and ensuring a smooth user experience.`,

                  `Pioneered Aladdin Business, a web-based project seamlessly connecting mobile and web experiences for business accounts. Translated key
                mobile app features into the web application using React, Typescript, and Chakra UI, resulting in a 25% boost in user accessibility`,
                ]}
              />
            </div>
            <div className='tab-content' id='Connou'>
              Connou
            </div>

            <div className='tab-content' id='ALX'>
              ALX
            </div>

            <div className='tab-content' id='BeeSpeed'>
              {/* ed */}
              BeeSpeed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeeSection
