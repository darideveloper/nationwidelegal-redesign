import clsx from 'clsx';

interface ButtonProps {
  href: string;
  isGhost?: boolean;
  class?: string;
  children: React.ReactNode;
}

export default function Button({ href, isGhost = false, class: className, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        'inline-block',
        'px-5',
        'py-3',
        'text-center',
        'font-semibold',
        'transition',
        'duration-300',
        'ease-in-out',
        'rounded-full',
        'border-2',
        {
          'bg-transparent': isGhost,
          'bg-orange': !isGhost,
          'text-blue': isGhost,
          'text-white': !isGhost,
          'border-blue': isGhost,
          'border-orange': !isGhost,
          'hover:bg-orange hover:text-white hover:border-orange': isGhost,
          'hover:bg-white hover:text-orange hover:border-orange': !isGhost
        },
        className
      )}
    >
      {children}
    </a>
  );
} 