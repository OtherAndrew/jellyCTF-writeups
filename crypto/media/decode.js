#!/usr/bin/node

const cipherText = `36.1 34.11 35.10 3.29 25.18 1.14 25.13 38.10 19.4 40.15
9.10 17.31 27.13 20.11 3.6 14.27 25.26 25.24 6.15 10.40 13.3 28.16 19.23 27.34 18.26 36.8
9.37 25.23 14.17
33.12 23.30 19.31
39.25 13.29 18.25 35.28
1.12 39.7 39.5 29.21 34.4 10.28 20.14 15.26`

const bookText = `When I sleep at night
I have dreams that I
One day will wake up as a princess

With a shining gown
Smiling for a crowd
Oh how, I wish I could reset

But I can't keep thinking of "What if"
I'll turn my make-believe world into the truth I live

And towards the sky I shout my name
Hoping to be heard by you one day
Cause I know there's a world out there
Waiting for me to come and play

Oh I want to sing for you and me
And everyone in our galaxy
Cause you know that's always been
My lifelong dream

And I'm never giving up
I'll finish what I started, oh
If it all becomes too rough
Then I'll only get stronger

If I want the universe to look only at me
I'll put on a show I'm ready to go
"Hello world, this is me"

("Don't look away")

So towards the sky I shout my name 
Knowing that you'll hear me sing one day
And I'll pour my heart out to you
Cause I'm here to stay

I'm standing here, a luminary in the night sky
The stars aligned to bring me to you
So come with me let's start
A new beginning`

// hint: cipher is line.word (first letter)
// cipher is actually line.char

const cipher = cipherText
    .split("\n")
    .map((line) => line.split(" "));

const book = bookText
    .split("\n");

const output = [];
for (const line of cipher) {
    const outputLine = [];
    for (const part of line) {
        const [lineNum, charNum] = part
            .split(".")
            .map((n) => parseInt(n) - 1);
        outputLine.push(book[lineNum].charAt(charNum));
    }
    output.push(outputLine.join(""));
}
console.log(output.join("\n"));

const password = output[1];
console.log();
console.log(password.toUpperCase());