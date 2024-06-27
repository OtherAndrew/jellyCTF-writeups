#!/usr/bin/node

const fs = require('fs');
const readline = require('readline');

async function processLineByLine(inputFile) {
    const fileStream = fs.createReadStream(inputFile);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const str = [];
    for await (const line of rl) {
        if (line.includes("VARIATION SELECTOR")) {
            const asciiCode = line.split("-")[1].split("\t")[0];
            str.push(String.fromCharCode(asciiCode));
        }
    }
    return str.join("");
}

const file = process.argv[2];
processLineByLine(file)
    .then((out) => console.log(out));
