;(function () {
  const dark = window.matchMedia('(prefers-color-scheme: dark)')
  const { matches: isDark } = dark
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  const link = document.createElement('link')
  link.rel = 'icon'
  if (isSafari) {
    link.href = isDark ? '/favicon-inverted.ico' : '/favicon.ico'
  } else {
    link.type = 'image/svg+xml'
    link.href = isDark ? 'favicon.svg?dark' : 'favicon.svg'
  }
  document.head.appendChild(link)
  if (isSafari) return

  const iconEl = document.querySelector('link[rel="icon"]')
  dark.addEventListener('change', ({ matches }) => {
    iconEl.setAttribute('href', matches ? '/favicon.svg?dark' : 'favicon.svg')
  })
})()
