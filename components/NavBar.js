import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
	return (
		<Link href={href}><a className="p-2 font-bold uppercase transition text-gray-600 hover:text-white">{children}</a></Link>
	)
}

const NavBar = () => {
	return (
		<nav className="bg-gray-800 py-4 text-center">
			<NavLink href="/sobre">Sobre</NavLink>
			<NavLink href="/cadastro">Cadastro</NavLink>
			<NavLink href="/entrar">Entrar</NavLink>
		</nav>
	)
}

export default NavBar
