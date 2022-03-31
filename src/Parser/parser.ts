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
            
            case "LINK":
                // the format is [https://thisisurl.com] This is url
                // extract https://thisisurl.com, and This is url from it
                prevToken.parent = ast 
                const parsed = token.value.match(/\[(.*)\](.*)/)
                const link = parsed?.[1]
                const text = parsed?.[2]

                const linkNode: Child = {
                    type: "LINK",
                    value: text.trim(),
                    attrs: [{key: "href", value: link.trim()}],
                    tag: TagsMap[token.type]
                }

                ast.children.push(linkNode)            
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