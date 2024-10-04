import React, {useState} from "react"
import NewPortfolioItem, {NewPortFolioItemProps} from "./NewPortfolioItem"

const portfolioData: NewPortFolioItemProps[] = [
  {
    images: ["/assets/images/portfolio/Social-PR_dashboard.png"],
    projectTitle: "SocialPR | Leveraging AI in Publications",
    projectDescription: `SocialPR is a platform that allow you to expand your visibility through High PR and leverage their network to rank your Article in the Top Publication Media. Contributed to the frontend development of the platform`,
    projectLiveUrl: "https://socialpr.ai",
    isPrivateRepo: true,
    techStacks: "React, Typescript, TailwindCSS, NodeJS, MongoDB, 0Auth",
  },
  {
    images: ["/assets/images/portfolio/businessAcc.png"],
    projectTitle: "Aladdin Business App",
    projectDescription: `A fintech web-app that allow business of all kind that access to
    banking services at the business-level, international payment,
    solutions and beyonds. Available soon. currently in development. Involved in the project as the lead frontend engineer for a team of 5 teammate and developed 85% of the frontend core components and its architectures `,
    projectLiveUrl: "https://abpdev.aladdin.com.ng/",
    isPrivateRepo: true,
    techStacks: "React,Redux, TypeScript, Chakra UI, Aladdin APIs",
  },
  {
    images: ["/assets/images/portfolio/breej.png"],
    projectTitle: "Breej Marketplace",
    projectDescription: `A fintech platform that runs modern barter system using GoldRing and Barter Token Virtual Coin to facilitate exchange, connect, thrive and get what you need, without spending cash. Contracted and Developed the entire project frontend UI Interfaces and API Integrations.`,
    projectLiveUrl: "https://breej.io/",
    isPrivateRepo: true,
    techStacks: "Next.js, React-Query, TypeScript, TailwindCss, Breej APIs",
  },
  {
    // isFeatured: true,

    images: ["/assets/images/portfolio/hbs_drive.png"],
    projectTitle: "Lytebox | Google Drive Inspired",
    projectDescription: `Google Drive Inspired full-stack web application that allow users to upload files,preview, delete, starred favorites ,download etc.. Led and developed the entire project full-stack development`,
    projectLiveUrl: "https://lytebox.web.app/",
    projectGitHubUrl: "https://github.com/Precioussoul/Lytebox",
    techStacks: "React, TypeScript, Sass, Firebase, Cloud Storage, Media Libraries",
  },
  {
    images: ["/assets/images/portfolio/homevibe-screenshot.png"],
    projectTitle: "HomeVibe | Book your vacation",
    projectDescription: `AirBnB Inspired real-estate marketplace platform that allows you to list a house for rents, book housing for vacations and reservation. Led and developed the entire project full-stack development`,
    projectLiveUrl: "https://homevibe.vercel.app",
    projectGitHubUrl: "https://github.com/Precioussoul/HomeVibe",
    techStacks: "Next.js, TypeScript, TailwindCss, Prisma, MongoDb, Next-Auth, Cloudinary",
  },
  {
    images: ["/assets/images/portfolio/wealthmomnow.jpg"],
    projectTitle: "WealthMomNow | E-learning website",
    projectDescription: `Wealthymomnow Website is an online-courses website for solo-instructor. I am responsible for building this website from scratch together with the design, content and couses upload to the backend of the website.`,
    projectLiveUrl: "https://wealthymomnow.com/",
    isPrivateRepo: true,
    techStacks: "WordPress, Astra Theme, TutorLMS, Elementor Pro, Content Writing",
  },

  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/Aladdin-Mobile.png"],
    projectTitle: "Aladdin Mobile App",
    projectDescription: `Aladdin Mobile app is a fintech mobile application that provides payment solutions such as Banking services, Virtual Dollar Wallet Account, Dollar Card Services, Bills Payment and more. Contributed to the Home screens design implemntation and markeplace screen using React Native`,
    projectLiveUrl: "https://play.google.com/store/apps/details?id=com.aladdin.digital",
    techStacks: "React Native, Redux, Emotion/React Native, TypeScript, React Navigation",
  },
  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/connouapp-website.jpg"],
    projectTitle: "Connou Website",
    projectDescription: `Connou | The App that Connects You with Like-minded Humans.Working at connou as a full-time software developer, responsible for development of the company website and also contribute to the development of the company mobile app using flutter`,
    projectLiveUrl: "https://connou.app",
    techStacks: "React, NextJS, Typescript, Sanity CMS",
  },
  {
    images: ["/assets/images/portfolio/MyRead_thumbnail.jpg"],
    projectTitle: "MyRead",
    isPrivateRepo: true,
    projectDescription: `A web application that keep you updated of list of books , you can search for books, filter catalog options (to read now, Currently reading and will read). Bult with React, CSS, and Use Book API to fetch data.`,
    projectLiveUrl: "https://myreadnd.netlify.app/",
    techStacks: "HTML, CSS, JavaScript,React and BookAPI",
  },
]

const PortfolioSection = () => {
  const [maxPageNumber, setMaxPageNumber] = useState(6)
  const [isLoadMore, setIsLoadMore] = useState(false)

  const handleLoadMore = () => {
    setMaxPageNumber(portfolioData.length)
    setIsLoadMore(true)
  }
  const resetLoadMore = () => {
    setMaxPageNumber(6)
    setIsLoadMore(false)
  }

  const projectDatas = portfolioData.slice(0, maxPageNumber)
  return (
    <section className='portfolio-section' id='portfolio'>
      <div className='container'>
        <div className='flex items-center gap-3 mb-8'>
          <p className='portfolio__header-subtitle !capitalize !text-xl !font-medium'>Latest Projects </p>
        </div>

        <div className='portfolio__grid'>
          {projectDatas.map((portfolio, idx) => (
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

        <div className='portfolio-showmore mt-8'>
          <button className='btn-outline' onClick={isLoadMore ? resetLoadMore : handleLoadMore}>
            {isLoadMore ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
