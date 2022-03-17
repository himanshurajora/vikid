/**
 * format of input string
 * ! "The Title Placeholder"
 * output after tokenize:
 * [
 *   { type: 'TITLE', value: 'The Title Placeholder' },
 * ]
 */

 import { ValidTokens, TokenTypeMap } from "./tokens"

 export const Tokenizer = (input: string): Tokens => {
     const tokens = []
     // getting all the lines
     const lines = input.trim().split('\n')
 
     for (let i = 0; i < lines.length; i++) {
         let line = lines[i]
         let type = ""
         let value = ""
         // skip empty lines
         if (line.trim() === "") continue
         // brake the line into two parts from the first space
         for (let j = 0; j < line.length; j++) {
             if (line[j] !== " ") {
                 type += line[j]
                 continue;
             }
             value = line.slice(j + 1)
             break;
         }
 
         // Check if the type is valid
         if (ValidTokens.indexOf(type) === -1) {
             throw new Error(`Syntex Error - Invalid token type: ${type}`)
         }else{
             type = TokenTypeMap[type]
             tokens.push({ type, value })
         }
     }
 
     return tokens;
 }