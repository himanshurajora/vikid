"use strict";
/**
 * format of input string
 * ! "The Title Placeholder"
 * output after tokenize:
 * [
 *   { type: 'TITLE', value: 'The Title Placeholder' },
 * ]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokenizer = void 0;
var tokens_1 = require("./tokens");
var Tokenizer = function (input) {
    var tokens = [];
    // getting all the lines
    var lines = input.trim().split('\n');
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var type = "";
        var value = "";
        // skip empty lines
        if (line.trim() === "")
            continue;
        // brake the line into two parts from the first space
        for (var j = 0; j < line.length; j++) {
            if (line[j] !== " ") {
                type += line[j];
                continue;
            }
            value = line.slice(j + 1);
            break;
        }
        // Check if the type is valid
        if (tokens_1.ValidTokens.indexOf(type) === -1) {
            throw new Error("Syntex Error - Invalid token type: ".concat(type));
        }
        else {
            type = tokens_1.TokenTypeMap[type];
            tokens.push({ type: type, value: value });
        }
    }
    return tokens;
};
exports.Tokenizer = Tokenizer;
