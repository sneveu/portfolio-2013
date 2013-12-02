---
number: 1
title: Use Font For Web Icons
layout: post
excerpt: If you're looking at a 45px x 45px icon image on a high pixel-density screen with a pixel-density of 2 (basically, 2 pixels per pixel), you'll need to save that image out at twice the size. A quick way to look at it would be to say image-size*pixel-density.
---

If you're looking at a 45px x 45px icon image on a high pixel-density screen with a pixel-density of 2 (basically, 2 pixels per pixel), you'll need to save that image out at twice the size. A quick way to look at it would be to say image-size&#042;pixel-density.

Because the web is viewed on screens with varying pixel-densities, with I believe 2 being the highest, up until recently I've saved icons out at 2 times their viewed size to make up for the extra pixels and then used css to specifically set the size of the image to be 45x45. This worked, but could be a long and inefficient process.
 
This is where web fonts come in.

Use them. Here's why:

1. Webfonts are vector so are easily resized and look sharp on any high-res device.

2. Only having to call the one webfont file, as opposed to several high and low res versions of icon images results in significantly less http requests and kbs for the end-user to download, making its also optimal for mobile.

3. You can apply css styling to them. Great for css transitions.

4. They're super cross browser, unlike SVG.



