import React, { useRef } from 'react'

export const ContentContext = React.createContext<any>({})

type ChildrenContextProps = {
  children: React.ReactNode
}

const ContentContextProvider = ({ children }: ChildrenContextProps) => {
  const homeRef = useRef<any>()
  const featureRef = useRef<any>()
  const resumeeRef = useRef<any>()
  const portfolioRef = useRef<any>()
  const testimonialRef = useRef<any>()
  const blogRef = useRef<any>()
  const contactRef = useRef<any>()

  const executeHomeScroll = () => homeRef.current.scrollIntoView()
  const executeFeatureScroll = () => featureRef.current.scrollIntoView()
  const executeResumeeScroll = () => resumeeRef.current.scrollIntoView()
  const executePortfolioScroll = () => portfolioRef.current.scrollIntoView()
  const executeTestimonialScroll = () => testimonialRef.current.scrollIntoView()
  const executeBlogScroll = () => blogRef.current.scrollIntoView()
  const executeContactScroll = () => contactRef.current.scrollIntoView()

  const values = {
    homeRef,
    featureRef,
    resumeeRef,
    portfolioRef,
    blogRef,
    testimonialRef,
    contactRef,
    executeHomeScroll,
    executeFeatureScroll,
    executePortfolioScroll,
    executeResumeeScroll,
    executeContactScroll,
    executeBlogScroll,
    executeTestimonialScroll,
  }

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  )
}

export default ContentContextProvider
