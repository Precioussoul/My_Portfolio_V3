import Link from "next/link"
import {FiExternalLink} from "react-icons/fi"
import {FaBuildingLock, FaGithub} from "react-icons/fa6"
import ProjectStatus from "./ProjectStatus"
import StackStatus from "./StackStatus"

export type NewPortFolioItemProps = {
  isPrivateRepo?: boolean
  images?: string[]
  projectTitle?: string
  projectDescription?: string
  projectLiveUrl?: string
  projectGitHubUrl?: string
  techStacks?: string
  isMobile?: boolean
  toRight?: boolean
  projectYear?: string
  projectStatus?: "ongoing" | "in-progress" | "concluded" | "paused" // New status prop
  stackArea?: "Frontend" | "Backend" | "Full-stack" | "Mobile" | "Database" | "UI/UX"
}

const NewPortfolioItem = ({
  isPrivateRepo,
  images = ["/assets/images/portfolio/businessAcc.png", "/assets/images/portfolio/businessHero.png", "/assets/images/portfolio/Aladdin-web.png"],

  projectTitle,
  projectGitHubUrl,
  projectDescription,
  projectLiveUrl,
  projectStatus,
  techStacks,
  isMobile,
  projectYear,
  stackArea = "Full-stack", // Default to Full-stack

  toRight,
}: NewPortFolioItemProps) => {
  return (
    <div
      className={`portfolio-new__item rounded-md ${
        projectStatus === "ongoing"
          ? "border-l-4 border-emerald-500"
          : projectStatus === "in-progress"
          ? "border-l-4 border-blue-500"
          : projectStatus === "concluded"
          ? "border-l-4 border-purple-500"
          : projectStatus === "paused"
          ? "border-l-4 border-amber-500"
          : ""
      }`}
    >
      <div
        style={{
          backgroundImage: `var(--portfolio-gradient),url(${images.length > 0 && images[0]})`,
        }}
        className={`portfolio-new__summary rounded-md order-1 md:order-1 bg-contain relative 
         `}
      >
        <div className={`portfolio-new__heading inline-flex flex-col   ${toRight ? "justify-start items-start" : "justify-end items-end"} w-full p-4`}>
          <h2 className='light-title font-bold mt-4 text-lg'>{projectTitle}</h2>
        </div>
        <div className={`w-11/12 flex flex-col gap-4 ${toRight ? "mr-auto" : "ml-auto"} mt-8  `}>
          <div className='bg-white dark:bg-slate-900/90 backdrop-blur rounded-tl-lg rounded-bl-lg shadow-lg p-4'>
            <p className='light-text  leading-relaxed text-sm line-clamp-4 w-full font-medium'>{projectDescription}</p>
          </div>
          <div className={`inline-flex flex-col w-full py-4 ${toRight ? "justify-start items-start" : "justify-end items-end"} `}>
            <div className='flex gap-2 items-center flex-wrap'>
              {techStacks &&
                techStacks.split(",").map((stack, idx) => (
                  <p
                    key={idx}
                    className='font-medium bg-gray-100 border-2 border-blue-500  dark:bg-gray-800 light-text rounded-xl shadow-sm p-2 !text-xs '
                  >
                    {stack}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end gap-3 p-4'>
          {projectGitHubUrl ? (
            <div className='bg-gray-200 dark:bg-gray-800 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
              <Link href={projectGitHubUrl} target={"_blank"}>
                <FaGithub size={18} className='text-blue-500' />
              </Link>
            </div>
          ) : (
            isPrivateRepo && (
              <div className='bg-gray-200 dark:bg-gray-800 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
                <FaBuildingLock size={18} className=' text-blue-500' />
              </div>
            )
          )}
          {projectLiveUrl && (
            <div className='bg-gray-200 dark:bg-gray-800 rounded-full w-[35px] h-[35px] flex items-center justify-center'>
              <Link href={projectLiveUrl} target='_blank'>
                <FiExternalLink size={18} className=' text-blue-500' />
              </Link>
            </div>
          )}
        </div>
        <div className='absolute top-4 left-4'>
          <div className='border border-blue-600 rounded-2xl bg-blue-800/70 dark:bg-gray-600/70 text-white text-sm font-semibold p-2 min-w-[50px] flex items-center justify-center backdrop-blur-md'>
            {projectYear}
          </div>
        </div>

        <div className='absolute bottom-4 left-4 flex gap-4 items-center'>
          {projectStatus && (
            <ProjectStatus status={projectStatus} size='sm' pulseAnimation={projectStatus === "ongoing" || projectStatus === "in-progress"} />
          )}

          {stackArea && <StackStatus stack={stackArea} size='sm' variant='chip' />}
        </div>
      </div>
    </div>
  )
}

export default NewPortfolioItem
