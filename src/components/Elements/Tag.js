
import Link from 'next/Link'
import { cx } from '../../utils'

export const Tag = ({link='#', name, ...props}) => {
		
	return(
		
		<Link 
			href={link} 
			className={cx("inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid \
			border-light hover:scale-125 transition-all ease duration-200 text-sm sm:text-base", 
			props.className)
		}>
			{name}
		</Link>
	);
};

