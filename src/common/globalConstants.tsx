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

export const projectsLinks:{[key: string]: string} = {
   project1: 'https://vrplanner.vercel.app/',
   project2: 'https://whatshouldilisten.vercel.app/',
   project3: 'https://vrtimer.vercel.app/'
}

export const reposLinks:{[key: string]: string} = {
   project1: 'https://github.com/ViniRoveri/VRPlanner',
   project2: 'https://github.com/ViniRoveri/WhatShouldIListen',
   project3: 'https://github.com/ViniRoveri/VRTimer'
}

export const sectionsScrollOffsets:{[key: string]: number} = {
   introduction: 0.08,
   aboutMe: 0.16,
   experience: 0.28,
   project1: 0.43,
   project2: 0.52,
   project3: 0.65,
   education: 0.79,
   links: 0.95
}

export const sphereRotations:{[key: string]: number} = {
   introduction: 0,
   aboutMe: 0.6,
   experience: 0,
   project1: 0.6,
   project2: 0.3,
   project3: 0.5,
   education: -0.2,
   links: 1
}

export const titlesAndDescriptions:{[key: string]: [string, string[]]} = {
   introduction: [`Vinícius Roveri Rocha`, [
   `Hi! My name is Vinícius and I'm a Front End Developer and Animator, specialized in Web Development with React since August 2022!`
   ]],
   aboutMe: [`About Me`, [ 
   `Graduated in Animation Design and migrating to a career as a programmer, throughout my journey I always knew how to combine technical knowledge with an artistic vein, and I used this to bring a differential to any project I participated in, always bringing together the best of the valences of reasoning logic and solving problems with the lightness and creativity inherent to art.`
   ]],
   experience: [`Experience`, [
      `Let's explore what I'm actually capable of doing!`,

      `The tools I use on my projects include NextJS, React, Typescript, JavaScript, Tailwind, SASS, CSS, HTML and Jest for the Front End; REST APIs, NodeJS, Express, MongoDB, JWT and NoSQL for the Back-End; and Git for code versioning.`]],
   project1: [`VR Planner`, [
      `I developed a fullstack web application of a whole planner with a clean and aesthetic UI that includes a calendar, your events list of any given period you choose, complete events management and other quality of life tools for your planning, all customizable by each user with a full authentication via JWT made in the backend also built by me. The front-end was made mainly with Next.js for React with Typescript, Tailwind CSS, and Framer-Motion for animations. For the back-end I used the JavaScript stack of Node.js with Express and MongoDB to control the project's NoSQL REST API.`
   ]],
   project2: [`What Should I Listen`, [
      `I developed a website with React, Typescript and SASS/SCSS to generate personalized music recommendations for the users. These recommendations can be based on their taste in artist, genre or vibe. The users can also use the random recommendation button, and a Favorites tab to save the songs they may want. By clicking on a song you can see all information about it, in addition to the music video to be heard right away. The songs are stored in a NoSQL REST API that I created using the MERN stack. This API is controlled locally via an interface I also developed specifically for it.`
   ]],
   project3: [`VR Timer`, [
      `I developed a timer for Rubik's Cube practice using React with TypeScript. The website has a scramble generator, a timer and a storage of times and averages, where the user can access all the information of each stored time. In addition, the site simulates official competition rules, such as a 15-second inspection, and the adding of penalties if necessary.`
   ]],
   education: [`Education`, [
      `- I have over 700 hours of courses completed at Alura, one of the biggest tech online schools in Brazil. This knowledge covers all the necessary technologies in Front-End development, and everything that can be deepened within each.`,

      `- I graduated in Animation Design at Faculdade Melies, one of the most prestigious art colleges in South America. This graduation gave me all the foundation of the art, animation and modelling concepts I have today.`
   ]],
   links: [`My Links`, []]
}
