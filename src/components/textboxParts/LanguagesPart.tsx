const stylesTitle = `font-bold mb-1 mt-2
sm:mt-2.5
md:mt-3`
const stylesParagraph = `mb-px ml-2`

export default function LanguagesPart(){
   return(
      <>
      <p className={stylesTitle}>- Languages:</p>
      <p className={stylesParagraph}>Portuguese: Native;</p>
      <p className={stylesParagraph}>English: Fluent;</p>
      <p className={stylesParagraph}>Spanish: Advanced;</p>
      <p className={stylesParagraph}>German: Intermediary (Currently Studying);</p>
      </>
   )
}