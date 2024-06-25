# awassmbely

## Difficulty

Easy

## Points Earned 

771

## Description

> My AWA 5.0 code got jumbled up with my Assembly code help! What's in register eax?
> 
> Put the answer in the decimal number base for example if your answer is 0x11 the flag would be jellyCTF{17}
>
> Author: lisp_beamer

We are given a file, `code.s`:

```asm
<+0>:     endbr64
<+4>:     push   rbp
<+5>:     mov    rbp,rsp
<+8>:     mov    DWORD PTR [rbp-4],wawawa
<+15>:    mov    DWORD PTR [rbp-8],wawaawa
<+22>:    mov    eax,DWORD PTR [rbp-4]
<+25>:    add    eax,DWORD PTR [rbp-8]
<+28>:    shl    eax,waawaawa
<+31>:    pop    rbp
<+32>:    ret
```

## Solution

This problem is why they make you learn Assembly in Computer Architecture class.

First thing I did was decode the [AWA 5.0](https://github.com/TempTempai/AWA5.0/blob/main/Documentation/AWA5.0%20Specification.pdf) parts into binary:

```asm
<+0>:     endbr64
<+4>:     push   rbp
<+5>:     mov    rbp,rsp
<+8>:     mov    DWORD PTR [rbp-4],111
<+15>:    mov    DWORD PTR [rbp-8],110
<+22>:    mov    eax,DWORD PTR [rbp-4]
<+25>:    add    eax,DWORD PTR [rbp-8]
<+28>:    shl    eax,100
<+31>:    pop    rbp
<+32>:    ret
```

And then to decimal:

```asm
<+0>:     endbr64
<+4>:     push   rbp
<+5>:     mov    rbp,rsp
<+8>:     mov    DWORD PTR [rbp-4],7
<+15>:    mov    DWORD PTR [rbp-8],6
<+22>:    mov    eax,DWORD PTR [rbp-4]
<+25>:    add    eax,DWORD PTR [rbp-8]
<+28>:    shl    eax,4
<+31>:    pop    rbp
<+32>:    ret
```

Then I looked up the instructions and what they did. These look like x86 instructions so I referenced the [Wikipedia page](https://en.wikipedia.org/wiki/X86_instruction_listings), though these are pretty easy to intuit if you know the basics of Assembly.

```
move 7 to rbp4
move 6 to rbp8
move rbp4 to eax
add rbp8 to eax
shift eax left 4
pop

7 + 6 = 13
shift left 4
13 -> 1101 -> 11010000 -> 208
```

## Flag

`jellyCTF{208}`