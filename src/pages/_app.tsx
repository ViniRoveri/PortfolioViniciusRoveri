import DefaultHead from '@/components/DefaultHead'
import '@/styles.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <DefaultHead/>
      <Component {...pageProps}/>
    </RecoilRoot>
  )
}
