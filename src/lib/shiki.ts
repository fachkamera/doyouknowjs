import { getHighlighter } from 'shiki'

export default async function shiki(code: string, lang: 'html' | 'javascript' = 'javascript') {
  const highlighter = await getHighlighter({
    themes: ['material-theme-darker', 'min-light'],
    langs: ['javascript', 'html'],
  })

  return highlighter
    .codeToHtml(code, {
      themes: {
        light: 'min-light',
        dark: 'material-theme-darker',
      },
      lang,
    })
    .replace(' tabindex="0"', '')
}
