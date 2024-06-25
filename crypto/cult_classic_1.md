# cult_classic_1

## Difficulty

Easy

## Points Earned

335

## Description

> > "We are not a cult" - Starknights (probably)
> 
> This challenge contains two flags:
> 
> - Submit the first flag to `cult_classic_1`
> - Submit the second (final) flag to `cult_classic_2`
>
> Flags for this challenge are **case insensitive**.
> 
> Author: Sheepiroo
> 
> Please open a ticket in Discord if you believe you have the correct password and are running into unzipping issues
>
> - First hint is for Stage 1
> - Second hint is for Stage 2
> - Third hint is for stage 3

## Solution 

This set of challenges consists of several password-protected ZIP files. Each ZIP file must be extracted to get to the next one.

### Stage 1

The first ZIP file we're given contained a password-protected ZIP and this message:

```
Pleased to meet you.

Recruitment: we are currently looking for highly intelligent individuals. 

In order to do this, we have devised a test. 
Nested in this text is the first key to a series of challenges. 
Capture the final flag to prove your worth. 

Excitedly awaiting the few who make it through to the end.

Sincerely,
Starknights (not a cult)
```

I noticed the first letter of each line spelled out `PRINCESS`, and tried that to unlock the ZIP. Sure enough it worked.

### Stage 2

This is the next message we're given:

```
Congratulations on passing stage 1.
TGkgYnJ4IGZkcSBnaGZyZ2ggd2tsdiwgYnJ4IGZkcSBrZHloIHdraCBxaGF3IG5oYjogRUxKUUhVRw==
```

I plugged this into [CyberChef](https://gchq.github.io/CyberChef/), which gave me this message decoded with Base64:

```
Li brx fdq ghfrgh wklv, brx fdq kdyh wkh qhaw nhb: ELJQHUG
```

Then I plugged this into [CacheSleuth](https://www.cachesleuth.com/multidecoder/) which gave me this message decoded with Caesar Cipher:

```
If you can decode this, you can have the next key: BIGNERD
```

### Stage 3

```
OWZ OEU, KFZKF E WOBO LBV PRVZ KSJFUUA YB JRU: KMRYCTWG{BNVW_ZV_KCYG_E_NDSU_AC}
LFZFDKE CFXS RUHVEHZ QY ASK RWMX, GEBH UPOF OVB BVJ CVFFFMJ SSIZBZJ: NPZHO
```

Right away I can see the flag encoded on the first line, but I wasn't sure what the cipher was. [dCode](https://www.dcode.fr/cipher-identifier) analysis suggested it was a Vigenere Cipher. Plugging this into the [dCode Vigenere Cipher Decoder](https://www.dcode.fr/vigenere-cipher), we get this:

```
key: BIGNERD

message: NOT BAD, HERES A FLAG FOR YOUR EFFORTS SO FAR: JELLYCTF{THIS_IS_JUST_A_WARM_UP}
HOWEVER YOUR JOURNEY IS NOT OVER, TAKE THIS KEY AND PROCEED FORWARD: ALIEN
```

## Flag

`jellyCTF{THIS_IS_JUST_A_WARM_UP}`

This challenge consists of 2 parts. See [cult_classic_2](./cult_classic_2.md) for part 2 of this challenge.