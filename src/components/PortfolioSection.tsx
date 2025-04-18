import React, {useState} from "react"
import NewPortfolioItem, {NewPortFolioItemProps} from "./NewPortfolioItem"

const portfolioData: NewPortFolioItemProps[] = [
  {
    images: ["/assets/images/portfolio/Rental_Cover.png"],
    projectTitle: "LandlordLink Solutions | Simplify Properties Mgt.",
    projectDescription: `Landlordlink Solutions is a platform that help streamlined your rental business.Manage properties, tenants, chats and payments all in one place. Led Entire full-stack development from scratch to deployment`,
    projectLiveUrl: "https://landlordlinksolutions.ca/",
    techStacks: "Python, Django, JavaScript, HTMX, TailwindCss, Django Channels (web-socket), Postgres, Redis, Signals,  Stripe-Connect, Cloudinary",
    projectYear: "2025",
    projectStatus: "concluded",
    isPrivateRepo: true,
  },
  {
    images: ["/assets/images/portfolio/cargo_cover.png"],
    projectTitle: "CargoCredible | Review and Rate Cargo Incs",
    projectDescription: `CargoCredible is a trusted trucking community platform where Truck Drivers, Carriers,& Industry Professionals can instantly review, rate, and find reliable services. Contributed to the v1 frontend development`,
    projectLiveUrl: "https://cargocredible.com/",
    techStacks: "Python, Django template,  HTML, TailwindCss, JavaScript",
    projectYear: "2024",
    projectStatus: "ongoing",
    isPrivateRepo: true,
    stackArea: "Frontend",
  },
  {
    images: ["/assets/images/portfolio/astra_cover.png"],
    projectTitle: "Astra Wellbeing | Positive HealthCare Support ",
    projectDescription: `Astra Wellbeing helps healthcare organizations engage and retain their workforce by empowering patients, families, and peers to send real-time messages of positive support to staff. Contributed to UI modules of the employee portal`,
    projectLiveUrl: "https://www.astrawellbeing.com/",
    techStacks: "UI Delivery, Backend Handover,  HTML, TailwindCss, JavaScript",
    projectYear: "2024",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Frontend",
  },

  {
    images: ["/assets/images/portfolio/357_company_cover.png"],
    projectTitle: "357 Company | End-to-End Logistics",
    projectDescription: `357Company is an Last Mile Delivery & End-to-End Logistics platform Streamlining the Shipping Process for Supply Chain & Logistics Leaders. Implemented their frontend UI for the portal app login.`,
    projectLiveUrl: "https://357company.com/",
    techStacks: "Python, Django template, TailwindCss, JavaScript",
    projectYear: "2024",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Frontend",
  },
  {
    images: ["/assets/images/portfolio/hbs_drive.png"],
    projectTitle: "Lytebox | Google Drive Inspired",
    projectDescription: `Google Drive Inspired full-stack web application that allow users to upload files,preview, delete, starred favorites ,download etc.. Led and developed the entire project full-stack development`,
    projectLiveUrl: "https://lytebox.web.app/",
    projectGitHubUrl: "https://github.com/Precioussoul/Lytebox",
    techStacks: "React, TypeScript, Sass, Firebase, Cloud Storage, Media Libraries",
    projectYear: "2023",
    projectStatus: "concluded",
  },
  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/Aladdin-Mobile.png"],
    projectTitle: "Aladdin Mobile App",
    projectDescription: `Aladdin Mobile app is a fintech mobile application that provides payment solutions such as Banking services, Virtual Dollar Wallet Account, Dollar Card Services, Bills Payment and more. Contributed to the Home screens design implemntation and markeplace screen using React Native`,
    projectLiveUrl: "https://play.google.com/store/apps/details?id=com.aladdin.digital",
    techStacks: "React Native, Redux, Emotion/React Native, TypeScript, React Navigation",
    projectYear: "2023",
    projectStatus: "concluded",
    stackArea: "Mobile",
  },
  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/connouapp-website.jpg"],
    projectTitle: "Connou Website",
    projectDescription: `Connou | The App that Connects You with Like-minded Humans.Working at connou as a full-time software developer, responsible for development of the company website and also contribute to the development of the company mobile app using flutter`,
    projectLiveUrl: "https://connou.app",
    techStacks: "React, NextJS, Typescript, Sanity CMS",
    projectYear: "2022",
    projectStatus: "concluded",
  },
  {
    images: ["/assets/images/portfolio/MyRead_thumbnail.jpg"],
    projectTitle: "MyRead",
    isPrivateRepo: true,
    projectDescription: `A web application that keep you updated of list of books , you can search for books, filter catalog options (to read now, Currently reading and will read). Bult with React, CSS, and Use Book API to fetch data.`,
    projectLiveUrl: "https://myreadnd.netlify.app/",
    techStacks: "HTML, CSS, JavaScript,React and BookAPI",
    projectYear: "2021",
    projectStatus: "concluded",
    stackArea: "Frontend",
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
        <div className='resumee__header mb-8'>
          <p className='resumee__header-subtitle !capitalize'>Showcase</p>
          <h2 className='resumee__header-title'>Featured Projects</h2>
        </div>

        <div className='portfolio__grid'>
          {projectDatas.map((portfolio, idx) => (
            <NewPortfolioItem
              key={idx}
              isMobile={portfolio.isMobile}
              toRight={portfolio.toRight}
              images={portfolio.images}
              projectTitle={portfolio.projectTitle}
              projectDescription={portfolio.projectDescription}
              projectLiveUrl={portfolio.projectLiveUrl}
              projectGitHubUrl={portfolio.projectGitHubUrl}
              isPrivateRepo={portfolio.isPrivateRepo}
              techStacks={portfolio.techStacks}
              projectYear={portfolio.projectYear}
              projectStatus={portfolio.projectStatus}
              stackArea={portfolio.stackArea}
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
