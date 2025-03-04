import LinkWithIcon from './LinkWithIcon'

const LinkedinIcon = '/assets/img/icons/LinkedinIcon.svg'
const GithubIcon = '/assets/img/icons/GithubIcon.svg'
const AfterEffectsIcon = '/assets/img/icons/AfterEffectsIcon.svg'
const ResumeIcon = '/assets/img/icons/ResumeIcon.svg'

const LinkedinLink = 'https://www.linkedin.com/in/vinicius-roveri/?locale=en_US'
const ResumeLink = '/assets/CV Vinícius Roveri Rocha.pdf'
const TiktokLink = 'https://www.tiktok.com/@vini_roveri'
const GithubLink = 'https://github.com/ViniRoveri'

export default function LinksPart(){
   return(
      <>
      <LinkWithIcon image={LinkedinIcon} link={LinkedinLink} text='My LinkedIn'/>
      
      <LinkWithIcon image={ResumeIcon} link={ResumeLink} text='My Resume'/>

      <LinkWithIcon image={AfterEffectsIcon} link={TiktokLink} text='My Animations'/>
      
      <LinkWithIcon image={GithubIcon} link={GithubLink} text='My GitHub'/>
      </>
   )
}