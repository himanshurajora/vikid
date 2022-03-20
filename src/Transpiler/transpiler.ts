/**
 * Let's make a transpiler
 * A transpiler will convert ast to html
 * input ast sample
{
  type: 'DOCUMENT',
  children: [
    { type: 'TITLE', value: '"The Title Placeholder"', tag: 'h1' },
    { type: 'HEADING', value: '"The Heading Placeholder"', tag: 'h3' },
    {
      type: 'SUBHEADING',
      value: '"The Subheading Placeholder"',
      tag: 'h4'
    }
  ]
}
* output html sample
<h1>The Title Placeholder</h1>
<h3>The Heading Placeholder</h3>
<h4>The Subheading Placeholder</h4>
 */

import { TokenType } from "../Lexer/tokens"


export const Transpiler = (ast: AST): string => {
  let html = ""
  ast.children.forEach(child => {
    if (child.type === "LIST") {
      html += `<ul>\n`
      child.children.forEach(listItem => {
        html += `\t<li>${listItem.value}</li>\n`
      })
      html += `</ul>\n`
    } else if (child.type === "ORDERED_LIST") {
      html += `<ol>\n`
      child.children.forEach(listItem => {
        html += `\t<li>${listItem.value}</li>\n`
      })
      html += `</ol>\n`
    }
    else {
      html += `<${child.tag}>${child.value}</${child.tag}>\n`
    }
  })
  return html
}

