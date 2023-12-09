import React from "react"
import {FaMinus} from "react-icons/fa6"
import {TiArrowRightOutline} from "react-icons/ti"

type ExperienceItemProps = {
  role: string
  company: string
  start_date: string
  end_date?: string
  bullet_points: string[]
  isPresent?: boolean
}

const ExperienceItem = ({
  role,
  company,
  start_date,
  end_date,
  isPresent,
  bullet_points,
}: ExperienceItemProps) => {
  return (
    <div className='experience_item'>
      <div className=''>
        <h3 className='text-[0.94rem] md:text-xl'>
          {role} @ <span className='highlighted'>{company}</span>
        </h3>
        <div className='flex items-center gap-4 mt-2'>
          <span className='text-[0.9rem]'>{start_date}</span>
          <FaMinus />
          <span className='text-[0.9rem]'>
            {isPresent ? "Present" : end_date}
          </span>
        </div>
      </div>
      <div className=''>
        {bullet_points.map((point, idx) => (
          <div className='flex gap-4 items-start mt-4' key={idx}>
            <TiArrowRightOutline className='highlighted' size={22} />
            <p className='flex-1 text-[0.9rem] leading-6'>{point}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem
