"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTypeMap = exports.TokenType = exports.ValidTokens = void 0;
exports.ValidTokens = [
    "!",
    "!!",
    "!!!",
    "$",
];
var TokenType;
(function (TokenType) {
    TokenType["TITLE"] = "TITLE";
    TokenType["HEADING"] = "HEADING";
    TokenType["SUBHEADING"] = "SUBHEADING";
    TokenType["PARAGRAPH"] = "PARAGRAPH";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
exports.TokenTypeMap = {
    "!": TokenType.TITLE,
    "!!": TokenType.HEADING,
    "!!!": TokenType.SUBHEADING,
    "$": TokenType.PARAGRAPH,
};
