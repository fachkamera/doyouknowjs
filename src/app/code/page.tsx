import { getHighlighter } from 'shikiji'

// optionally, load themes and languages after creation


export default async function Page(){
    const highlighter = await getHighlighter({
        themes: ['nord', 'min-light'],
        langs: ['javascript'],
      })
      
      const code = highlighter.codeToHtml('console.log("hello")', {
        lang: 'javascript',
        themes: {
          light: 'min-light',
          dark: 'nord',
        }
      })

return <div dangerouslySetInnerHTML={{__html:code}}></div>
}