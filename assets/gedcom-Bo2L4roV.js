import{g as d}from"./index-UENS5g6G.js";function c(e,o){for(var a=0;a<o.length;a++){const t=o[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function g(){if(l)return i;l=1,i=e,e.displayName="gedcom",e.aliases=[];function e(o){o.languages.gedcom={"line-value":{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,lookbehind:!0,inside:{pointer:{pattern:/^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,alias:"variable"}}},tag:{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,lookbehind:!0,alias:"string"},level:{pattern:/(^[\t ]*)\d+/m,lookbehind:!0,alias:"number"},pointer:{pattern:/@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,alias:"variable"}}}return i}var s=g();const u=d(s),m=c({__proto__:null,default:u},[s]);export{m as g};
