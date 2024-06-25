# cult_classic_2

This challenge consists of 2 parts. See [cult_classic_1](./cult_classic_1.md) for part 1 of this challenge.

**Difficulty**: Easy

**Points earned**: 860

**Description**:

> See `cult_classic_1` for challenge files. Enter the second flag into this challenge.
> 
> Clarifications for Stage 5:
> - Make sure you're using the original source without modification (otherwise you may notice larger numbers than expected)
> - If using online decoders but it's not working, try a quick manual check to see if the decoders doing what you expect
> 
> Author: Sheepiroo
> 
> Please open a ticket in Discord if you believe you have the correct password and are running into unzipping issues
>
> - First hint is for Stage 1
> - Second hint is for Stage 2
> - Third hint is for stage 3

**Solution**: 

This set of challenges consists of several password-protected ZIP files. Each ZIP file must be extracted to get to the next one.

**Stage 4**:

This is the message we're given after unlocking the ZIP with the password from [cult_classic_1](./cult_classic_1.md):

```
Welcome to stage four.
Cheating is not tolerated. We hope you play fair and square.

LBPTTULD
```

Plugging this into online decoders didn't give me any results, so I watched Jelly's stream for some free hints ([2:08:38](https://www.youtube.com/live/QH8LKkIVHzI?t=7718)):

[![Jelly's jellyCTF stream](https://img.youtube.com/vi/QH8LKkIVHzI/0.jpg)](https://www.youtube.com/live/QH8LKkIVHzI?t=7718)

Using a [PlayFair decoder](https://www.boxentriq.com/code-breaking/playfair-cipher) with `ALIEN` as the key, we get `ACOUSTIC`.

**Stage 5**:

```
🌠Don't Look Away... 🌠

36.1 34.11 35.10 3.29 25.18 1.14 25.13 38.10 19.4 40.15
9.10 17.31 27.13 20.11 3.6 14.27 25.26 25.24 6.15 10.40 13.3 28.16 19.23 27.34 18.26 36.8
9.37 25.23 14.17
33.12 23.30 19.31
39.25 13.29 18.25 35.28
1.12 39.7 39.5 29.21 34.4 10.28 20.14 15.26
```

I also looked at Jelly's stream for this one, though she didn't end up solving it.

The hint for stage 5 was updated since then, but on stream it said this:

> Lyrics from someone's song... Line.word (first letter)

Jelly deduced that this was a book cipher, with her original song "[Luminary](https://www.youtube.com/watch?v=1x6oPy3Hwcw)" as the book.

Online decoders were not able to decode the message, so I wrote my own:

```js
const cipherText = /* see above */;

const bookText = /*[Luminary lyrics from YouTube video description]*/;

const cipher = cipherText
        .split("\n")
        .map((line) => line.split(" "));

const book = bookText
        .split("\n");

const out = [];
for (const line of cipher) {
    const outLine = [];
    for (const part of line) {
        const [lineNum, wordNum] = part
                .split(".")
                .map((n) => parseInt(n) - 1);
        outLine.push(book[lineNum].charAt(wordNum));
    }
    out.push(outLine.join(""))
}

console.log(out.join("\n"));
```

Turns out the hint was misleading. Instead of `[line number].[word number]`, it was actually `[line number].[char number]`. The output of the above script was:

```
Capitalise
'megalencephaly'
for
the
next
password
```

**Stage 6**:

```
WAAWW AAWWW AAWAA AAWAW AWAAA AWWAW AAAAA AWAWW AWWWW AAAAA WAAWA WAAWA WAWWA AWWWA WAAAW AAAWW AWAAA WAAWA WAAWA AAAAA AAAWW AAWWA AWAAA WAAAW AWAWW
```

This looks like [Bacon's Cipher](https://en.wikipedia.org/wiki/Bacon%27s_cipher), but with "W" instead of "B." Replacing the Ws with Bs and plugging into [CacheSleuth](https://www.cachesleuth.com/multidecoder/), we get:

```
THEFINALPASSWORDISSADGIRL
```

This is the content of the final file, flag.txt:

```
jellyctf{jelly_was_probably_older_than_these_ciphers}


P̵̜͓̣̥̟̯͈͉̱̗̜̲̙̬͗͑͊̔̈́̈́̋̄̀̉̕Ş̷̘̺̖͍̤͚̪̟̜͆̌̆́͜:̸̡͍͚͊̈̓ ̵̛̺̮̼͍̝̞͔̗͚̩͍̃͊̅͂̆̀̆́͠͠Ş̸̨̬̻͚͖̟̤̩͕̟͕̞̝̼̓̋̀̑̋̃́t̴͕͋̐à̵̜̩͖̇̂̐̿͊͒̿͝͝r̵̫̟͍̦̩̪̖̓͝k̶̨̡̖̠̤̻͊̒̓̇͑͐̓̈̉̍͗̌͘ǹ̸̼̱̝̖̘̻̭͕̘̀̓̋̀͗̀̈̐̀͊͊̕͜i̵̪̒̊̽̉̽̊̆̍̌͘͝g̴̨̡̮̜̥̰͖̟̞̘̭̟̰̐̅̉͌̓̓͗͐̅͂͘͠ḧ̷̟̦͉͉̬̟̺̏̀̋̈̄́́̾̚͜͝t̷͇̠̱̩̺͇̬̬̙̤̜̦̗̣͔̋̒̉̒͌͒͒̀̌́͊̀s̶͖̄́̐̄̓̿͝͝ͅ ̶̧̧̰͖̣͈̤̦̺̻̪̮͇̮̮̑̄̑̍̌̃̐̅̏͝ả̷̢̳̠̞̙̹͇̗̩̫̭̹͜r̶̮̺͉̼͊͆̉̕e̸̡̼͋̀͗̆͑̌̚͠͝ͅ ̷̪̦̻͈̪̠͚̯̅̎͒̀n̴̜̝̼͉̙̎͑̂͒̅̕͝ơ̸̡̛̛̩͎͇͇̱̜̘̫̗̫͇̙̈̎̂̈́̓́̔̎͐t̸͚̝̼̬̣̘̱̪̘͎̯̅̐̅̍̑̌̑́̿̂͊̽͘̕ ̵̹̙͝ä̵̢̡͍̖͊̊ ̷̧̡̥͉͚̪̘̹̺͇͈̺̩͍̤͗c̴̤͕̞̥̫̤̱̝̥̲̏̾͊̿͂͐̾͗̃̎͂̕͝ͅu̸̡̳̝̬͙̦͚̮̎͒̅̋͗̃͗̒͑͌͑͘̚͜l̸̨̛̰̺̹̣̪͉͑̌̋̿͂͒̄̂͒͛͂̈́͘͜t̵̢̛̛̥͙͇̘̔͑͗̋̇͋̔̿̐̏̚͜

```

**Flag**: `jellyctf{jelly_was_probably_older_than_these_ciphers}`