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
   experience2: 'https://worldcupmuseum.vercel.app/',
   experience3: ''
}

export const reposLinks:{[key: string]: string} = {
   experience1: '',
   experience2: 'https://github.com/ViniRoveri/WorldCupMuseum',
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
      `Hi! My name is Vinícius Roveri and I'm a Web Developer and Animator specialized in Front-End Development since 2022!`
   ],
   aboutMe: [`About Me`, 
      `Graduated in Animation Design and migrating to a career as a programmer, throughout my journey I always knew how to combine technical knowledge with an artistic vein, and I used this to bring a differential to any project I participated in, always bringing together the best of the valences of reasoning logic and solving problems with the lightness and creativity inherent to art.`
   ],
   experience: [`Experience`,
      `Let's explore what I'm capable of doing!
      
      The tools I use on my work and projects mainly include NextJS, React, Typescript, JavaScript, Tailwind, SASS, Razor Pages, CSS and HTML for the Front-End; REST APIs, C# with ASP.NET, NodeJS, Express, MongoDB, SQL and NoSQL for the Back-End; and Git for code versioning.`
   ],
   experience1: [`Web Developer`,
      `Rumo Soluções`,
      `04/2023 to 03/2025`,
      `Working as a web developer, acting as full-stack but heavily focused on front-end, I use Asp.Net and Razor Pages, allied to the HTML, CSS and JavaScript, to create SaaS apps for businesses focusing on delivering them the most user-friendly and performatic way possible. Thanks to my art background I also work on the design of the UI/UX, and that expertise combined with my coding skills makes me the most reliable and prestigious front-end dev of the company currently. My work also extends to the planning of the projects, with me being in many alignment meetings both with our clients and with the other devs of the team, and also to the CI/CD with me using Azure to manage the pipelines that deploy the projects. Finally, we work under the Scrum methodology, managing to deliver the greatest final product within the most efficient time possible.`
   ],
   experience2: [`The World Cup Museum`,
      `Personal Project`,
      `04/2025`,
      `An app with the timeline of the World Cups along with interactive 3D models of the memorable moments from each game. Made mainly with Next.js, Tailwind, GSAP and React Three, it combines the best of my clean UI/UX Design, JavaScript animations and 3D Modelling skills, working seamlessly to make the app the most intuitive and fun to use as possible.`
   ],
   experience3: [`My Portfolio`,
      `Personal Project`,
      `12/2022`,
      `The project you are seeing right now! This is the project where I showcase all my abilities in Web Development, UX design, Motion Graphics and 3D Modelling, all merged together in one single piece. Made using various professional and industry standard tools for the front-end development such as the NextJS framework, GSAP for JavaScript animations, React Three Fiber which is an extension of the ThreeJS library, Bodymovin & Lottie-Web for making After Effects animations web-ready, and a whole more that when combined with the standard NextJS, React, Typescript & Tailwind, create the art you see on the screen.`
   ],
   education: [`Education`,
      `- I have over 700 hours of courses completed at Alura, the biggest tech online school in Brazil. This knowledge, as already shown in the Projects and Tools parts, covers all the necessary technologies in Web Development, and everything that can be deepened within each.
      
      - I graduated in Animation Design at Faculdade Melies, one of the most prestigious art colleges in South America. This graduation gave me all the foundation of the art, animation and modelling concepts I have today.`
   ],
   links: [`My Links`]
}
