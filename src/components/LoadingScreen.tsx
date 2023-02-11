const stylesContainer = `absolute flex h-screen items-center justify-center left-0 top-0 w-screen`
const stylesCircle = `animate-spin border-default-orange border-t-4 h-16 rounded-full w-16`

export default function LoadingScreen(){
   return(
      <section className={stylesContainer}>
         <div className={stylesCircle}/>
      </section>
   )
}