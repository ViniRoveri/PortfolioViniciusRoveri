import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Vinícius Roveri | Portfolio"
}

const body = `bg-fixed bg-linear-to-bl from-vr-darkOrange to-vr-black`

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={body}>
				{children}
			</body>
		</html>
	)
}
