"use client"
import ExperienceItem from "./ExperienceItem"

const ResumeeSection = () => {
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
    <section className='resumee-section' id='resumee'>
      <div className='container'>
        <div className='resumee__header mb-8'>
          <p className='resumee__header-subtitle !capitalize'>Experience</p>
          <h2 className='resumee__header-title'>Where I&apos;ve worked</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col overflow-hidden md:flex-row items-start'>
            <ul className='resumee__tabs  md:!flex-col gap-8 md:gap-4 '>
              <li className='resumee__tab-item line-clamp-1 font-medium active' onClick={(event) => openTab(event, "Benmore")}>
                Benmore Technology
              </li>
              <li className='resumee__tab-item line-clamp-1 font-medium' onClick={(event) => openTab(event, "Nethermind")}>
                Nethermind
              </li>
              <li className='resumee__tab-item line-clamp-1 font-medium' onClick={(event) => openTab(event, "Aladdin")}>
                Aladdin
              </li>
              <li className='resumee__tab-item line-clamp-1 font-medium' onClick={(event) => openTab(event, "Connou")}>
                Connou
              </li>
              <li className='resumee__tab-item line-clamp-1 font-medium' onClick={(event) => openTab(event, "BeeSpeed")}>
                BeeSpeed Tech
              </li>
            </ul>

            <div className='tab-content active' id='Benmore' style={{display: "block"}}>
              <ExperienceItem
                role='Full-stack Engineer'
                company='Benmore Technology'
                start_date='February 2024'
                end_date='April 2025 (Layoff)'
                // isPresent
                bullet_points={[
                  `Serve as a Forward Deployed Engineer, working closely with clients to understand their needs and deliver tailored full-stack solutions, guiding them through every stage from discovery to deployment.`,

                  `Lead development of backend systems using Python (Django) and frontend interfaces with React, React Native, and TypeScript, independently delivering a full-stack project that improved system efficiency by 25%.`,

                  `Partnered with clients and internal teams to identify and resolve performance bottlenecks, optimizing application speed and reducing load times by 40%.`,

                  `Act as the primary point of contact for clients, ensuring clear communication and aligning project goals, while driving the timely delivery of high-quality software that meets business objectives.`,
                ]}
              />
            </div>
            <div className='tab-content' id='Nethermind'>
              <ExperienceItem
                role='Frontend Engineer (Web3) Intern'
                company='Nethermind'
                start_date='April 2024'
                end_date='July 2024'
                bullet_points={[
                  `Gained hands-on experience with blockchain technologies through two projects, expanding knowledge of decentralized systems.`,

                  `Contributed to frontend development for two blockchain projects, improving UI/UX and increasing user satisfaction by 25% while reducing
user drop-off rates by 20%.`,

                  `Collaborated with the development team to integrate blockchain features into web applications, boosting transaction processing speed by
30% and enhancing user experience.`,
                ]}
              />{" "}
            </div>
            <div className='tab-content' id='Aladdin'>
              <ExperienceItem
                role='Frontend Engineer'
                company='Aladdin Digital Bank'
                start_date='April 2023'
                end_date='January 2024'
                // isPresent
                bullet_points={[
                  `Revitalized the Aladdin Mobile app, enhancing its user interface with a modern design using React-Native, Emotions, and Typescript which contributed to a 30% increase in user satisfaction by implementing intuitive navigation and interactive elements.`,
                  `Streamlined API integration with Redux toolkit and RTK Query, seamlessly channeled data into the frontend UI components, reducing feature
                implementation time by 20% and ensuring a smooth user experience.`,

                  `Pioneered Aladdin Business, a web-based project seamlessly connecting mobile and web experiences for business accounts. Translated key
                mobile app features into the web application using React, Typescript, and Chakra UI, resulting in a 25% boost in user accessibility`,
                ]}
              />
            </div>
            <div className='tab-content' id='Connou'>
              <ExperienceItem
                role='Frontend Engineer'
                company='Connou'
                start_date='August 2022'
                end_date='February 2023'
                bullet_points={[
                  `Spearheaded the development of the company's public-facing website with React and Next.js, implementing optimizations that led to a
                  remarkable 40% surge in user visitation. Promoting product awareness and contributing to a 25% increase in user inquiries.`,

                  `Optimized frontend performance by seamlessly integrating the Sanity Headless-CMS API with Next.js, employing data pre-rendering.
                  Achieved a substantial 70% acceleration in website speed, enhancing user experience and streamlining content delivery`,

                  `Enhanced workflow efficiency by 30% through comprehensive CI/CD pipeline integration, pull requests, code reviews, and unit testing.
                  Conducted active maintenance using Gitlab CI/CD and automated pipelines, resulting in a streamlined development process.`,
                ]}
              />{" "}
            </div>

            <div className='tab-content' id='BeeSpeed'>
              {/* ed */}
              <ExperienceItem
                role='Frontend Web Developer'
                company='BeeSpeed Technology'
                start_date='August 2020'
                end_date='December 2021'
                bullet_points={[
                  `Translated Figma conceptual designs into visually impeccable websites, achieving a 20% improvement in page load times through
                  optimization of HTML, CSS, and JavaScript.`,

                  `Implemented plugins and themes to enhance website functionality, increase usability, and improve website performance by 20%. This
                  resulted in a more user-friendly, SEO-optimized, and speed-enhanced WordPress website.`,

                  `Augmented website customization with Elementor and Elementor Pro Page Builder, driving a 25% surge in user engagement and a 15%
                  enhancement in site responsiveness. Seamlessly integrated new features, yielding a 20% increase in user interaction and satisfaction.`,
                ]}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeeSection
