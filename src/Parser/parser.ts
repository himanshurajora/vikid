/**
 * Let's write a parser
 * convert tokens to AST
 * 
 * input token array sample 
 * [
 * { type: "TILTE", value: "The Title Placeholder" },
 * ]
 * 
 * output AST sample
 * {
 *    type: "DOCUMENT",
 *   children: [
 *     {
 *      type: "TITLE",
 *     value: "The Title Placeholder"
 *    }
 *  ]
 * }
 */

import { TagsMap } from "./tags"

export const Parser = (tokens: Tokens): AST => {
    const ast: AST = {
        type: "DOCUMENT",
        children: []
    }
    const prevToken: { type: string, value: string, parent: AST } = {
        type: "",
        value: "",
        parent: null
    }

    tokens.forEach((token, index) => {
        prevToken.type = token.type
        prevToken.value = token.value

        switch (token.type) {
            case "LIST_ITEM":
                if (prevToken.parent?.type === "LIST") {
                    prevToken.parent.children.push(token)
                } else {
                    // create new list 
                    const list: Child = {
                        type: "LIST",
                        children: [{type: token.type, value: token.value, tag: TagsMap[token.type]}]
                    }
                    
                    ast.children.push(list)
                    prevToken.parent = list
                }
                break

            case "ORDERED_LIST_ITEM":
                if (prevToken.parent?.type === "ORDERED_LIST") {
                    prevToken.parent.children.push(token)
                } else {
                    // create new list
                    const list: Child = {
                        type: "ORDERED_LIST",
                        children: [{type: token.type, value: token.value, tag: TagsMap[token.type]}]
                    }
                    ast.children.push(list)
                    prevToken.parent = list
                }
                break
                
            default:
                prevToken.parent = ast
                ast.children.push({
                    type: "TITLE",
                    value: token.value,
                    tag: TagsMap[token.type]
                })
                break
        }
    })

    return ast
}