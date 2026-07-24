import utilityService from "@/services/utilityService"
import ScrollSection from "../types/ScrollSection"
import SectionText from "../types/SectionText"
import { RiFilmLine, RiGithubFill, RiLinkedinBoxFill, RiProfileLine } from "@remixicon/react"

const sectionsTexts: Record<ScrollSection, SectionText | null> = {
   initial: null,
   start: null,
   introduction: {
      title: `Vinícius Roveri Rocha`,
      descriptions: [
         `Hi! My name is Vinícius Roveri and I'm a Web Developer and Animator specialized in Front-End Development since 2022!`
      ]
   },
   about: {
      title: `About Me`,
      descriptions: [
         `Graduated in Animation Design and migrating to a career as a programmer, throughout my journey I always knew how to combine technical knowledge with an artistic vein, and I used this to bring a differential to any project I participated in, always bringing together the best of the valences of reasoning logic and solving problems with the lightness and creativity inherent to art.`
      ]
   },
   experience: {
      title: `Experience`,
      descriptions: [
         `Let's explore what I'm capable of doing!`,
         `The tools I use on my work and projects mainly include NextJS, React, Typescript, JavaScript, Tailwind, SASS, Razor Pages, CSS and HTML for the Front-End; REST APIs, C# with ASP.NET, NodeJS, Express, MongoDB, SQL and NoSQL for the Back-End; and Git for code versioning.`
      ]
   },
   experience1: {
      title: `Web Developer`,
      jobCompany: `Avanade`,
      jobTime: `06/2025 to Present (${utilityService.getCurrentJobTime(6, 2025)})`,
      descriptions: [
         `Working as a Web Developer with international teams for projects of Avanade's biggest clients all around the world. I work along teams with people from the US, Canada, Japan, India and Philippines. I use the stack of Next.js and React on the Frontend; C# for ASP.NET and Python for Flask on the Backend; allied with the use of the Azure platform for Infrastructure, CI/CD and Cloud Computing. On top of the development, I'm also responsible for the UI/UX layout definition of the apps, thanks to my previous knowledge and graduation on the visual/design field. Every project also uses the Scrum agile methodology for team productivity management, and the Git tools for code maintenance.`
      ]
   },
   experience2: {
      title: `Web Developer`,
      jobCompany: `Rumo Soluções`,
      jobTime: `04/2023 to 04/2025 (2 years)`,
      descriptions: [
         `Worked as a web developer, acting as full-stack but heavily focused on front-end, I used Asp.Net and Razor Pages, allied to the HTML, CSS and JavaScript, to create SaaS apps for businesses focusing on delivering them the most user-friendly and performatic way possible. Thanks to my art background I also worked on the design of the UI/UX, and that expertise combined with my coding skills made me the most reliable and prestigious front-end dev of the company the time I was there. My work also extended to the planning of the projects, with me being in many alignment meetings both with our clients and with the other devs of the team, and also to the CI/CD with me using Azure to manage the pipelines that deploy the projects. Finally, I worked under the Scrum methodology, managing to deliver the greatest final product within the most efficient time possible.`
      ]
   },
   experience3: {
      title: `My Portfolio`,
      jobCompany: `Personal Project`,
      jobTime: `12/2022 to Present (${utilityService.getCurrentJobTime(12, 2022)})`,
      descriptions: [
         `The project you are seeing right now! This is the project where I showcase all my abilities in Web Development, UX design, Motion Graphics and 3D Modelling, all merged together in one single piece. Made using various professional and industry standard tools for the front-end development such as the NextJS framework, GSAP for JavaScript animations, React Three Fiber which is an extension of the ThreeJS library, Bodymovin & Lottie-Web for making After Effects animations web-ready, and a whole more that when combined with the standard NextJS, React, Typescript & Tailwind, create the art you see on the screen.`
      ],
      repoLink: 'https://github.com/ViniRoveri/PortfolioViniciusRoveri'
   },
   education: {
      title: `Education`,
      descriptions: [
         `- I have over 700 hours of courses completed at Alura, the biggest tech online school in Brazil. This knowledge, as already shown in the Experience and Tools parts, covers all the necessary technologies in Web Development, and everything that can be deepened within each.`,
         `- I graduated in Animation Design at Faculdade Melies, one of the most prestigious art colleges in South America. This graduation gave me all the foundation of the art, animation and modelling concepts I have today.`,
         `- I speak English, Spanish and Portuguese fluently, and am currently studying German having intermediary proficiency.`
      ]
   },
   links: {
      title: `My Links`,
      links: [
         {
            icon: RiLinkedinBoxFill,
            title: 'My LinkedIn',
            url: 'https://www.linkedin.com/in/vinicius-roveri/?locale=en_US'
         },
         {
            icon: RiProfileLine,
            title: 'My Resume',
            url: '/pdf/CV Vinícius Roveri Rocha.pdf'
         },
         {
            icon: RiGithubFill,
            title: 'My Github',
            url: 'https://github.com/ViniRoveri'
         },
         {
            icon: RiFilmLine,
            title: 'My Animations',
            url: 'https://www.behance.net/vinciusroveri'
         },
      ]
   }
}

export default sectionsTexts