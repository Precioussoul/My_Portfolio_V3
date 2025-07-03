"use client"
import Image from "next/image"
import Link from "next/link"
import {GoDownload} from "react-icons/go"
import React, {useContext, useEffect, useState} from "react"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const [desktopNav, setDesktopNav] = useState(true)

  const openMobileNav = () => {
    setDesktopNav(false)
  }
  const closeMobileNav = () => {
    setDesktopNav(!desktopNav)
  }

  // Get the container element
  useEffect(() => {
    var naavy = window.document.querySelectorAll(".nav-link")
    var naavyMobile = window.document.querySelectorAll(".mobile-menu__nav-link")
    var length = naavy.length
    var lengthMobile = naavyMobile.length

    function highlight(element: any) {
      for (var i = 0; i < length; i++) {
        naavy[i].classList.remove("active")
      }

      element.classList.add("active")
    }

    function highlightMobile(element: any) {
      for (var i = 0; i < length; i++) {
        naavyMobile[i].classList.remove("active")
      }

      element.classList.add("active")
    }

    for (var i = 0; i < length; i++) {
      naavy[i].addEventListener("click", function () {
        // @ts-ignore
        highlight(this)
      })
    }
    for (var i = 0; i < lengthMobile; i++) {
      naavyMobile[i].addEventListener("click", function () {
        //@ts-ignore
        highlightMobile(this)
      })
    }

    function getSectionScrollIntoView() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault()

          const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute("href")!)
          if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
            history.pushState(null, "", (e.currentTarget as HTMLAnchorElement).getAttribute("href")!)

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        })
      })
    }

    getSectionScrollIntoView()
  }, [])

  return (
    <>
      {desktopNav ? (
        <header id='header' className='main_header'>
          <div className='container'>
            <nav className='navbar desktop-menu'>
              <Link href='/' className='nav-logo'>
                <div className='logo'>
                  <Image src='/assets/images/author/Ai-sofiyullah.jpeg' alt='website logo' className='logo-image' width={300} height={300} />
                </div>
                <span>HABSOF</span>
              </Link>

              <ul className='nav-list'>
                <li className='nav-item'>
                  <a href='#home' className='nav-link active'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#portfolio' className='nav-link'>
                    Portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#resumee' className='nav-link'>
                    Experience
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#features' className='nav-link features__link'>
                    About Me
                  </a>
                </li>

                <li className='nav-item'>
                  <a href='#testimonial' className='nav-link'>
                    Testimonial
                  </a>
                </li>
              </ul>
              <div className='flex items-center gap-2'>
                <button className='hamburger-menu' onClick={openMobileNav}>
                  <i className='fas fa-bars'></i>
                </button>
                <a href='mailto:habsoff@gmail.com' className='group hidden lg:block'>
                  <div className='relative flex items-center justify-center px-6 py-3 font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl hover:from-blue-600 hover:to-blue-700 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px] border border-transparent hover:border-white/20'>
                    <span className='font-semibold tracking-wide'>Let&apos;s Talk</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <div className='mobile-navigation' onClick={closeMobileNav}>
          <nav className='mobile-menu-popup'>
            <div className='menu-top'>
              <div className='mobile-menu__intro'>
                <div className='nav-logo'>
                  <div className='logo'>
                    <Image src='/assets/images/author/Ai-sofiyullah.jpeg' alt='website logo' className='logo-image' width={300} height={300} />
                  </div>
                  <span>HABSOF</span>
                </div>
                <button className='close-btn' onClick={closeMobileNav}>
                  <i className='fas fa-times'></i>
                </button>
              </div>
              <div className='mobile-menu__intro-details'>
                <h3 className='mobile-menu__author-name'>
                  Hi, i&apos;m
                  <span className='name-highlight pka-line'> Sofiyullah Abdullah</span>
                </h3>
                <div className='mobile-menu__author-title'>
                  <h1>A</h1>
                  <h1 className='typing-text'></h1>
                </div>
                <p className='mobile-menu__author-summary'>
                  I am a software engineer specialized and focused on building Pixel-Perfect Frontend, simple and complex backend and provision cloud-based
                  solutions to deliver excellence digital product.
                </p>
              </div>
            </div>

            <ul className='mobile-menu__nav-list'>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link active'>Home</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link'>About Me</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link'>Experience</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link'>Portfolio</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link'>Testimonial</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span className='mobile-menu__nav-link'>Contact</span>
              </li>
              <li className='mobile-menu__nav-item'>
                <a href='public/assets/images/author/Sofiyullah_full-stackFrontend.pdf' download className='btn-secondary contact-me'>
                  Resume
                </a>
              </li>
            </ul>
            <div className='mobile-menu find-me'>
              <h3 className='mobile-menu find-text'>Find me with</h3>
              <ul className='mobile-menu social-icon-list'>
                <li className='mobile-menu social-item'>
                  <Link href='https://web.facebook.com/profile.php?id=100065549805843' className='social-link'>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                </li>
                <li className='mobile-menu social-item'>
                  <Link href='https://wa.me/+2347066017184' className='social-link'>
                    <i className='fab fa-whatsapp'></i>
                  </Link>
                </li>

                <li className='mobile-menu social-item'>
                  <Link href='https://www.linkedin.com/in/sofiyullah-abdullah' className='social-link'>
                    <i className='fab fa-linkedin-in'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}

      {/* mobile navigation */}
    </>
  )
}

export default Header
