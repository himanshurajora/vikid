export const ValidTokens = [
    "!",
    "!!",
    "!!!",
    "$",
    '-',
    "*"
]

export enum TokenType {
    TITLE = "TITLE",
    HEADING = "HEADING",
    SUBHEADING = "SUBHEADING",
    PARAGRAPH = "PARAGRAPH",
    LIST_ITEM = "LIST_ITEM",
    BOLD = "BOLD",
}
    
export const TokenTypeMap = {
    "!": TokenType.TITLE,
    "!!": TokenType.HEADING,
    "!!!": TokenType.SUBHEADING,
    "$": TokenType.PARAGRAPH,
    "-": TokenType.LIST_ITEM,
    "*": TokenType.BOLD
}