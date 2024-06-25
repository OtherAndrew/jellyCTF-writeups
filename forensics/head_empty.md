# head_empty

## Difficulty

Medium

## Points Earned 

842

## Description

> what's jelly's password?
> 
> if you're having problems with the tool, try using a version prior to commit e5a5b895771b655d21c36689c33a534034c31e36 (or manually patch the contents of that commit out)
> 
> 10 point hint: tool to use
> 
> 20 point hint: how to use it
> 
> Author: arepi

For this challenge we are given a .dmp file.

## Solution

Looking up memory dump analysis tools lead me to Volatility. Unfortunately I had no idea how to work it so I unlocked both hints.

### Hint 1

> volatility3

### Hint 2

> windows.hashdump.Hashdump and hashcat with rockyou.txt

After installing everything I ran Volatility and got this:

```bash
> vol -f memory.dmp windows.hashdump.Hashdump
Volatility 3 Framework 2.7.1
Progress:  100.00               PDB scanning finished                                
User    rid     lmhash  nthash

Administrator   500     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
Guest   501     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
DefaultAccount  503     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
WDAGUtilityAccount      504     aad3b435b51404eeaad3b435b51404ee        9082e3468d0a84e876033173709cb118
jelly   1001    aad3b435b51404eeaad3b435b51404ee        aa05ab5319d59779b937bdbf9797d895
```

Then I took Jelly's nthash and put it into hashcat (hashes.txt also contained the hash):

```bash
> hashcat aa05ab5319d59779b937bdbf9797d895 -m 1000 hashes.txt rockyou.txt
hashcat (v6.2.6) starting
[...]
aa05ab5319d59779b937bdbf9797d895:jellynerd2
[...]
```

## Flag

`jellyCTF{jellynerd2}`