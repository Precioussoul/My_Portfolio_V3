"use client"
import Link from "next/link"
import React, {useContext} from "react"
import Image from "next/image"
import {ContentContext} from "@/contexts/ScrollContext"

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
                className='resumee__tab-item active'
                onClick={(event) => openTab(event, "Aladdin")}
              >
                Aladdin Digital Bank
              </li>
              <li
                className='resumee__tab-item'
                onClick={(event) => openTab(event, "Connou")}
              >
                Connou
              </li>
              <li
                className='resumee__tab-item'
                onClick={(event) => openTab(event, "ALX")}
              >
                ALX Africa
              </li>
              <li
                className='resumee__tab-item'
                onClick={(event) => openTab(event, "BeeSpeed")}
              >
                BeeSpeed Tech
                <span className='option-display'>& Certification</span>
              </li>
            </ul>

            <div
              className='tab-content active'
              id='Aladdin'
              style={{display: "block"}}
            >
              Aladdin
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
