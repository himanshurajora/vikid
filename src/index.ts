

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
`
console.clear()
const tokens = Tokenizer(sample)
console.log(tokens)
const ast = Parser(tokens)
console.log(ast);
const html = Transpiler(ast)
console.log(html)
