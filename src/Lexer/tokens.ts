export const ValidTokens = [
    "!",
    "!!",
    "!!!",
    "$",
]

export enum TokenType {
    TITLE = "TITLE",
    HEADING = "HEADING",
    SUBHEADING = "SUBHEADING",
    PARAGRAPH = "PARAGRAPH",
}
    
export const TokenTypeMap = {
    "!": TokenType.TITLE,
    "!!": TokenType.HEADING,
    "!!!": TokenType.SUBHEADING,
    "$": TokenType.PARAGRAPH,
}