'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'

const ResumeeSection = () => {
  function openTab(evt: any, TabName: string) {
    const resumeeTabs = document.querySelectorAll('.resumee__tab-item')
    const tabContents = document.querySelectorAll('.tab-content')

    tabContents.forEach((tabContent: any) => {
      tabContent.style.display = 'none'
    })

    resumeeTabs.forEach((resumeTab) => {
      resumeTab.className = resumeTab.className.replace(' active', ' ')
    })

    document.getElementById(TabName)!.style.display = 'block'
    evt.currentTarget.className += ' active'
  }

  return (
    <section
      className='resumee-section'
      id='Resumee'
      data-aos='zoom-in'
      data-aos-delay='200'
      data-aos-duration='2000'
    >
      <div className='container'>
        <div className='resumee__header'>
          <p className='resumee__header-subtitle'>Every Details About Me</p>
          <h2 className='resumee__header-title'>Resume</h2>
        </div>
        <ul
          className='resumee__tabs'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <li
            className='resumee__tab-item active'
            onClick={(event) => openTab(event, 'Summary')}
          >
            Summary
          </li>
          <li
            className='resumee__tab-item'
            onClick={(event) => openTab(event, 'My_Skills')}
          >
            My Skills
          </li>
          <li
            className='resumee__tab-item'
            onClick={(event) => openTab(event, 'Experience')}
          >
            Work Experience
          </li>
          <li
            className='resumee__tab-item'
            onClick={(event) => openTab(event, 'Education_Certification')}
          >
            Education <span className='option-display'>& Certification</span>
          </li>
        </ul>

        <div className='tab-content' id='Summary' style={{ display: 'block' }}>
          <div className='Summary__grid'>
            <div className='Summary__author-image'>
              <Image
                src='/assets/images/author/My_Image_Protrait_smile.png'
                alt='Sofiyullah-Author-image'
                width={500}
                height={500}
              />
            </div>

            <div className='Summary__Details'>
              <div
                className='Summary__preview-text'
                data-aos='fade-down'
                data-aos-duration='1500'
                data-aos-delay='400'
              >
                <p>
                  Hey everyone, My name is Sofiyullah. I&apos;m a motivated,
                  detail-oriented and committed software engineer with over 3
                  years of experience in gathering requirements, designing,
                  implementing, testing, deploying and delivering pixel-perfect
                  frontends, complex backends, mobile apps and cloud solutions
                  using varieties of programming languages, frameworks,
                  technologies and cloud vendors services as a solo engineer and
                  as part of an engineering team.
                </p>
              </div>

              <div className='Summary__stacks'>
                <h4
                  className='Summary__stacks-info'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  data-aos-delay='400'
                >
                  Technologies that am using and worked with (
                  <span className='rn-highlight fwb'>
                    Full-Stack Software Engineer
                  </span>
                  ):
                </h4>
                <div
                  className='Summary__stacks-icon-box'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  data-aos-delay='550'
                >
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
                </div>

                <div
                  className='Summary__stacks-icon-box 2nd'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  data-aos-delay='550'
                >
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
                <Link
                  href='/assets/images/author/Sofiyullah_Abdullah_SoftwareEngineer.pdf'
                  download
                  className='Download-btn'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  data-aos-delay='750'
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className='tab-content'
          id='My_Skills'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='1500'
          data-aos-delay='200'
        >
          <div className='resumee__skills'>
            <div className='resumee__heading'>
              <h1 className='resumee__heading-title'>Technical Skills</h1>
            </div>

            <div className='resumee__skill-showcase'>
              <p className='resumee__skill-name'>React</p>
              <p className='resumee__skill-name'>NextJS</p>
              <p className='resumee__skill-name'>React Native</p>
              <p className='resumee__skill-name'>Redux</p>
              <p className='resumee__skill-name'>Nodejs</p>
              <p className='resumee__skill-name'>Express</p>
              <p className='resumee__skill-name'>MongoDB</p>
              <p className='resumee__skill-name'>ORM+RDS</p>
              <p className='resumee__skill-name'>firebase</p>
              <p className='resumee__skill-name'>CMS</p>
              <p className='resumee__skill-name'>AWS</p>
              <p className='resumee__skill-name'>GCP</p>
              <p className='resumee__skill-name'>Docker</p>
              <p className='resumee__skill-name'>Kubernetes</p>
              <p className='resumee__skill-name'>Travis CI</p>
              <p className='resumee__skill-name'>CI/CD Pipeline</p>
            </div>
            <div className='resumee__heading column-two'>
              <h1 className='resumee__heading-title'>Soft Skills</h1>
            </div>
            <div className='resumee__skill-showcase'>
              <p className='resumee__skill-name'>Passionate</p>
              <p className='resumee__skill-name'>Self-Motivated</p>
              <p className='resumee__skill-name'>Avid learner</p>
              <p className='resumee__skill-name'>Collaborative Team Player</p>
              <p className='resumee__skill-name'>Details Oriented</p>
              <p className='resumee__skill-name'>Communicative</p>
              <p className='resumee__skill-name'>Focused</p>
              <p className='resumee__skill-name'>Problem solving</p>
              <p className='resumee__skill-name'>Creativity</p>
              <p className='resumee__skill-name'>Optimistic</p>
              <p className='resumee__skill-name'>Less supervision</p>
            </div>
          </div>
          <div className='blog-more'>
            <p> Developing myself into a competent machine </p>{' '}
          </div>
        </div>

        <div className='tab-content' id='Experience'>
          <div className='resumee__box'>
            <div className='resumee__heading'>
              <small className='resumee__heading-date'>2020 - Present</small>
              <h1 className='resumee__heading-title'>Work Experience</h1>
            </div>
            <div className='resumee__list 2nd'>
              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>Connou</h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      Software Engineer{' '}
                      <span className='highlighted'>@ Connou</span>
                    </span>
                    <span className='major'> (09/2022 - Present)</span>
                    <span className='major'>Fully Remote | Germany </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Developing the company website using React, Next.JS,
                      Typescript and the backend using headless CMS with GROQ
                      querying language for Data fetching.
                    </li>
                    <li>
                      Collaborated with UI/UX team on the website project and
                      earned satisfactory comment from them after development.
                    </li>
                    <li>
                      Joined Flutter Dev Team and started learning/ working with
                      Flutter/Dart to contribute to the development of the
                      company product (mobile app)
                    </li>
                    <li>
                      Complete ownership and fully responsible for the company
                      website project. and also working with an amazing team and
                      beautiful people.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>Soora</h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      React-Native Developer{' '}
                      <span className='highlighted'>@ Soora</span>
                    </span>
                    <span className='major'> (02/2023 - 04/2023)</span>
                    <span className='major'>Fully Remote | UK </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Implemented first-version enterprise social applications
                      of Soora LTD Platform using Javascript, React-Native,
                      Recoil, Typescript, ReactQuery, and MongoDB. (launching
                      very soon)
                    </li>
                    <li>
                      Developed lots of reusable components during the
                      development and follows existing architectures when
                      implementing tickets to fast tracked the development speed
                      of the entire team by eighty percent (80%).
                    </li>
                    <li>
                      Volunteered working as a React-Native Developer to
                      fast-tracked the development of this startup company
                      mobile application and worked with a team of five
                      developers.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>ALX</h2>
                  <div className='resumee__item--category'>
                    <span className='major'>Software engineer Intern</span>
                    <span className='major'> (02/2022 - present)</span>
                    <span className='major'>
                      {' '}
                      Fully Remote | Africans Only{' '}
                    </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      The ALX Holberton Software Engineering programme is a
                      12-month(70h/week) immersive programme.
                    </li>
                    <li>
                      Engaged technology enthusiasts and budding software
                      engineers in a variety of programmes across in-demand tech
                      disciplines to prepare them for a global career as a
                      Full-Stack Developer.
                    </li>
                    <li>
                      Engaged in the foundation phase of the programmed and met
                      the minimum requirement{' '}
                    </li>
                    <li>
                      Engaged in the Specialization phase of the programmed and
                      met the minimum requirement (frontend Development){' '}
                    </li>
                    <li>
                      Completed my internship and rewarded a certificate as a
                      Full-Stack Frontend Focused Developer ( Python, Flask,
                      NodeJS and React)
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    Google Developer Student Club
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      Google Cloud Engineer Trainee (GADS 2022)
                    </span>
                    <span className='major'> (06/2022 - 12/2022)</span>
                    <span className='major'>Fully Remote | Africans Only </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Participated in 6-months Google Africa Developer
                      Scholarship (GADS) program to explore my choice of cloud
                      vendor (AWS vs GCP) and Unlocked foundation phase,
                      learning phase 1, and learning phase 2 and Project Phase.
                    </li>
                    <li>
                      Trained by top instructors in the world such as Andela,
                      Google and PluralSight, Exposed to amazing advanced
                      content as a Cloud Engineer
                    </li>
                    <li>
                      Ended the program after project phase and grateful for the
                      learning experiences such Serveless development with
                      Google Cloud, Cloud Function and Development of Cloud
                      RESTFUL API with Google Apigee and lot more .
                    </li>
                    <li>
                      Completed Project Phase and Gained Intermediate level
                      Google Cloud Developer Skills 🙂 from the competition{' '}
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    ALX-Transform (ALX-T)
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>AWS Cloud Developer Intern</span>
                    <span className='major'> (05/2022 - 08-2022)</span>
                    <span className='major'>
                      {' '}
                      Fully Remote | Africans Only{' '}
                    </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Participated in ALX-T_X_Udacity Campaign as an intern
                      <span className='highlighted'> @ ALX-T</span> (ALX-T was
                      collaborating with Udacity to train his intern in field of
                      interest), in my case (AWS Cloud Developer Nanodegree)
                    </li>
                    <li>
                      Engaged technology enthusiasts and budding software
                      engineers in my field of interest at Udacity Zoom session
                      breakout-room
                    </li>
                    <li>
                      learnt the Foundamental of AWS Core services and Other
                      Specialized Services in a practical version with AWS
                      prepaid account
                    </li>
                    <li>
                      Gained the knowledge of serverless application development
                      with AWS and NodeJS, knowledge of Microservices, Docker,
                      Kubernetes, and other advanced software development
                      practices
                    </li>
                    <li>
                      Completed my internship and rewarded a certificate as a
                      Full-Stack AWS Cloud Developer (AWS,NodeJS and React) and
                      also moved on pass my AWS CLP Exams and become a certified
                      AWS Cloud Practitioner and certified AWS Cloud Quest:
                      Cloud Practitioner ( solved 12 real-world challenges with
                      AWS)
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    CodeDrill Cooperation{' '}
                    <span className='rn-highlight'>
                      [self-employed company nickname]
                    </span>
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      Frontend Developer{' '}
                      <span className='highlighted'>
                        {' '}
                        @ self-employed | on campus
                      </span>{' '}
                    </span>
                    <span className='major'> (02/2021 - 07/2022)</span>
                    <span className='major location'>
                      Nigeria (While Schooling){' '}
                    </span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Developed designs to meet specific requirements such as
                      quick loading sites with particular layouts.
                    </li>
                    <li>
                      Consulted with customers to gather requirements and
                      discuss design choices. And also managed full-cycle design
                      tasks, handling phases from conception to completion while
                      maintaining guidelines throughout.
                    </li>
                    <li>
                      Conceived and built optimized landing pages in HTML and
                      CSS for integration and cross-browser compatibility.
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    BeeSpeed Technology{' '}
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      WordPress Developer{' '}
                      <span className='highlighted'> @ BeeSpeed</span>{' '}
                    </span>
                    <span className='major'> (03/2020 - 02/2021)</span>
                    <span className='major location'> Hybrid | Nigeria</span>
                    <i className='fas fa-business-time resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Converted sample websites ideas, Figma Designs into Pixel
                      perfect websites using HTML, WordPress.
                    </li>
                    <li>
                      Introduced new plugins and extensions to make the website
                      more usable, interactive, SEO-friendly and speed optimized
                    </li>
                    <li>
                      Using Elementor and Elementor Pro page builder for full
                      websites customization and update website as instructed by
                      Client to introduce new features and content.
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        <div className='tab-content' id='Education_Certification'>
          <div className='resumee__box'>
            <div className='resumee__heading'>
              <small className='resumee__heading-date'>2016 - 2023</small>
              <h1 className='resumee__heading-title'>Education Quality</h1>
            </div>
            <div className='resumee__list'>
              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    Holberton School
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      Diploma in Software Engineering (02/2022 - 03/2023)
                    </span>
                    <i className='fas fa-graduation-cap resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Currently learning software engineering with ALX +
                      Holberton School program.
                    </li>
                    <li>
                      Months are divided into Sprints and we have 4 sprints with
                      specific learning and assignment curriculum attached to
                      them each.
                    </li>
                    <li>
                      The program covers 3 programming languages: C, PYTHON,
                      JAVASCRIPT
                    </li>
                    <li>
                      Front-End Specialization Track after Foundation learning
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    Udacity Online Learning [Udacity]
                  </h2>
                  <div className='resumee__item--category'>
                    <div>
                      <span className='major'>
                        React Nanodegree Certification (08/2021 - 10/2021)
                      </span>
                      <br />
                      <span className='major'>
                        Cloud Developer Nanodegree Certification (05/2022 -
                        08/2022)
                      </span>
                    </div>
                    <i className='fas fa-graduation-cap resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Advanced Knowledge of React such React-Redux, Binding,
                      Stores .etc with Project Based approach.
                    </li>
                    <li>
                      Familiarity with Mobile Development with React Native, its
                      Fundamentals and its associated libraries combination
                    </li>
                    <li>
                      Broken down Monolith full-stack application into
                      microservices and deployed each microservices unit to the
                      cloud which can serve many users with 99.9% uptime and low
                      latency using CI/CD pipeline and DevOps toolings.
                    </li>
                    <li>
                      Develped and Deployed full-stack application to AWS
                      Elastic Beanstalk and to AWS Elastic Kubernetes Service
                      using Docker,Travis CI and Kubernetes
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading'>
                    The Federal Polytechnic Ede [FPE]
                  </h2>
                  <div className='resumee__item--category'>
                    <span className='major'>
                      Diploma in Computer Engineering (2016-2022)
                    </span>
                    <i className='fas fa-graduation-cap resumee__item-icon fa-2x'></i>
                  </div>
                  <ul className='resumee__item--details'>
                    <li>
                      Higher National Diploma /Bsc.Tech in computer engineering
                    </li>
                    <li>
                      Computer Engineering Department Student Ambassador at the
                      Student Union Council
                    </li>
                    <li>
                      Senator at the Student Union Representive Council
                      legislative Assembly (SURC 2021/22)
                    </li>
                    <li>
                      Associate Member of Nigerian Association of Technologist
                      in Engineering(NATE)
                    </li>
                  </ul>
                </div>
              </div>

              <div className='resumee__item'>
                <div className='resumee__item--inner'>
                  <h2 className='resumee__item--sub-heading certified'>
                    Certifications
                  </h2>
                  <div className='resumee__item--certified'>
                    <Link
                      href={
                        'https://www.credly.com/badges/17303f0a-b89f-4c41-8d2b-08496b8b6065/linked_in_profile'
                      }
                      target='_blank'
                      className='resumee__certified_item'
                    >
                      <div className='resumee__certified_item'>
                        <Image
                          src='/assets/images/certifications/AWS-Certified-Cloud-Practitioner-Credly.png'
                          alt='AWS Certified Cloud Practitioner'
                          className='certified-img '
                          width={500}
                          height={500}
                        />
                        <p className='major center'>
                          AWS Certified Cloud Practitioner
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={'https://confirm.udacity.com/FJZMPSGZ'}
                      target='_blank'
                      className='resumee__certified_item'
                    >
                      <div className='resumee__certified_item'>
                        <Image
                          src='/assets/images/certifications/React-nanodegree.png'
                          alt='React Nanodegree'
                          className='certified-img'
                          width={500}
                          height={500}
                        />
                        <p className='major center'>
                          React Developer Nanodegree{' '}
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={'https://confirm.udacity.com/ALWLSJAX'}
                      target='_blank'
                      className='resumee__certified_item'
                    >
                      <div className='resumee__certified_item'>
                        <Image
                          src='/assets/images/certifications/cloud-nanodegree.png'
                          alt='Cloud Developer Nanodegree'
                          className='certified-img'
                          width={500}
                          height={500}
                        />
                        <p className='major center'>
                          Cloud Developer Nanodegree.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={
                        'https://www.credly.com/badges/b162ccd6-1730-4c3e-b65a-98a73db7c8af'
                      }
                      target='_blank'
                      className='resumee__certified_item'
                    >
                      <div className='resumee__certified_item'>
                        <Image
                          src='/assets/images/certifications/AWS-Cloud-Quest-Cloud-Practitioner-Credly.png'
                          alt='AWS-Cloud-Quest-Cloud-Practitioner'
                          className='certified-img'
                          width={500}
                          height={500}
                        />
                        <p className='major center'>
                          AWS Cloud-Quest: Cloud-Practitioner
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeeSection
