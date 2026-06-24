import clsx from 'clsx'
import Link from 'next/link'

export default function UiLink({
  children,
  className,
  href,
  target,
  disabled,
}: {
  children: React.ReactNode
  className?: string
  href: string
  target?: string
  disabled?: boolean
}) {
  return (
    <Link
      className={clsx(
        'dark:bg-eerieblack/98 flex w-full items-center justify-center bg-white/95 outline-none select-none focus-visible:ring-4 focus-visible:ring-current',
        disabled
          ? 'pointer-events-none cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:bg-white/70 dark:hover:bg-black/70',
        className,
      )}
      href={href}
      target={target}
      aria-disabled={disabled}
      onClick={(e) => disabled && e.preventDefault()}
      style={{
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </Link>
  )
}
