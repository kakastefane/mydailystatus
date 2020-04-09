import React from 'react'
import Link from 'next/link'

import NavBar from '../components/NavBar'

const Header = () => {
	return(
		<div>
			<header className="bg-gray-200">
				<Link href="/"><a><img className="h-24 p-4 mx-auto" src="/logo.png" alt="Olá FSL!" /></a></Link>
			</header>
			<NavBar />
		</div>
	)
}

export default Header
