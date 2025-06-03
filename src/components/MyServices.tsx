"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import {useEffect, useRef} from "react"

const MyServices = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function autoScrollHorizontal(): () => void {
      const container = containerRef.current
      if (!container) return () => {}

      let scrollSpeed: number = 1 // Default scroll speed
      let autoScroll: NodeJS.Timeout
      let isScrolling: boolean = true

      function startAutoScroll(): void {
        autoScroll = setInterval(() => {
          if (!isScrolling) return

          // Check if we're at or near the end
          //@ts-ignore
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
            // Smoothly reset to the beginning with a small delay
            isScrolling = false
            setTimeout(() => {
              if (container) {
                container.scrollLeft = 0
                isScrolling = true
              }
            }, 500)
          } else {
            // @ts-ignore
            container.scrollLeft += scrollSpeed
          }
        }, 20) // The higher this value, the slower the scroll
      }

      function stopAutoScroll(): void {
        clearInterval(autoScroll)
      }

      const handleMouseEnter = (): void => {
        scrollSpeed = 0.2 // Slow down scrolling on hover
      }

      const handleMouseLeave = (): void => {
        scrollSpeed = 1 // Resume normal scrolling speed on mouse leave
      }

      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      // Start the auto scroll on page load
      startAutoScroll()

      // Cleanup function - return the function itself, don't call it
      return function cleanupFunc() {
        stopAutoScroll()
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    // Call autoScrollHorizontal and store its return value (the cleanup function)
    const cleanup = autoScrollHorizontal()

    // Return the cleanup function for useEffect
    return cleanup
  }, [])

  return (
    <section id='features' className='features-section'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 !items-start'>
          <div className='flex flex-col gap-5 w-full'>
            <div className='w-full  h-10/12 relative rounded-xl overflow-hidden shadow-md'>
              <img
                src='/assets/images/author/a-builder-at-heart.jpg' // Replace with your actual image path
                alt='Sofi in traditional attire'
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center italic'>
                A builder at heart—rooted in tradition, driven by tech.
              </div>
            </div>
            <div className='w-full '>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.2}}
                className='bg-slate-800 p-6 rounded-xl shadow-md w-full'
              >
                <h4 className='font-bold text-xl mb-6'>Technologies I Work With</h4>

                <div className='relative overflow-hidden'>
                  <div className='w-full'>
                    <div ref={containerRef} className='flex items-center gap-20 overflow-x-scroll hide-scroll'>
                      {[
                        {src: "/assets/images/icons/reactredux.png", label: "React"},
                        {src: "/assets/images/icons/icons-16.png", label: "React Native"},
                        {src: "/assets/images/icons/next-js.svg", label: "Next.js"},
                        {src: "/assets/images/icons/node-js.png", label: "Node.js"},
                        {src: "/assets/images/icons/icons-08.png", label: "Python"},
                        {src: "/assets/images/icons/mongodb.png", label: "MongoDB"},
                        {src: "/assets/images/icons/postgres.png", label: "PostgreSQL"},
                        {src: "/assets/images/icons/firebase-480.png", label: "Firebase"},
                        {src: "/assets/images/icons/aws-2.svg", label: "AWS"},
                        {src: "/assets/images/icons/docker-3.svg", label: "Docker"},
                        {src: "/assets/images/icons/express.png", label: "Express"},
                        {src: "/assets/images/icons/google-cloud-2.svg", label: "Google Cloud"},
                      ].map(({src, label}, i) => (
                        <div key={i} className='flex flex-col items-center p-3 bg-slate-700 rounded-lg transition-transform hover:scale-105 shrink-0'>
                          <div className='w-12 h-12 relative mb-2'>
                            <Image src={src} alt={label} fill className='object-contain' />
                          </div>
                          <span className='text-sm text-center'>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='features__introduce order-1 md:order-2'>
            <span className='features__introduce-subHeading'>About Me</span>
            <div className='features__introduce-wrapper'>
              <h2 className='features__introduce-heading'>I grow with every commit—and I always push forward.</h2>
              <span className='italic text-sm'>That&apos;s not just a line—it&apos;s how I consistently turn vision into real, working products.</span>
            </div>
            <div className='Summary__Details'>
              <div className='Summary__preview-text'>
                <p>
                  Hi, <strong>I&apos;m Sofiyullah &quot;Sofi&quot; Abdullah — a frontend-first full-stack engineer </strong> with 5+ years of experience
                  helping startups and product teams turn ideas into <strong>scalable, user-loved applications.</strong>
                  <br />
                  <br />I specialize in building clean, maintainable, and fast-performing products using{" "}
                  <strong> React, React Native, Next.js, TypeScript, Node.js, and Python/Django. </strong> I bridge the gap between beautiful interfaces
                  and solid backend logic—making sure everything feels seamless to your users and your dev team.
                  <br />
                  <br />
                  Whether you&apos;re building an MVP, scaling a live product, or redesigning a clunky UI, I bring more than just code—I bring a
                  product-first mindset, a sharp eye for UX, and a get-it-done attitude.
                  <br />
                  <br />
                  <strong>What You Get When We Work Together:</strong> <br />
                  ✅ Pixel-perfect UIs that delight users <br />
                  ✅ Clean full-stack code that&apos;s easy to scale and maintain
                  <br />
                  ✅ Product thinking baked into every feature
                  <br />
                  ✅ Speed without sacrificing quality
                  <br />
                  ✅ Clear communication and full ownership of delivery
                  <br />
                  <br />
                  I&apos;ve helped founders launch MVPs, led UI overhauls for web and mobile apps, and shipped production-ready apps in cross-functional
                  teams. I don&apos;t just write code—I solve real product and user challenges. <strong>Let&apos;s build something that matters.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
