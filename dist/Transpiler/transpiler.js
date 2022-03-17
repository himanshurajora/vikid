"use strict";
/**
 * Let's make a transpiler
 * A transpiler will convert ast to html
 * input ast sample
{
  type: 'DOCUMENT',
  children: [
    { type: 'TITLE', value: '"The Title Placeholder"', tag: 'h1' },
    { type: 'HEADING', value: '"The Heading Placeholder"', tag: 'h3' },
    {
      type: 'SUBHEADING',
      value: '"The Subheading Placeholder"',
      tag: 'h4'
    }
  ]
}
* output html sample
<h1>The Title Placeholder</h1>
<h3>The Heading Placeholder</h3>
<h4>The Subheading Placeholder</h4>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transpiler = void 0;
var Transpiler = function (ast) {
    var html = "";
    ast.children.forEach(function (child) {
        html += "<".concat(child.tag, ">").concat(child.value, "</").concat(child.tag, ">\n");
    });
    return html;
};
exports.Transpiler = Transpiler;
