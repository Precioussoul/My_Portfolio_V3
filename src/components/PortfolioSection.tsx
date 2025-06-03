import React, {useState} from "react"
import NewPortfolioItem, {NewPortFolioItemProps} from "./NewPortfolioItem"

const portfolioData: NewPortFolioItemProps[] = [
  {
    images: ["/assets/images/portfolio/Rental_Cover.png"],
    projectTitle: "LandlordLink Solutions | Simplify Properties Mgt.",
    projectDescription: `Spearheaded the full-stack development of the platform—from initial architecture to deployment. Built and integrated core features including property management, tenant onboarding, real-time chat, and payment workflows, streamlining rental operations into a single, efficient solution.`,
    projectLiveUrl: "https://landlordlinksolutions.ca/",
    techStacks: "Python, Django, JavaScript, HTMX, TailwindCss, Channels, Postgres, Redis, Signals,  Stripe-Connect, Cloudinary",
    projectYear: "2025",
    projectStatus: "concluded",
    stackArea: "Full-stack",
    isPrivateRepo: true,
  },

  {
    images: ["/assets/images/portfolio/cargo_cover.png"],
    projectTitle: "CargoCredible | Review and Rate Cargo Incs",
    projectDescription: `Contributed to the initial version of the platform’s frontend, enabling truck drivers, carriers, and logistics professionals to rate, review, and discover trusted service providers within the industry. Focused on building responsive UI components and ensuring smooth user experience across devices.`,
    projectLiveUrl: "https://cargocredible.com/",
    techStacks: "Python, Django template,  HTML, TailwindCss, JavaScript, UI handover",
    projectYear: "2024",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Full-stack",
  },
  {
    images: ["/assets/images/portfolio/astra_cover.png"],
    projectTitle: "Astra Wellbeing | Positive HealthCare Support ",
    projectDescription: `Contributed to building core UI modules for the employee portal, enabling real-time delivery of positive messages from patients, families, and peers. Helped enhance staff engagement and retention through thoughtful, responsive interface design.`,
    projectLiveUrl: "https://www.astrawellbeing.com/",
    techStacks: "UI Delivery, Backend Handover,  HTML, TailwindCss, JavaScript",
    projectYear: "2024",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Full-stack",
  },

  {
    images: ["/assets/images/portfolio/357_company_cover.png"],
    projectTitle: "357 Company | End-to-End Logistics",
    projectDescription: `Implemented the frontend UI for the portal login experience, ensuring a smooth and secure entry point for logistics professionals managing end-to-end shipping operations.`,
    projectLiveUrl: "https://357company.com/",
    techStacks: "Python, Django template, TailwindCss, JavaScript",
    projectYear: "2024",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Full-stack",
  },
  {
    images: ["/assets/images/portfolio/hbs_drive.png"],
    projectTitle: "Lytebox | Google Drive Inspired",
    projectDescription: `Designed and built a full-stack web application inspired by Google Drive. Implemented features including file upload, preview, download, deletion, and favorite/starred marking. Led the entire development lifecycle—from database design to frontend UI and deployment.`,
    projectLiveUrl: "https://lytebox.web.app/",
    projectGitHubUrl: "https://github.com/Precioussoul/Lytebox",
    techStacks: "React, TypeScript, Sass, Firebase, Cloud Storage, Media Libraries",
    projectYear: "2023",
    projectStatus: "concluded",
    stackArea: "Full-stack",
  },
  {
    images: ["/assets/images/portfolio/Creative_cover.png"],
    projectTitle: "Creative Block | Unblocked the Creatives",
    projectDescription: `Led the end-to-end development of the mobile app, from initial UI architecture to deployment on Apple Store Connect (TestFlight). Built the entire frontend from scratch, including UI design, backend integration, and deployment. Currently pending App Store release.`,
    techStacks:
      "React Native, Expo, Android Release, Nativewind, Typescript, React-Query, Zustand, WebSocket, Google Sign-in, Apple-Sign-in, Push-Notification, TestFlight, App store (soon)",
    projectYear: "2025",
    projectStatus: "staging",
    isPrivateRepo: true,
    stackArea: "Mobile",
    projectLiveUrl: "https://drive.google.com/file/d/1aqWL14--FWzzEHyIdiXc3rK9P82ptIp-/view?usp=drive_link",
  },
  {
    images: ["/assets/images/portfolio/pointguard_cover.png"],
    projectTitle: "Pointguard | Credit Monitoring and Financial Literacy",
    projectDescription: `Led the complete frontend development of a mobile app designed to help users monitor their credit scores. This is a frontend-only application; please download and install the app to explore its features. Feel free to try any input as you navigate the UI. Core UI and feature implementation were delivered before the project was paused due to backend third-party integration issues.`,
    techStacks: "React Native, Expo, Android Release, Nativewind, Typescript, React-Query, Zustand, Google Sign-in",
    projectYear: "2025",
    projectStatus: "staging",
    projectLiveUrl: "https://drive.google.com/file/d/16M0fkx93egvCv-lckmwXcfSkCQq3uWy7/view?usp=drive_link",
    isPrivateRepo: true,
    stackArea: "Mobile",
  },

  {
    images: ["/assets/images/portfolio/sproost_cover.png"],
    projectTitle: "Sproost | Creating Instant Equity with Home Renovations",
    projectDescription: `Delivered 70% of the backend logic powering the mobile app, enabling users to plan renovations that build instant home equity. Supported both the admin web dashboard and the user-facing mobile app with scalable, API-driven features.`,
    projectLiveUrl: "https://www.gosproost.com/mobile-app",
    techStacks: "Python, Django-REST, API, RBAC Model, Cloud-messaging, Postgres, Redis, Signals, Cloudinary, Flutter",
    projectYear: "2025",
    projectStatus: "concluded",
    isPrivateRepo: true,
    stackArea: "Backend",
  },
  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/connouapp-website.jpg"],
    projectTitle: "Connou Website",
    projectDescription: `Developed and maintained the company website, ensuring a responsive and user-friendly experience. Focused on optimizing the website's performance and seamless integration to connect users with like-minded individuals.`,
    projectLiveUrl: "https://connou.app",
    techStacks: "React, NextJS, Typescript, Sanity CMS",
    projectYear: "2022",
    projectStatus: "concluded",
    stackArea: "Frontend",
  },
  {
    images: ["/assets/images/portfolio/MyRead_thumbnail.jpg"],
    projectTitle: "MyRead",
    isPrivateRepo: true,
    projectDescription: `Built a web application that helps users stay updated with a personalized book catalog. Features include searching for books, filtering by status (to read, currently reading, will read), and fetching book data from an external API. Focused on delivering a smooth and intuitive user experience for book discovery and organization.`,
    projectLiveUrl: "https://myreadnd.netlify.app/",
    techStacks: "HTML, CSS, JavaScript,React, BookAPI",
    projectYear: "2021",
    projectStatus: "concluded",
    stackArea: "Frontend",
  },
  {
    isPrivateRepo: true,
    images: ["/assets/images/portfolio/jobwhee.png"],
    projectTitle: "JobWhee Landing Page",
    projectDescription: `Built a landing page for JobWhee, a job search platform. Features include a search bar, filters, and a list of jobs. Focused on delivering a smooth and intuitive user experience for job seekers.`,
    projectLiveUrl: "https://jobwlee.vercel.app/",
    techStacks: "React, NextJS, TypeScript, TailwindCSS,",
    projectYear: "2025",
    projectStatus: "concluded",
    stackArea: "Frontend",
  },
]

