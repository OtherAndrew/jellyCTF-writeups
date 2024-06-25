# the_REAL_truth

## Difficulty

Medium

## Points Earned 

806

## Description

> note: this is the only subdomain in scope. do not bruteforce/dirbust.
> 
> 10 point hint: tool to use
> 
> 20 point hint: where to look
> 
> 30 point hint: how to use the tool
> 
> Author: arepi
> 
> https://therealtruthaboutjellyhoshiumi.carrd.co/

![the_REAL_truth website](./images/the_REAL_truth.png "the_REAL_truth website")

## Solution

I knew there was something going on with the image but I had no idea what to do with it so I unlocked hint 1.

### Hint 1

> stegsolve

I installed stegsolve and played around with some settings, but I couldn't find anything. I decided to unlock hint 3.

### Hint 3

> data extract default settings with red bit planes 0 to 7 checked

These are the results:

```
68656c6c6f207374 61726b6e69676874  hello st arknight
2e20697420697320 676f6f6420746f20  . it is  good to 
73656520796f7520 616761696e2e2074  see you  again. t
68617420796f7520 6d6967687420756e  hat you  might un
636f766572207468 6520747275746820  cover th e truth 
66726f6d20746869 7320696d61676520  from thi s image 
626f646573207765 6c6c2e20686f7765  bodes we ll. howe
7665722c20646f20 6e6f742067726f77  ver, do  not grow
20636f6d706c6163 656e74202d20666f   complac ent - fo
7220746869732069 73206a7573742074  r this i s just t
686520626567696e 6e696e67206f6620  he begin ning of 
6f7572206a6f7572 6e657920746f6765  our jour ney toge
746865722e206675 7274686572206368  ther. fu rther ch
616c6c656e676573 2061776169742c20  allenges  await, 
616e642069207368 616c6c2062652074  and i sh all be t
686572652e207468 652074696d652068  here. th e time h
617320636f6d6520 666f722075732074  as come  for us t
6f20706172742c20 627574206265666f  o part,  but befo
7265207765206172 6520736570617261  re we ar e separa
7465642c2074616b 6520746869733a20  ted, tak e this: 
6a656c6c79435446 7b7468335f77306d  jellyCTF {th3_w0m
616e5f696e5f7468 335f7233645f6368  an_in_th 3_r3d_ch
346e6e336c7d203a 7369687420656b61  4nn3l} : siht eka
[...]
```

Just the message:

```
hello starknight. it is good to see you again. that you might uncover the truth from this image bodes well. however, do not grow complacent - for this is just the beginning of our journey together. further challenges await, and i shall be there. the time has come for us to part, but before we are separated, take this: jellyCTF {th3_w0man_in_th 3_r3d_ch4nn3l}
```

## Flag

`jellyCTF {th3_w0man_in_th 3_r3d_ch4nn3l}`