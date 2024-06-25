# stalknights_1

## Difficulty

Easy

## Points Earned 

100

## Description

> Stumbled across this Starknight while scrolling through Instagram. Can you figure out what neighbourhood and country this photo was taken in?
> 
> Flag format: `jellyCTF{neighbourhood_name,country}` (all lowercase)
>
> Author: Sheepiroo
>
> https://www.instagram.com/p/C6teE7Uv98I/

![stalknights_1](./images/stalknights_1.png "stalknights_1")

## Solution

[Jelly did this one on stream](https://www.youtube.com/live/QH8LKkIVHzI?t=915) but it's pretty easy.

We can inspect element on the picture to get a larger resolution image.

![stalknights_1 picture](./images/stalknights_1_pic.jpg "stalknights_1 picture")

Doing a reverse image search with Google Lens we find that this picture was taken at the Albert Heijn Museum Shop in Zaanse Schans, Netherlands.

![stalknights_1 google lens](./images/stalknights_1_google_lens.png "stalknights_1 google lens")

## Flag

`jellyCTF{zaanse_schans,netherlands}`