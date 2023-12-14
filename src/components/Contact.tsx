"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import Image from "next/image"
import Link from "next/link"
import React, {useContext} from "react"

const Contact = () => {
  const {contactRef} = useContext(ContentContext)
  return (
    <section className='contact-section' id='Contact' ref={contactRef}>
      <div className='container'>
        <div className='contact__header'>
          <p className='contact__header-subtitle'>What&apos;s next 👨‍💻</p>
          <h2 className='contact__header-title'>Get In Touch</h2>
        </div>

        {/* <!-- contact grid ends here --> */}
        <div className='contact__hint flex items-center flex-col justify-center'>
          <p className='text-lg text-center w-1/2'>
            Let&apos;s start an amazing journey together. I&apos;m currently
            open to discuss new opportunities. My Inbox is always open and
            active. Typically reply within few minutes.
          </p>
          <div className='mt-14'>
            <a
              href='mailto:habsoff@gmail.com'
              className='btn-outline greeting__color '
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

/* 

       <div className='contact__grid'>
          <div className='contact__intro-box'>
            <div className='contact__image-box'>
              <Image
                src='/assets/images/contact/contact1.png'
                alt='let connect handshake'
                width={500}
                height={500}
              />
            </div>
            <div className='contact__intro-text'>
              <div className='contact__intro-heading'>
                <h3 className='contact__intro-heading-title'>
                  Sofiyullah Abdullah
                </h3>
                <p className='contact__intro-heading-subtitle'>
                  Full-Stack Software Developer | Front-End Developer | Cloud
                  Developer
                </p>
              </div>
               <div className='contact__intro-offer'>
                <p className='contact__intro-job'>
                  I am open to Full-time job and Freelance work. Connect with me
                  via gmail and call in on my account.
                </p>
                <ul className='contact__intro-channel-list'>
                  <li className='contact__intro-phone'>
                    Phone:
                    <Link href='tel: +2347066017184'>+2347066017184</Link>
                  </li>
                  <li className='contact__intro-email'>
                    Email:
                    <Link href='mailto:habsoff@gmail.com'>
                      habsoff@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
               <div className='contact find-me'>
                <h3 className='contact find-text'>Hire Me</h3>
                <p className='contact hire_me'>
                  You will never regret it. Mark my word
                </p>

                 <ul className='contact social-icon-list'>
                  <li className='social-item'>
                    <Link
                      href='https://web.facebook.com/profile.php?id=100065549805843'
                      className='social-link'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </Link>
                  </li>
                  <li className='social-item'>
                    <Link
                      href='https://wa.me/message/BRIY767QKKCIL1'
                      className='social-link'
                    >
                      <i className='fab fa-whatsapp'></i>
                    </Link>
                  </li>
                  <li className='social-item'>
                    <Link
                      href='https://twitter.com/sofiyullah_dev'
                      className='social-link'
                    >
                      <i className='fab fa-twitter'></i>
                    </Link>
                  </li>

                  <li className='social-item'>
                    <Link
                      href='https://www.linkedin.com/in/sofiyullah-abdullah'
                      className='social-link'
                    >
                      <i className='fab fa-linkedin-in'></i>
                    </Link>
                  </li>
                </ul> 
                <Link
                  href='public/assets/images/author/Sofiyullah_full-stackFrontend.pdf'
                  download
                  className='Download-btn mt-6'
                >
                  Download CV
                </Link>
              </div>
             </div>
          </div>
           <div className='contact__form-box'>
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              className='contact__form'
            >
              <div className='form-group'>
                <div className='input-group name-column'>
                  <label htmlFor='yourName' className='form-label'>
                    Your name
                  </label>
                  <input
                    type='text'
                    id='yourName'
                    className='form-control'
                    name='name'
                    placeholder=' Enter Your name'
                    required
                  />
                </div>
              </div>
              <div className='input-group'>
                <label htmlFor='Email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  id='Email'
                  className='form-control'
                  name='email'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='subject' className='form-label'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='form-control'
                  name='subject'
                  placeholder="Tell me what's on your mind 🥰"
                  required
                />
              </div>
              <div className='input-group'>
                <label htmlFor='message' className='form-label'>
                  Your Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Your message'
                  className='form-control__textarea'
                  required
                ></textarea>
              </div>
              <div className='input-group'>
                <div data-netlify-recaptcha='true'></div>
              </div>
              <button className='submit-btn'>
                Send Message <i className='fas fa-arrow-right'></i>
              </button>
            </form>
          </div>
         </div>
*/
