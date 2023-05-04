"use client"
import {ContentContext} from "@/contexts/ScrollContext"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import React, {useContext, useEffect, useState} from "react"

const Header = () => {
  const [desktopNav, setDesktopNav] = useState(true)
  const {
    executeHomeScroll,
    executeFeatureScroll,
    executeResumeeScroll,
    executePortfolioScroll,
    executeTestimonialScroll,
    executeBlogScroll,
    executeContactScroll,
    mode,
    setMode,
  } = useContext(ContentContext)

  console.log("====================================")
  console.log(mode)
  console.log("====================================")
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
  }, [])

  return (
    <>
      {desktopNav ? (
        <header id='header' className='main_header'>
          <div className='container'>
            <nav className='navbar desktop-menu'>
              <Link href='/' className='nav-logo'>
                <div className='logo'>
                  <Image
                    src='/assets/images/logo/habsof-logo.png'
                    alt='website logo'
                    className='logo-image'
                    width={300}
                    height={300}
                  />
                </div>
                <span>HABSOF</span>
              </Link>
              <button className='hamburger-menu' onClick={openMobileNav}>
                <i className='fas fa-bars'></i>
              </button>
              <ul className='nav-list'>
                <li className='nav-item'>
                  <span className='nav-link active' onClick={executeHomeScroll}>
                    Home
                  </span>
                </li>
                <li className='nav-item'>
                  <span
                    className='nav-link features__link'
                    onClick={executeFeatureScroll}
                  >
                    Features
                  </span>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={executeResumeeScroll}>
                    Resume
                  </span>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={executePortfolioScroll}>
                    Portfolio
                  </span>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={executeTestimonialScroll}>
                    Testimonial
                  </span>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={executeBlogScroll}>
                    Blog
                  </span>
                </li>
              </ul>
              <div>
                <span className='toggle-mode-container tooltip'>
                  <i className={"far fa-sun toggle-icon "} />
                  <span className='tooltiptext'>
                    Change system setting to dark/light mode
                  </span>
                </span>
                <span
                  className='btn-secondary contact-me'
                  onClick={executeContactScroll}
                >
                  Contact Me
                </span>
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
                    <Image
                      src='/assets/images/logo/habsof-logo.png'
                      alt='website logo'
                      className='logo-image'
                      width={300}
                      height={300}
                    />
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
                  <span className='name-highlight pka-line'>
                    {" "}
                    Sofiyullah Abdullah
                  </span>
                </h3>
                <div className='mobile-menu__author-title'>
                  <h1>A</h1>
                  <h1 className='typing-text'></h1>
                </div>
                <p className='mobile-menu__author-summary'>
                  I am a software engineer specialized and focused on building
                  Pixel-Perfect Frontend, simple and complex backend and
                  provision cloud-based solutions to deliver excellence digital
                  product.
                </p>
              </div>
            </div>

            <ul className='mobile-menu__nav-list'>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link active'
                  onClick={executeHomeScroll}
                >
                  Home
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executeFeatureScroll}
                >
                  Features
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executeResumeeScroll}
                >
                  Resume
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executePortfolioScroll}
                >
                  Portfolio
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executeTestimonialScroll}
                >
                  Testimonial
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executeBlogScroll}
                >
                  Blog
                </span>
              </li>
              <li className='mobile-menu__nav-item'>
                <span
                  className='mobile-menu__nav-link'
                  onClick={executeContactScroll}
                >
                  Contact
                </span>
              </li>
            </ul>
            <div className='mobile-menu find-me'>
              <h3 className='mobile-menu find-text'>Find me with</h3>
              <ul className='mobile-menu social-icon-list'>
                <li className='mobile-menu social-item'>
                  <Link
                    href='https://web.facebook.com/profile.php?id=100065549805843'
                    className='social-link'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                </li>
                <li className='mobile-menu social-item'>
                  <Link
                    href='https://wa.me/message/BRIY767QKKCIL1'
                    className='social-link'
                  >
                    <i className='fab fa-whatsapp'></i>
                  </Link>
                </li>

                <li className='mobile-menu social-item'>
                  <Link
                    href='https://www.linkedin.com/in/sofiyullah-abdullah'
                    className='social-link'
                  >
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
