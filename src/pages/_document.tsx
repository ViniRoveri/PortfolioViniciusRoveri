import { Html, Head, Main, NextScript } from 'next/document'

const stylesBody = `bg-fixed bg-gradient-to-b from-default-darkOrange to-black`

export default function Document() {
	return (
		<Html lang="en">
			<Head/>

			<body className={stylesBody}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
