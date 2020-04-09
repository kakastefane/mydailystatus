import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/styles.css'

const App = ({ Component, pageProps }) => {
	return (
		<div>
			<Header />
			<main className="min-h-screen container mx-auto">
				<Component {...pageProps} />
			</main>
			<Footer />
		</div>
	)
}

export default App
