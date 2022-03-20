/**
 * format of input string
 * ! "The Title Placeholder"
 * output after tokenize:
 * [
 *   { type: 'TITLE', value: 'The Title Placeholder' },
 * ]
 */

import { ValidTokens, TokenTypeMap, isValidToken, isOrderedListItem } from "./tokens"

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
        if (isValidToken(value)) {
            throw new Error(`Syntex Error - Invalid token type: ${type}`)
        } else {
            console.log(isOrderedListItem(type))
            let type_target = isOrderedListItem(type) ? "ORDERED_LIST_ITEM" : TokenTypeMap[type]
            if (type_target) {
                tokens.push(
                    {
                        type: type_target,
                        value
                    }
                )
            }else{
                throw new Error(`Syntex Error - Invalid token type: ${type}`)
            }
        }
    }

    return tokens;
}