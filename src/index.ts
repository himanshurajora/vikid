

import { Tokenizer } from "./Lexer/tokenizer"
import {Parser} from './Parser/parser'
import { Transpiler } from "./Transpiler/transpiler"
const sample = `
! Title
!! Heading
!!! Subheading
- List Item 1
$ Paragraph
* Bold
- List Item 2
- List Item 3
** Hello There

1. Hello 
1. By There
4. Hell My Dear

*** This is a simple block quote
@ [https://thisisurl.com] This is url
`
console.clear()
const tokens = Tokenizer(sample)
console.log(tokens)
const ast = Parser(tokens)
console.log(ast);
const html = Transpiler(ast)
console.log(html)
