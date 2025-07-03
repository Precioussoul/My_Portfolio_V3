"use client"

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className='container'>
        <div className='contact__header mt-16'>
          <p className='contact__header-subtitle'>What&apos;s next 👨‍💻</p>
          <h2 className='contact__header-title'>Get In Touch</h2>
        </div>

        <div className='contact__hint flex items-center flex-col justify-center'>
          <p className='md:text-lg text-center w-full md:w-1/2 md:leading-10 leading-10'>
            If you&apos;re looking for someone who respects the opportunity, values your time and trust, and delivers with integrity — I&apos;m ready. I
            may not know it all, but I learn fast, adapt faster, and I always show up. Let&apos;s build something great together.
          </p>
          <div className='mt-16 flex flex-col items-center gap-4'>
            <div className='flex flex-wrap justify-center gap-4'>
              <a href='mailto:habsoff@gmail.com' className='btn-outline greeting__color px-6 py-3 rounded-md hover:bg-blue-800 transition-colors'>
                Email Me
              </a>
              <a
                href='https://www.linkedin.com/in/sofiyullah-abdullah' // Replace with your LinkedIn profile
                target='_blank'
                rel='noopener noreferrer'
                className='btn-outline greeting__color px-6 py-3 rounded-md hover:bg-blue-800 transition-colors'
              >
                LinkedIn
              </a>
            </div>
            <small className='text-center my-2 block'>I&apos;m currently open to discussing new projects and opportunities</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
