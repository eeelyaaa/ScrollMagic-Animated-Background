# ScrollMagic-Animated-Background
This is a possible website background video that plays as you scroll. This is meant to mimic the scrolling effect found on Apples AirPod pro website https://lnkd.in/gFtr34X 

This was created using HTML, CSS, JS, ScrollMagic, and gsap. (Both extensions of javascript)

If you pay attention to the scroll bar on the video, you will notice that when I stop scrolling, the video slowly pauses, this is to prevent a sudden stop. You may also notice small blue text 'trigger 1' and when I reach the 'bottom' of the video the text 'end 1'. These are indicators that show when the video playing stops. 

If you would like to add your own video, there are a few things you would need to change.
1. Add and link your video into the video src found on the HTML page.
2. Figure out the duration of the video, then change the duration property in js file to the milliseconds the video is.
3. Change the SetInterval time to the video 1000/frames per second. If you have a video recorded in 24fps, it would be 41.6
