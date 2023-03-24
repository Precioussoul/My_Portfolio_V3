import React from 'react'
import BlogItem from './BlogItem'

const BlogSection = () => {
  return (
    <section
      className='blog-section'
      id='Blog'
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-anchor-placement='top-center'
      data-aos-delay='600'
    >
      <div className='container'>
        <div className='blog__header'>
          <p className='blog__header-subtitle'>
            i write about CloudNative Software Development 👨‍💻
          </p>
          <h2 className='blog__header-title'>My blog</h2>
        </div>
        <div className='blog__grid'>
          <BlogItem
            blogPost_link='https://habsof.hashnode.dev/learn-docker-and-containerization-the-easy-way'
            blogPost_name='Learn Docker and Containerization - The Easy Way'
            blogCategory='DevOps'
            blog_ReadTime='8 min read'
            blog_imageUrl='/assets/images/blog/docker image.webp'
          />
          <BlogItem
            blogPost_link='https://habsof.hashnode.dev/continuous-deployment-to-aws-using-kubernetes'
            blogPost_name='Continuous Deployment to AWS using Kubernetes'
            blogCategory='DevOps + Cloud'
            blog_ReadTime='12 min read'
            blog_imageUrl='/assets/images/blog/AWS EKS.jfif'
          />
          <BlogItem
            blogPost_link='https://habsof.hashnode.dev/orchestration-with-kubernetes-the-beginner-guide'
            blogPost_name='Orchestration with Kubernetes - The Beginner guide'
            blogCategory='DevOps'
            blog_ReadTime='12 min read'
            blog_imageUrl='/assets/images/blog/kubernetes banner.webp'
          />
        </div>
        <div className='blog-more'>
          <a href='https://habsof.hashnode.dev' className='btn-secondary'>
            Read More Blog
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
