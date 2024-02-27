type Options = {
  success?: boolean
  warn?: boolean
}

const COLOR_WARN = '#500724'
const COLOR_SUCCESS = '#365314'

export function generateSvg(options: Options) {
  return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg
  data-random="pattern${Math.random().toFixed(8)}"
  fill="#222" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

    <g
       fill-rule="evenodd">
        <path d="m 8,16 c 4.418278,0 8,-3.581722 8,-8 C 16,3.581722 12.418278,0 8,0 3.581722,0 0,3.581722 0,8 c 0,4.418278 3.581722,8 8,8 z m 0,-2 c 3.313709,0 6,-2.686291 6,-6 C 14,4.6862915 11.313709,2 8,2 4.6862915,2 2,4.6862915 2,8 c 0,3.313709 2.6862915,6 6,6 z m 32,34 c 4.418278,0 8,-3.581722 8,-8 0,-4.418278 -3.581722,-8 -8,-8 -4.418278,0 -8,3.581722 -8,8 0,4.418278 3.581722,8 8,8 z m 0,-2 c 3.313708,0 6,-2.686292 6,-6 0,-3.313708 -2.686292,-6 -6,-6 -3.313708,0 -6,2.686292 -6,6 0,3.313708 2.686292,6 6,6 z" />
    </g>
    ${
      options.success
        ? `
    <path transform="scale(.8) translate(26 -2)" stroke-width="2.5" stroke="${COLOR_SUCCESS}" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    <path transform="scale(.8) translate(-2 26)" stroke-width="2.5" stroke="${COLOR_SUCCESS}" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    `
        : ''
    }

  
  

    
    ${
      !options.success
        ? `<path ${
            options.warn ? `fill="${COLOR_WARN}" ` : 'transform="rotate(45 8 40)" '
          }d="M 9.4142136,40 15.363961,34.050252 13.949748,32.636039 8,38.585786 2.0502521,32.636039 0.6360391,34.050252 6.5857861,40 0.6360391,45.949747 2.0502521,47.363961 8,41.414214 l 5.949748,5.949747 1.414213,-1.414214 z">
       ${
         options.warn
           ? '<animateTransform attributeName="transform" type="rotate" from="45 8 40" to="0 8 40" dur=".1s" repeatCount="1" />'
           : ''
       }
       </path>
    <path ${
      options.warn ? `fill="${COLOR_WARN}" ` : 'transform="rotate(45 40 8)" '
    }d="M 41.414214,8 47.363961,2.050252 45.949748,0.636039 40,6.585786 34.050252,0.636039 32.636039,2.050252 38.585786,8 32.636039,13.949747 34.050252,15.363961 40,9.414214 l 5.949748,5.949747 1.414213,-1.414214 z">
    ${
      options.warn
        ? '<animateTransform attributeName="transform" type="rotate" from="45 40 8" to="0 40 8" dur=".1s" repeatCount="1" />'
        : ''
    }
    </path>`
        : ''
    }
  </svg>
  `)}")`
}
