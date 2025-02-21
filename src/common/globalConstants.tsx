export const animationsDurations = {
   pageLoad: 1,
   intro: 4.5,
   sphereAndPath: 3,
   letters: 4,
}

export const animationsDelays = {
   canvasAppear: animationsDurations.pageLoad + animationsDurations.intro - 1.2,
   sphereAndPath: 2,
   letters: 2 + animationsDurations.sphereAndPath / 4
}

export const sitesLinks:{[key: string]: string} = {
   experience1: '',
   experience2: '',
   experience3: ''
}

export const reposLinks:{[key: string]: string} = {
   experience1: '',
   experience2: '',
   experience3: 'https://github.com/ViniRoveri/PortfolioViniciusRoveri'
}

export const sectionsScrollOffsets:{[key: string]: number} = {
   introduction: 0.08,
   aboutMe: 0.16,
   experience: 0.28,
   experience1: 0.43,
   experience2: 0.52,
   experience3: 0.65,
   education: 0.79,
   links: 0.95
}

export const sphereRotations:{[key: string]: number} = {
   introduction: 0,
   aboutMe: 0.6,
   experience: 0,
   experience1: 0.6,
   experience2: 0.3,
   experience3: 0.5,
   education: -0.2,
   links: 1
}

export const titlesAndDescriptions:{[key: string]: string[]} = {
   introduction: [`Vinícius Roveri Rocha`,
      `Hi! My name is Vinícius Roveri and I'm a Web Developer and Animator specialized in Front-End Development since August 2022!`
   ],
   aboutMe: [`About Me`, 
      `Graduated in Animation Design and migrating to a career as a programmer, throughout my journey I always knew how to combine technical knowledge with an artistic vein, and I used this to bring a differential to any project I participated in, always bringing together the best of the valences of reasoning logic and solving problems with the lightness and creativity inherent to art.`
   ],
   experience: [`Experience`,
      `Let's explore what I'm actually capable of doing!
      
      The tools I use on my work and projects mainly include NextJS, React, Typescript, JavaScript, Tailwind, SASS, CSS and HTML for the Front-End; REST APIs, NodeJS, Express, MongoDB, ASP.NET, SQL and NoSQL for the Back-End; and Git and GitHub for code versioning.`
   ],
   experience1: [`Web Developer`,
      `Rumo Soluções`,
      `09/2024 to Present`,
      `Working as a web developer focused on front-end development at Rumo, a Microsoft Business Partner and IT service company. I create the front-end of SaaS web applications for bussinesses, and work on the integration with their given APIs. In front-end development I use C# with Razor Pages of ASP.NET to both create the screens and connect to the APIs, which are made as microservices in ASP.NET with Entity Framework. I also work under the SCRUM agile methodology for team productivity management, and often participate on meetings for alignment of projects' business rules, both with clients and with other team members.`
   ],
   experience2: [`Web Developer Intern`,
      `Rumo Soluções`,
      `04/2023 to 08/2024`,
      `Worked as an intern in all areas of web development at Rumo. I worked creating full-stack web applications, with my main role being integrating front-ends made in HTML, CSS and JavaScript, with back-ends that I also created in C# using ASP.NET with the Entity Framework.`
   ],
   experience3: [`My Portfolio`,
      `Personal Project`,
      `01/2023`,
      `The project you are seeing right now! This is the project where I showcase all my abilities in Web Development, UX design, Motion Graphics and 3D Modelling, all merged together in one single piece. Made using various professional and industry standard tools for the front-end development such as the NextJS framework, GSAP for JavaScript animations, React Three Fiber which is an extension of the ThreeJS library, Bodymovin & Lottie-Web for making After Effects animations web-ready, and a whole more that when combined with the standard NextJS, React, Typescript & Tailwind, create the art you see on the screen.`
   ],
   education: [`Education`,
      `- I have over 700 hours of courses completed at Alura, the biggest tech online school in Brazil. This knowledge, as already shown in the Projects and Tools parts, covers all the necessary technologies in Web Development, and everything that can be deepened within each.
      
      - I graduated in Animation Design at Faculdade Melies, one of the most prestigious art colleges in South America. This graduation gave me all the foundation of the art, animation and modelling concepts I have today.`
   ],
   links: [`My Links`]
}
