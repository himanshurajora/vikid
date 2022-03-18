// Type declarations will not be availble in the js file
declare interface Token {
    type: string;
    value: string;
}

declare type Tokens = Token[] 

declare interface AST {
    type?:     string;
    children?: Child[];
}

declare interface Child {
    type:  string;
    value?: string;
    tag?: string;
    children ?: Child[];
}
