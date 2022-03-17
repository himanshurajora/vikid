"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
var Parser = function (tokens) {
    var ast = {
        type: "DOCUMENT",
        children: []
    };
    tokens.forEach(function (token) {
        if (token.type === "TITLE") {
            ast.children.push({
                type: "TITLE",
                value: token.value,
                tag: "h1"
            });
        }
        else if (token.type === "HEADING") {
            ast.children.push({
                type: "HEADING",
                value: token.value,
                tag: "h3"
            });
        }
        else if (token.type === "SUBHEADING") {
            ast.children.push({
                type: "SUBHEADING",
                value: token.value,
                tag: "h4"
            });
        }
        else if (token.type === "PARAGRAPH") {
            ast.children.push({
                type: "PARAGRAPH",
                value: token.value,
                tag: "p"
            });
        }
    });
    return ast;
};
exports.Parser = Parser;
