import LinkWithIcon from './LinkWithIcon'

const LinkedinIcon = '/assets/img/icons/LinkedinIcon.svg'
const ResumeIcon = '/assets/img/icons/ResumeIcon.svg'
const AfterEffectsIcon = '/assets/img/icons/AfterEffectsIcon.svg'
const GithubIcon = '/assets/img/icons/GithubIcon.svg'

const LinkedinLink = 'https://www.linkedin.com/in/vinicius-roveri/?locale=en_US'
const ResumeLink = '/assets/CV Vinícius Roveri Rocha.pdf'
const BehanceLink = 'https://www.behance.net/vinciusroveri'
const GithubLink = 'https://github.com/ViniRoveri'

export default function LinksPart(){
   return(
      <>
      <LinkWithIcon image={LinkedinIcon} link={LinkedinLink} text='My LinkedIn'/>
      
      <LinkWithIcon image={ResumeIcon} link={ResumeLink} text='My Resume'/>

      <LinkWithIcon image={AfterEffectsIcon} link={BehanceLink} text='My Animations'/>
      
      <LinkWithIcon image={GithubIcon} link={GithubLink} text='My GitHub'/>
      </>
   )
}