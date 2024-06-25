const fs = require('fs');

const lookup = "AWawJELYHOSIUMjelyhosiumPCNTpcntBDFGRbdfgr0123456789 .,!'()~_/;\n";

const output = ["awa"];

// const text = process.argv[2];
const text = fs.readFileSync(process.argv[2]).toString();
for (const char of text) {
    const awasciiCode = lookup.indexOf(char);
    const binaryCode = (awasciiCode >>> 0)
        .toString(2)
        .padStart(6, "0");
    const awascii = binaryCode
        .replaceAll("0", " awa")
        .replaceAll("1", "wa");
    output.push(awascii);
}
console.log(output.join(""))