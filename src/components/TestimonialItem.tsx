"use client"
import Image from "next/image"
import React from "react"
import {TestimonialProps} from "types"

const TestimonialItem = ({author_speech, author_name, author_position, author_imageUrl}: TestimonialProps) => {
  return (
    <div className='testimonial p-6 rounded-lg shadow-md min-w-[500px]'>
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
          <p className='text-gray-600'>{author_position}</p>
        </div>
      </div>
      <p className='text-gray-700'>{author_speech}</p>
    </div>
  )
}

export default TestimonialItem
