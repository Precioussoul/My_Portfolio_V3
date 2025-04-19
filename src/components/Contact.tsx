"use client"

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className='container'>
        <div className='contact__header mt-16'>
          <p className='contact__header-subtitle'>What’s next 👨‍💻</p>
          <h2 className='contact__header-title'>Get In Touch</h2>
        </div>

        <div className='contact__hint flex items-center flex-col justify-center'>
          <p className='text-lg text-center w-full md:w-1/2 leading-10'>
            If you’re looking for someone who respects the opportunity, values your time and trust, and delivers with integrity — I’m ready. I may not know
            it all, but I learn fast, adapt faster, and I always show up. Let’s build something great together.
          </p>
          <div className='mt-16'>
            <a href='mailto:habsoff@gmail.com' className='btn-outline greeting__color'>
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
