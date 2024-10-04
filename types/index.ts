import {IconType} from "react-icons"

export type featuresProps = {
  feature_heading: string
  feature_details: string
  highlightText?: string
  isActive?: boolean
  Icon?: IconType
  ratingNumer?: number
}
export type portfolioItemProps = {
  project_image_url: string
  projectlink: string
  project_detailsText: any
  projectTechStack: string
  project_category: string
  project_name: string
  projectGithubLink?: string
}
export type TestimonialProps = {
  author_speech: string
  author_name: string
  author_position: string
  author_imageUrl: string
  is_long_speech?: boolean
}

export type BlogItemProps = {
  blog_imageUrl: string
  blogPost_link: string
  blogCategory: string
  blog_ReadTime: string
  blogPost_name: string
}
