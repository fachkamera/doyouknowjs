import clsx from 'clsx'
import Link from 'next/link'

export default function UiButton({
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
        'dark:bg-eerieblack/98 flex w-full cursor-pointer select-none items-center justify-center bg-white/95 outline-none hover:bg-white/70 focus-visible:ring-4 focus-visible:ring-current dark:hover:bg-black/70',
        className,
      )}
      href={href}
      target={target}
      style={{
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </Link>
  )
}
