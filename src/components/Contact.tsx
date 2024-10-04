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
          <p className='text-lg text-center w-full md:w-1/2'>
            Let&apos;s start an amazing journey together. I&apos;m currently open to discuss new opportunities. My Inbox is always open and active.
            Typically reply within few minutes.
          </p>
          <div className='mt-16'>
            <a href='mailto:habsoff@gmail.com' className='btn-outline greeting__color '>
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
