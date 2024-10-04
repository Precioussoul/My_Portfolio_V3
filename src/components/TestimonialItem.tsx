"use client"
import Image from "next/image"
import React from "react"
import {TestimonialProps} from "types"

const TestimonialItem = ({author_speech, author_name, author_position, author_imageUrl, is_long_speech}: TestimonialProps) => {
  return (
    <div className={`testimonial bg-[var(--hero-bg)] p-6 rounded-lg shadow-md ${is_long_speech ? "min-w-[700px]" : "min-w-[500px]"}`}>
      <div className='flex items-center mb-4'>
        <Image
          src={author_imageUrl}
          alt='Mike Johnson'
          className='w-12 h-12 object-cover border-2 border-[var(--color-highlighted)] rounded-full mr-4'
          width={100}
          height={100}
        />
        <div>
          <h3 className='font-semibold text-lg highlighted'>{author_name}</h3>
          <p className='text-gray-600 text-[0.9rem]'>{author_position}</p>
        </div>
      </div>
      <p className='text-gray-700 text-[0.9rem] leading-5'>{author_speech}</p>
    </div>
  )
}

export default TestimonialItem
