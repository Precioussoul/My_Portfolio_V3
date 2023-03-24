export type featuresProps = {
  feature_heading: string
  feature_details: string
  highlightText?: string
  faIconBig: string
  faIconSmall: string
}
export type portfolioItemProps = {
  project_image_url: string
  projectlink: string
  project_detailsText: string
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
}

export type BlogItemProps = {
  blog_imageUrl: string
  blogPost_link: string
  blogCategory: string
  blog_ReadTime: string
  blogPost_name: string
}
