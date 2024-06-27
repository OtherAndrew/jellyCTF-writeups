# stalknights_2

## Difficulty

Medium

## Points Earned 

802

## Description

> **starknight1337** shared another photo on their Instagram. What is the name of the park where the photo was taken?
> 
> Flag format: `jellyCTF{name_of_park}` (all lowercase)
> 
> Author: Sheepiroo
> 
> Note: If a link/image asks for login, try opening it in a new tab to bypass login.

![stalknights_2](./images/stalknights_2.png "stalknights_2")

## Solution

Just like [stalknights_1](./stalknights_1.md), we can inspect element on the picture to get a higher resolution.

![stalknights_2 picture](./images/stalknights_2_pic.jpg "stalknights_2 picture")

Reverse image searching doesn't give us useful results, but if we zoom into the picture we can get some clues as to where this picture was taken.

![stalknights_2 bright festival](./images/stalknights_2_bright_festival.jpg "stalknights_2 bright festival")

When we search "bright festival" and head to images:

![stalknights_2 bright festival google images](./images/stalknights_2_google_images.png "stalknights_2 bright festival google images")

So now we know that this is somewhere in Brussels. Let's look at the image again for another clue.

![stalknights_2 pizza 28](./images/stalknights_2_pizza_28.jpg "stalknights_2 pizza 28")

"Pizza," and "28." Let's see what Google shows us.

![stalknights_2 google results](./images/stalknights_2_google_pizza_28.png "stalknights_2 google results")

That last result looks interesting.

![stalknights_2 tripadvisor result](./images/stalknights_2_tripadvisor.png "stalknights_2 tripadvisor result")

That logo is a match. Let's see where this place is on Google Maps.

![stalknights_2 google maps](./images/stalknights_2_google_maps.png "stalknights_2 google maps")

I see a park there called [Square de la Putterie](https://maps.app.goo.gl/CNfg6hhMds9YNfXd7), but let's just make sure we're in the right place.

![stalknights_2 google maps street view](./images/stalknights_2_street_view.jpg "stalknights_2 google maps street view")

![stalknights_2 image zoomed in](./images/stalknights_2_comp1.jpg "stalknights_2 image zoomed in")

[stalknights 2 comparison](https://github.com/OtherAndrew/jellyCTF-writeups/assets/103388958/bbb3fbf8-7d72-4ea1-ad69-41bd81a7eb24 "stalknights_2 comparison")

## Flag

`jellyCTF{square_de_la_putterie}`
