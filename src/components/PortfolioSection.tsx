import {ContentContext} from "@/contexts/ScrollContext"
import React, {useContext} from "react"
import PortfolioItem from "./PortfolioItem"

const PortfolioSection = () => {
  const {portfolioRef} = useContext(ContentContext)
  return (
    <section
      className='portfolio-section'
      id='Portfolio'
      ref={portfolioRef}
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-anchor-placement='top-bottom'
    >
      <div className='container'>
        <div className='portfolio__header'>
          <p className='portfolio__header-subtitle'>
            Some Recent and NoteWorthy projects. 👨‍💻
          </p>
          <h2 className='portfolio__header-title'>Portfolio</h2>
          <p className='sm-prjt'>
            I Seek Knowledge and Growth...Definitely going to Improve
          </p>
          <p className='sm-prjt'></p>
        </div>
        <div className='portfolio__grid'>
          <PortfolioItem
            projectlink='https://lytebox.web.app/'
            project_image_url='/assets/images/portfolio/hbs drive.png'
            project_detailsText=' A Full-Stack Cloud Storage web application that work similar to
            Google Drive. User can upload files, delete, starred favorites ,
            download etc.'
            projectTechStack='React,
            Firebase(Authentication, Cloud Storage, Firestore Database
            etc.),Material UI and SASS'
            project_category='Web application'
            project_name='Lytebox - Cloud Storage Drive'
            projectGithubLink='https://github.com/Precioussoul/Lytebox'
          />
          <PortfolioItem
            projectlink='https://sooratheapp.com/'
            project_image_url='/assets/images/portfolio/soorapp.png'
            project_detailsText='A social media app for Muslims and non Muslims to interact with each other, sharing pictures, videos & going on lives together..Worked as a volunteering React-Native Engineer at SooraLTD for months and Implemented lots of tickets and completed all frontend tickets before leaving'
            projectTechStack='React-Native, Typescript, Nest.JS, MongoDB'
            project_category='Mobile application'
            project_name='Soora app - (Coming soon) '
          />
          <PortfolioItem
            projectlink='https://connou.app'
            project_image_url='/assets/images/portfolio/connouapp-website.jpg'
            project_detailsText=' Connou | The App that Connects You with Like-minded Humans.Working at connou as a full-time software developer, responsible for development of the company website and also contribute to the development of the company mobile app using flutter'
            projectTechStack='React,NextJS, Typescript, and Sanity CMS for content management'
            project_category='Company website'
            project_name='Connou | The App that Connects You with Like-minded Humans.'
          />
          <PortfolioItem
            projectlink='https://github.com/Precioussoul/Cloud-Image-Filter'
            project_image_url='/assets/images/portfolio/cloud-image-filter.png'
            project_detailsText='Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.'
            projectTechStack='AWS ElasticBeanstalk, NodeJS, Express, AWS S3'
            project_category='Cloud Backend with AWS'
            project_name='Udagram Image Filtering Microservice'
            projectGithubLink='https://github.com/Precioussoul/Cloud-Image-Filter'
          />

          <PortfolioItem
            projectlink='https://luluweb.netlify.app/'
            project_image_url='/assets/images/portfolio/Lulu-game-africa.jpg'
            project_detailsText=' Lulu is a gaming application built on top of blockchain to reward users for keeping their africa dialect by translating words to different Africa languages and earn a token and LuLu NFT. Worked with MyComDAO as a volunteer Frontend Developer as a infant startup'
            projectTechStack='HTML, CSS  and JavaScript'
            project_category='Company website V1'
            project_name='Lulu Game (coming soon)'
          />

          <PortfolioItem
            projectlink='https://github.com/Precioussoul/Monolith_to_Microservices'
            project_image_url='/assets/images/portfolio/microservice3-min.png'
            project_detailsText='Udagram is a monolithic web application broken down into microservices such that database is AWS RDS, the backend is NodeJS and is further broken down into two microservices (user API, and feed API) and connected together with reverse-proxy nginx and the frontend is listening to the API on exposed port on LoadBalancer 8080 inside AWS EKS.'
            projectTechStack='React-Iconic,Typescript, NodeJS, Express, travis CI, Docker, Kubernetes,AWS EKS, and Shell '
            project_category='Microservice Architecture'
            project_name='Monolithic application breakdown to Microservice'
            projectGithubLink='https://github.com/Precioussoul/Monolith_to_Microservices'
          />

          <PortfolioItem
            projectlink='https://wouldrathergame.netlify.app/'
            project_image_url='/assets/images/portfolio/WouldRatherGame_thumbnail.jpg'
            project_detailsText='A Poll Game that allow users to answer questions, create poll questions and see leaderboard of users with most answered questions.'
            projectTechStack='HTML, CSS, JavaScript,React, Redux and Semantic UI'
            project_category='Web application '
            project_name='Would rather game'
            projectGithubLink='https://github.com/Precioussoul/Would-You-Rather-ND-Project-2'
          />
          <PortfolioItem
            projectlink='https://cutt.ly/UUeawGs'
            project_image_url='/assets/images/portfolio/Fitness-Tracker.jpg'
            project_detailsText='A Fitness Tracker Mobile application that help fitness enthusiast to keep track of their daily exercise with historys. The app also have geo-spartial location feature enabled which tell users the direction they are heading to. Built with React Native, React Navigation, Async Storage etc. and other native features.'
            projectTechStack='React-Native, React Navigation, Async Storage,and other native features'
            project_category='Mobile-application'
            project_name='Fitness Tracker App'
            projectGithubLink='https://github.com/Precioussoul/Fitness-Tracker---Mobile-Application'
          />
          <PortfolioItem
            projectlink='https://3rdaugustgroup.org/'
            project_image_url='/assets/images/portfolio/3rdAugust.jpg'
            project_detailsText='A Muiltipurpose Company websites grouped together with a single codebase. Three companies websites linked together as demanded by the clients to save costs. Built with WordPress, Custom CSS, Javascript, Elementor pro page builder and adds-on plugins.'
            projectTechStack='HTML, CSS, JavaScript, and WordPress'
            project_category='Company website'
            project_name='3rd August Company'
          />
          <PortfolioItem
            projectlink='https://myreadnd.netlify.app/'
            project_image_url='/assets/images/portfolio/MyRead_thumbnail.jpg'
            project_detailsText='A web application that keep you updated of list of books , you can search for books, filter catalog options (to read now, Currently reading and will read). Bult with React, CSS, and Use Book API to fetch data.'
            projectTechStack='HTML, CSS, JavaScript,React and BookAPI'
            project_category='Web application '
            project_name='My Read Web application'
            projectGithubLink='https://github.com/Precioussoul/MyRead----Book-lending-App-React-Nd'
          />
          <PortfolioItem
            projectlink='https://monsuratajokefoundation.com.ng/'
            project_image_url='/assets/images/portfolio/mafoundation.jpg'
            project_detailsText='A Charity Foundation website built with the purpose of showcasing their work to partners through online presence. visitor can also make donations. Built with WordPress, Custom SVG, Custom CSS, Elementor Page Builder and other Add-ons Plugins.'
            projectTechStack='HTML, CSS, JavaScript and Wordpress'
            project_category='Company website'
            project_name='Ma Foundation'
          />
          <PortfolioItem
            projectlink='https://medium-cms.vercel.app'
            project_image_url='/assets/images/portfolio/medium-blog-website.jpg'
            project_detailsText='A blog powered by next.js and sanity cms where you can manage content from the content management system and it will reflect on the website'
            projectTechStack='HTML, CSS, JavaScript and Next.js and SANITY CMS'
            project_category='Blog website'
            project_name='Medium Blog Powered by CMS'
          />
        </div>
        {/* <div className='portfolio-showmore'>
          <button className='btn-outline'>Show more</button>
        </div> */}
      </div>
    </section>
  )
}

export default PortfolioSection
