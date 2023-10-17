import Image from 'next/Image';
import Link from 'next/Link';
// import profileImg from '@/public/profile-img.png';

const Logo = () => {
	return(
		<Link href="/" className="flex items-center text-dark dark:text-light">
	    	<div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
	       		<Image src="/profile-img.png" width="100" height="100" alt="codebucks" className="w-full h-auto rounded-full" sizes='33vw' priority/>
	       	</div>
	       	<span className="font-bold dark:font-semibold text-lg md:text-xl">Codebucks</span>		
		</Link>
	)
}

export default Logo 