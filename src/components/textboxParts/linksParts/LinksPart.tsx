import LinkWithIcon from './LinkWithIcon'

const LinkedinIcon = '/assets/img/icons/LinkedinIcon.svg'
const GithubIcon = '/assets/img/icons/GithubIcon.svg'
const AfterEffectsIcon = '/assets/img/icons/AfterEffectsIcon.svg'
const CertificateIcon = '/assets/img/icons/CertificateIcon.svg'
const ResumeIcon = '/assets/img/icons/ResumeIcon.svg'

const LinkedinLink = 'https://www.linkedin.com/in/vinicius-roveri/?locale=en_US'
const GithubLink = 'https://github.com/ViniRoveri'
const ResumeLink = '/assets/CV-Vinicius-Roveri-Rocha.pdf'
const TiktokLink = 'https://www.tiktok.com/@vini_roveri'
const CertificationLink = 'https://cursos.alura.com.br/user/viniciusroverirocha/fullCertificate/4eb89ec2f8c48388e52f569063df0445'

export default function LinksPart(){
   return(
      <>
      <LinkWithIcon image={LinkedinIcon} link={LinkedinLink} text='My LinkedIn'/>
      
      <LinkWithIcon image={GithubIcon} link={GithubLink} text='My GitHub'/>

      <LinkWithIcon image={ResumeIcon} link={ResumeLink} text='My Resume'/>
      
      <LinkWithIcon image={AfterEffectsIcon} link={TiktokLink} text='My Animations'/>
      
      <LinkWithIcon image={CertificateIcon} link={CertificationLink} text='My Full Certification'/>
      </>
   )
}