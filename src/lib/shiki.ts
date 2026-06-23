import { codeToHtml } from 'shiki'

export default async function shiki(code: string, lang: 'html' | 'javascript' = 'javascript') {
  return (
    await codeToHtml(code, {
      lang,
      themes: {
        light: 'min-light',
        dark: 'material-theme-darker',
      },
    })
  ).replace(' tabindex="0"', '')
}
