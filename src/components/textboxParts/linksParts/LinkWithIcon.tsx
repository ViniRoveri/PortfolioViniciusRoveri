type Props = {
   image: string,
   link: string,
   text: string
}

const stylesContainer = `border-b border-default-darkOrange cursor-pointer duration-300 flex items-center justify-center overflow-hidden py-1.5
hover:tracking-[2px]
md:py2.5`
const stylesImage = `h-8 mr-2 w-8`

export default function LinkWithIcon(props: Props) {
   return(
      <a className={stylesContainer} href={props.link} target='_blank'>
         <img className={stylesImage} src={props.image} alt={props.text}/>

         <p>{props.text}</p>
      </a>
   )
}