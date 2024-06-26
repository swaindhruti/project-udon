import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(['flex', 'items-center', 'justify-center', 'rounded'], {
	variants: {
		variant: {
			primary: [
				'bg-[#ff7647]',
				'border',
				'border-black',
				'border-solid',
				'rounded-[8px]',
				'px-[12px]',
				'py-[10px]',
				'gap-[10px]',
				'text-black',
				'font-semibold',
				'shadow-button',
			],
		},
		size: {
			large: 'text-xl',
			medium: 'text-lg',
			small: 'text-base',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
	},
});

export default function Button({ variant, size, className, children, ...props }) {
	return (
		<button className={cn(buttonVariants({ variant, size, className }))} {...props}>
			{children}
		</button>
	);
}
