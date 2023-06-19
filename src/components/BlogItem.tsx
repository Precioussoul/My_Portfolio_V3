"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {BlogItemProps} from "types"

const BlogItem = ({
  blog_imageUrl,
  blogPost_link,
  blogCategory,
  blog_ReadTime,
  blogPost_name,
}: BlogItemProps) => {
  return (
    <div className='blog__item'>
      <div className='blog__image-box'>
        <Link href={blogPost_link} id='Health-post'>
          <Image
            src={blog_imageUrl}
            width={500}
            height={500}
            alt='blog image'
          />
        </Link>
      </div>
      <div className='blog__details'>
        <div className='blog__category'>
          <Link
            href={blogPost_link}
            id='Health-post'
            className='blog__category-name'
          >
            {blogCategory}
          </Link>
          <span className='blog__minute'>
            <i className='far fa-clock blog__minute-icon'></i>
            {blog_ReadTime}
          </span>
        </div>
        <div className='blog__post-name-box'>
          <Link
            href={blogPost_link}
            id='Health-post'
            className='blog__post-name'
          >
            {blogPost_name} <br />
            <div className='blog__link-box'>
              <i className='fas fa-location-arrow blog__link-icon'></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
