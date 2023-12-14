import {ContentContext} from "@/contexts/ScrollContext"
import React, {useContext, useEffect, useState} from "react"
import {FaCode} from "react-icons/fa6"
import NewPortfolioItem, {NewPortFolioItemProps} from "./NewPortfolioItem"
import PortfolioItem from "./PortfolioItem"

type ArchivedPortfolioProps = {
  projectId: number
  projectlink: string
  project_image_url: string
  project_detailsText: string
  projectTechStack: string
  project_category: string
  project_name: string
  projectGithubLink?: string
}

const portfolioArchiveData: ArchivedPortfolioProps[] = [
  {
    projectId: 4,
    projectlink: "https:/aladdin.ng/",
    project_image_url: "/assets/images/portfolio/Aladdin-Mobile.png",
    project_detailsText:
      "Aladdin Mobile app is a fintech mobile application that provides payment solutions such as Banking services, Virtual Dollar Wallet Account, Dollar Card Services, Bills Payment and more. Contributed to the Home screens design implemntation and markeplace screen using React Native",
    projectTechStack:
      "Built with WordPress, React Native, Redux, Emotion/React Native, TypeScript, React Navigation and more",
    project_category: " IOS |Android Application",
    project_name: "Aladdin Mobile App",
  },
  {
    projectId: 4,
    projectlink: "https://wealthymomnow.com/",
    project_image_url: "/assets/images/portfolio/wealthmomnow.jpg",
    project_detailsText:
      "Wealthymomnow Website is an online-courses website for solo-instructor. I am responsible for building this website from scratch together with the design, content and couses upload to the backend of the website. ",
    projectTechStack:
      "Built with WordPress, LMS System, Elementor Page Builder,and more",
    project_category: "Company website",
    project_name: "WealthMomNow | E-learning website",
  },

  {
    projectId: 5,
    projectlink: "https://connou.app",
    project_image_url: "/assets/images/portfolio/connouapp-website.jpg",
    project_detailsText:
      " Connou | The App that Connects You with Like-minded Humans.Working at connou as a full-time software developer, responsible for development of the company website and also contribute to the development of the company mobile app using flutter",
    projectTechStack:
      "React,NextJS, Typescript, and Sanity CMS for content management",
    project_category: "Company website",
    project_name: "Connou | The App that Connects You with Like-minded Humans.",
  },
  {
    projectId: 7,
    projectlink: "https://cutt.ly/UUeawGs",
    project_image_url: "/assets/images/portfolio/Fitness-Tracker.jpg",
    project_detailsText:
      "A Fitness Tracker Mobile application that help fitness enthusiast to keep track of their daily exercise with historys. The app also have geo-spartial location feature enabled which tell users the direction they are heading to. Built with React Native, React Navigation, Async Storage etc. and other native features.",
    projectTechStack:
      "React-Native, React Navigation, Async Storage,and other native features",
    project_category: "Mobile-application",
    project_name: "Fitness Tracker App",
    projectGithubLink:
      "https://github.com/Precioussoul/Fitness-Tracker---Mobile-Application",
  },
  {
    projectId: 8,
    projectlink: "https://myreadnd.netlify.app/",
    project_image_url: "/assets/images/portfolio/MyRead_thumbnail.jpg",
    project_detailsText:
      "A web application that keep you updated of list of books , you can search for books, filter catalog options (to read now, Currently reading and will read). Bult with React, CSS, and Use Book API to fetch data.",
    projectTechStack: "HTML, CSS, JavaScript,React and BookAPI",
    project_category: "Web application ",
    project_name: "My Read Web application",
    projectGithubLink:
      "https://github.com/Precioussoul/MyRead----Book-lending-App-React-Nd",
  },
  {
    projectId: 10,
    projectlink: "https://medium-cms.vercel.app",
    project_image_url: "/assets/images/portfolio/medium-blog-website.jpg",
    project_detailsText:
      "A blog powered by next.js and sanity cms where you can manage content from the content management system and it will reflect on the website",
    projectTechStack: "HTML, CSS, JavaScript and Next.js and SANITY CMS",
    project_category: "Blog website",
    project_name: "Medium Blog Powered by CMS",
  },
  {
    projectId: 11,
    projectlink: "https://github.com/Precioussoul/Monolith_to_Microservices",
    project_image_url: "/assets/images/portfolio/microservice3-min.png",
    project_detailsText:
      "Udagram is a monolithic web app broken down into microservices such that  the database (AWS RDS), the backend endpoints are hosted separately and connected together with reverse-proxy nginx and the frontend is listening to the API endpoint.",
    projectTechStack:
      "React, Typescript, NodeJS, travis CI, Docker, Kubernetes, AWS.",
    project_category: "Microservice Architecture",
    project_name: "Monolithic application breakdown to Microservice",
    projectGithubLink:
      "https://github.com/Precioussoul/Monolith_to_Microservices",
  },
  {
    projectId: 12,
    projectlink: "https://github.com/Precioussoul/Serverless-c4-project",
    project_image_url: "/assets/images/portfolio/github.jpeg",
    project_detailsText: ` A serverless web application that is designed and developed with AWS Lamdba, API Gateway, Express , NodeJS for backend, deployed on AWS via cloudFormation and serverless framework to serve a react application
       `,
    projectTechStack: "Typescript, NodeJS, Express,Serveless Framework, AWS",
    project_category: "Serveless with NodeJS and AWS",
    project_name:
      "Serverless Todo application using AWS Lambda, AWS API Gateway and Serverless framework.",
    projectGithubLink: "https://github.com/Precioussoul/Serverless-c4-project",
  },
  {
    projectId: 13,
    projectlink: "https://wouldrathergame.netlify.app/",
    project_image_url: "/assets/images/portfolio/WouldRatherGame_thumbnail.jpg",
    project_detailsText:
      "A Poll Game that allow users to answer questions, create poll questions and see leaderboard of users with most answered questions.",
    projectTechStack: "HTML, CSS, JavaScript,React, Redux and Semantic UI",
    project_category: "Web application ",
    project_name: "Would rather game",
    projectGithubLink:
      "https://github.com/Precioussoul/Would-You-Rather-ND-Project-2",
  },
  {
    projectId: 14,
    projectlink: "https://3rdaugustgroup.org/",
    project_image_url: "/assets/images/portfolio/3rdAugust.jpg",
    project_detailsText:
      "A Muiltipurpose Company websites grouped together with a single codebase. Three companies websites linked together as demanded by the clients to save costs. Built with WordPress, Custom CSS, Javascript, Elementor pro page builder and adds-on plugins.",
    projectTechStack: "HTML, CSS, JavaScript, and WordPress",
    project_category: "Company website",
    project_name: "3rd August Company",
  },
  {
    projectId: 15,
    projectlink: "https://github.com/Precioussoul/Cloud-Image-Filter",
    project_image_url: "/assets/images/portfolio/cloud-image-filter.png",
    project_detailsText:
      "Udagram is a simple cloud application that allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.",
    projectTechStack: "AWS ElasticBeanstalk, NodeJS, Express, AWS S3",
    project_category: "Cloud Backend with AWS",
    project_name: "Udagram Image Filtering Microservice",
    projectGithubLink: "https://github.com/Precioussoul/Cloud-Image-Filter",
  },
  {
    projectId: 15,
    projectlink: "https://luluweb.netlify.app/",
    project_image_url: "/assets/images/portfolio/Lulu-game-africa.jpg",
    project_detailsText:
      " Lulu is a gaming application built on top of blockchain to reward users for keeping their africa dialect by translating words to different Africa languages and earn a token and LuLu NFT. Worked with MyComDAO as a volunteer Frontend Developer as a infant startup",
    projectTechStack: "HTML, CSS  and JavaScript",
    project_category: "Company website V1",
    project_name: "Lulu Game template",
  },
]

