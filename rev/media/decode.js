const fs = require('fs')

const lookup = "AWawJELYHOSIUMjelyhosiumPCNTpcntBDFGRbdfgr0123456789 .,!'()~_/;\n";

// const text = new String(process.argv[2]);
const text = fs.readFileSync(process.argv[2]).toString();
const decodeText = text.slice(3);
const binary = decodeText
    .replaceAll(" awa", "0")
    .replaceAll("wa", 1);
const binaryCodes = chunk(binary, 6);
// const binaryCodes = chunk(binary, 8);
const output = decode(binaryCodes);
// console.log(binary);
console.log(output);

function chunk(text, size) {
    const out = [];
    const split = text.split("")
    for (let i = 0; i < split.length; i += size) {
        out.push(split.slice(i, i + size).join(""));
    }
    return out;
}

function decode(codes) {
    const out = [];
    for (const code of codes) {
        const index = parseInt(code, 2);
        out.push(lookup[index]);
    }
    return out.join("")
}