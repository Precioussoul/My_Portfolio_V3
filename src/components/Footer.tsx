"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className='footer-section mt-10'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__copyright'>
            <div className='footer__copyright-plane'>
              <p className='footer__copyright-text order-2 md:order-1'>
                Sofiyullah Abdullah (HABSOF) &copy; {new Date().getFullYear()}
              </p>

              <div className='footer__logo-box order-1 md:order-2'>
                <Link href='/' className='nav-logo'>
                  <div className='logo'>
                    <Image
                      src='/assets/images/author/Ai-sofiyullah.jpeg'
                      alt='website logo'
                      className='logo-image'
                      width={500}
                      height={500}
                    />
                  </div>
                  <span>HABSOF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer-container --> */}
      </div>
    </footer>
  )
}

export default Footer
