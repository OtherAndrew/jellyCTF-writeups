# do_not_trust 

**Difficulty**: Easy

**Points earned**: 100

**Description**:

> there's a flag hidden somewhere on this site (jellyc.tf) in a common location for websites, see if you can find it
> 
> Author: arepi

**Solution**: 

I saw this on Jelly's stream ([1:27:45](https://www.youtube.com/live/QH8LKkIVHzI?t=5265)):

[![Jelly's jellyCTF stream](https://img.youtube.com/vi/QH8LKkIVHzI/0.jpg)](https://www.youtube.com/live/QH8LKkIVHzI?t=5265)

Visit https://jellyc.tf/robots.txt.

```
User-agent: *
Disallow: /
# jellyCTF{g0d_d4mn_cL4nk3r5}
```

**Flag**: `jellyCTF{g0d_d4mn_cL4nk3r5}`