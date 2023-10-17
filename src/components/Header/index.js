"use client"
import Link from 'next/Link';
import Logo from "./logo";
import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon, SunIcon, MoonIcon } from "./Icons";
import siteMetadata from '@/src/utils/siteMetadata';
import { useThemeSwitch } from '@/src/components/Hooks/useThemeSwitch';
import { useState } from 'react';
import { cx } from '@/src/utils/';

 const Header = () => {

	const [mode, setMode] = useThemeSwitch();
	const [click, setClick] = useState();

	const toggle = () => {
		setClick(!click);
	}

	return(
		<header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
			<Logo />
			<button className='inline-block sm:hidden z-50' onClick={toggle}>
				<div className='w-6 cursor-pointer transition-all ease duration-300'>
					<div className='relative'>
						<span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light 
						rounded transition-all ease duration-200'
						
						style={{
							transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
						}}
						>&nbsp;</span>
						<span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light 
						rounded transition-all ease duration-200'
						style={{
							opacity: click ? 0 : 1
						}}
						
						>&nbsp;</span>
						<span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light 
						rounded transition-all ease duration-200'
						style={{
							transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
						}}
						
						>&nbsp;</span>
					</div>
				</div>
			</button>
			<nav className="w-max py-3 px-8 border border-solid boder-dark rounded-full font-medium capitalize flex sm:hidden items-center
			fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
			style={{
				top: click ? "1rem" : "-5rem"
			}}
			>
				<Link href="/" className="mr-2 hover:text-accent hover:underline">Home</Link>
				<Link href="/about" className="mx-2 hover:text-accent hover:underline">About</Link>
				<Link href="/contact" className="mx-2 hover:text-accent hover:underline">Contact</Link>
				<button 
					className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark" )} 
					onClick={() => setMode(mode === "light" ? "dark": "light")}>
						{
							mode  === "light" ? <MoonIcon className={"fill-dark"}/> : <SunIcon className={"fill-dark"}/>
						}
				</button>
			</nav>
			<nav className="w-max py-3 px-8 border border-solid boder-dark rounded-full font-medium capitalize hidden sm:flex items-center
			fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
				<Link href="/" className="mr-2 hover:text-accent hover:underline">Home</Link>
				<Link href="/about" className="mx-2 hover:text-accent hover:underline">About</Link>
				<Link href="/contact" className="mx-2 hover:text-accent hover:underline">Contact</Link>
				<button 
					className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" : "bg-light text-dark" )} 
					onClick={() => setMode(mode === "light" ? "dark": "light")}>
						{
							mode  === "light" ? <MoonIcon className={"fill-dark"}/> : <SunIcon className={"fill-dark"}/>
						}
				</button>
			</nav>
			<div className='hidden sm:flex items-center'>
				<a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
				<a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-125 transition-all ease duration-200"/></a>
				<a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4"><GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light"/></a>
				<a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200"/></a>
			</div>
		</header>
	)
}

export default Header 