const PortfolioSection = () => {
  const {portfolioRef} = useContext(ContentContext)
  const [maxPageNumber, setMaxPageNumber] = useState(6)
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const portfolioData: NewPortFolioItemProps[] = [
    {
      isMobile: isMobile,
      isDevMode: true,
      toRight: false,
      images: ["/assets/images/portfolio/businessAcc.png"],
      projectTitle: "Aladdin Business App",
      projectDescription: `A fintech web-app that allow business of all kind that access to
      banking services at the business-level, international payment,
      solutions and beyonds. Available soon. currently in development. Involved in the project as the lead frontend engineer for a team of 5 teammate. Buy a company share today and Invest into the project `,
      projectLiveUrl: "https://aladdin.ng/",
      isPrivateRepo: true,
      techStacks: "React,Redux, TypeScript, Chakra UI, Aladdin APIs",
    },
    {
      isMobile: isMobile,
      isFeatured: true,
      toRight: true,
      images: ["/assets/images/portfolio/breej.png"],
      projectTitle: "Breej Marketplace",
      projectDescription: `A fintech platform that runs modern barter system using GoldRing and Barter Token Virtual Coin to facilitate exchange, connect, thrive and get what you need, without spending cash. Contracted and Developed the entire project frontend UI Interfaces and API Integrations.`,
      projectLiveUrl: "https://breej.io/",
      isPrivateRepo: true,
      techStacks: "Next.js, React-Query, TypeScript, TailwindCss, Breej APIs",
    },
    {
      isMobile: isMobile,
      isFeatured: true,
      images: ["/assets/images/portfolio/homevibe-screenshot.png"],
      projectTitle: "HomeVibe | Book Vacation",
      projectDescription: `AirBnB Inspired real-estate marketplace platform that allows you to list a house for rents, book housing for vacations and reservation. Led and developed the entire project full-stack development`,
      projectLiveUrl: "https://homevibe.vercel.app/",
      projectGitHubUrl: "https://github.com/Precioussoul/HomeVibe",
      techStacks:
        "Next.js, TypeScript, TailwindCss, Prisma, MongoDb, Next-Auth, Cloudinary",
    },
    {
      isMobile: isMobile,
      isFeatured: true,
      toRight: true,
      images: ["/assets/images/portfolio/hbs_drive.png"],
      projectTitle: "Lytebox | Google Drive Inspired",
      projectDescription: `Google Drive Inspired full-stack web application that allow users to upload files,preview, delete, starred favorites ,download etc.. Led and developed the entire project full-stack development`,
      projectLiveUrl: "https://lytebox.web.app/",
      projectGitHubUrl: "https://github.com/Precioussoul/Lytebox",
      techStacks:
        "React, TypeScript, Sass, Firebase, Cloud Storage, Media Libraries",
    },
  ]

  const handleLoadMore = () => {
    setMaxPageNumber(portfolioArchiveData.length)
    setIsLoadMore(true)
  }
  const resetLoadMore = () => {
    setMaxPageNumber(6)
    setIsLoadMore(false)
  }

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    setIsMobile(isMobile)
  }, [])

  const projectDatas = portfolioArchiveData.slice(0, maxPageNumber)
  return (
    <section className='portfolio-section' id='Portfolio' ref={portfolioRef}>
      <div className='container'>
        <div className='flex items-center gap-3 mb-8'>
          <p className='portfolio__header-subtitle !capitalize !text-xl !font-medium'>
            Latest Projects{" "}
          </p>
        </div>

        <div className='flex flex-col gap-16 md:gap-12'>
          {portfolioData.map((portfolio, idx) => (
            <NewPortfolioItem
              key={idx}
              isMobile={portfolio.isMobile}
              toRight={portfolio.toRight}
              isFeatured={portfolio.isFeatured}
              images={portfolio.images}
              isDevMode={portfolio.isDevMode}
              projectTitle={portfolio.projectTitle}
              projectDescription={portfolio.projectDescription}
              projectLiveUrl={portfolio.projectLiveUrl}
              projectGitHubUrl={portfolio.projectGitHubUrl}
              isPrivateRepo={portfolio.isPrivateRepo}
              techStacks={portfolio.techStacks}
            />
          ))}
        </div>

        <div className='flex items-center flex-col justify-center gap-3 my-8'>
          <p className='resumee__header-subtitle mt-8 !capitalize'>
            View the Archives
          </p>
          <h2 className='text-neutral-300   mb-8 capitalize !text-2xl !font-semibold'>
            Other Noteworthy Projects
          </h2>
        </div>

        <div className='portfolio__grid'>
          {projectDatas.map((project) => (
            <PortfolioItem
              key={project.projectId}
              project_name={project.project_name}
              projectTechStack={project.projectTechStack}
              project_detailsText={project.project_detailsText}
              project_image_url={project.project_image_url}
              project_category={project.project_category}
              projectlink={project.projectlink}
              projectGithubLink={project.projectGithubLink as string}
            />
          ))}
        </div>

        <div className='portfolio-showmore mt-8'>
          <button
            className='btn-outline'
            onClick={isLoadMore ? resetLoadMore : handleLoadMore}
          >
            {isLoadMore ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