const PortfolioSection = () => {
  const [maxPageNumber, setMaxPageNumber] = useState(6)
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filterOptions = ["All", "Frontend", "Backend", "Full-stack", "Mobile"]

  const filteredProjects = portfolioData.filter((project) => {
    if (activeFilter === "All") return true
    return project.stackArea === activeFilter
  })

  const handleLoadMore = () => {
    setMaxPageNumber(filteredProjects.length)
    setIsLoadMore(true)
  }
  const resetLoadMore = () => {
    setMaxPageNumber(6)
    setIsLoadMore(false)
  }

  const projectDatas = filteredProjects.slice(0, maxPageNumber)
  return (
    <section className='portfolio-section' id='portfolio'>
      <div className='container'>
        <div className='resumee__header mb-8'>
          <p className='resumee__header-subtitle !capitalize'>Showcase</p>
          <h2 className='resumee__header-title'>Featured Projects</h2>
        </div>

        <div className='flex flex-wrap justify-center gap-2 md:gap-4 mb-8'>
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setActiveFilter(option)
                setMaxPageNumber(6) // Reset pagination on filter change
                setIsLoadMore(false)
              }}
              className={`px-6 py-2.5 text-sm font-semibold outline-none border-none rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 
                ${
                  activeFilter === option
                    ? "bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white focus:ring-slate-500"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 1xl:grid-cols-3 gap-10'>
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
              stackAreaAlt={portfolio.stackAreaAlt}
            />
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className='portfolio-showmore mt-8'>
            <button className='btn-outline' onClick={isLoadMore ? resetLoadMore : handleLoadMore}>
              {isLoadMore ? "Hide" : filteredProjects.length > maxPageNumber ? "Show More" : "Hide"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioSection
