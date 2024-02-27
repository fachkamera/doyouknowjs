import clsx from 'clsx'

export default function UiButton({
  children,
  className,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      className={clsx(
        'dark:bg-eerieblack/95 flex h-12 w-full select-none items-center justify-center bg-white/95 outline-none focus-visible:ring-4 focus-visible:ring-current',
        {
          'text-stone-400 dark:text-stone-600': disabled,
          'cursor-pointer hover:bg-white/70 dark:hover:bg-black/70': !disabled,
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      style={{
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
    >
      {children}
    </button>
  )
}
