

import { Tokenizer } from "./Lexer/tokenizer"
import {Parser} from './Parser/parser'
import { Transpiler } from "./Transpiler/transpiler"
const sample = `
! The Title Placeholder
!! The Heading Placeholder
!!! The Subheading Placeholder
$ <a href="https://google.com">This is the demo paragraph</a>

`
const tokens = Tokenizer(sample)
console.log(tokens)
const ast = Parser(tokens)
console.log(ast);
const html = Transpiler(ast)
console.log(html)
