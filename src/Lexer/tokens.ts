// tokenizer rules
// ordered list item
export const orderedListRule = /[0-9]+\./

export const isOrderedListItem = (value: string): boolean => {
    console.log("value is", value)
    return orderedListRule.test(value)
}

export const isValidToken = (value: string): boolean => {
    return ValidTokens.indexOf(value) !== -1 || isOrderedListItem(value)
}



export const ValidTokens = [
    "!",
    "!!",
    "!!!",
    "$",
    '-',
    "*",
    "**"
]

export enum TokenType {
    TITLE = "TITLE",
    HEADING = "HEADING",
    SUBHEADING = "SUBHEADING",
    PARAGRAPH = "PARAGRAPH",
    LIST = "LIST",
    ORDERED_LIST = "ORDERED_LIST",
    LIST_ITEM = "LIST_ITEM",
    ORDERED_LIST_ITEM = "ORDERED_LIST",
    BOLD = "BOLD",
    ITALIC = "ITALIC",
}
    
export const TokenTypeMap = {
    "!": TokenType.TITLE,
    "!!": TokenType.HEADING,
    "!!!": TokenType.SUBHEADING,
    "$": TokenType.PARAGRAPH,
    "-": TokenType.LIST_ITEM,
    "*": TokenType.BOLD,
    "**": TokenType.ITALIC
}