import Image from 'next/image'
import React from 'react'
import { TestimonialProps } from 'types'

const TestimonialItem = ({
  author_speech,
  author_name,
  author_position,
  author_imageUrl,
}: TestimonialProps) => {
  return (
    <div className='testimonial__box'>
      <div className='testimonial__author'>
        <div className='testimonial__author-image'>
          <Image
            src={author_imageUrl}
            alt='BeeSpeed CEO'
            className='testimonial-img'
            width={64}
            height={64}
          />
        </div>
        <div className='testimonial__author-rating'>
          <i className='fa fa-star testimonial__rating-icon'></i>
          <i className='fa fa-star testimonial__rating-icon'></i>
          <i className='fa fa-star testimonial__rating-icon'></i>
          <i className='fa fa-star testimonial__rating-icon'></i>
          <i className='fa fa-star testimonial__rating-icon'></i>
        </div>
        <p className='testimonial__author-speech'>{author_speech}</p>
        <span className='testimonial__author-speech-divider' />
        <div className='testimonial__author-name'>{author_name}</div>
        <div className='testimonial__author-position'>{author_position}</div>
      </div>
    </div>
  )
}

export default TestimonialItem
