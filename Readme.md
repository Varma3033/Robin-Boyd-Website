Responsive Website Rationale:
https://varma3033.github.io/Robin-Boyd-Website/index.html

Creating a responsive website proved to be a challenging yet fulfilling task. Using the provided content, my aim was to develop a website appealing to those interested in architectural and design history, particularly showcasing architect Robin Boyd and his modernist theories. I made a strong effort to closely follow the design of my prototype!![Desktop Homepage](<Desktop - 1.png>)[Mobile Homepage](<iPhone 16 - 6.png>), which illustrates Boyd’s core concepts — emphasising simplicity and functionality, minimising distracting elements (Boyd, 1960) and incorporating accessible colours, text, and typography. 

In terms of achieving responsiveness, I primarily used flexbox and media queries. The flexbox layout was useful for the automatic adjustment of images, containers, and text, allowing them to shift from a side-by-side layout on desktop to a vertically stacked layout on smaller tablet and mobile devices, increasing the readability of the content. Media queries allowed me to customise container height and width, font sizes, padding, and margins for different breakpoints and viewport dimensions, which was also key for ensuring readability across devices. 

I started with designing the homepage, incorporating the hero image, header/navigation bar, and footer. I spent a signifcant amount of time refining the navigation bar and footer to ensure they were responsive, maintaining a consistent layout as the viewport size changed. Following my prototype, the header required simplification for tablet and mobile sized screens due to restricted header space—aligning with universal design standards to enhance readability (Muller-Brockmann, 1999). Hence, I incorporated a full-screen sidebar menu for these smaller screens, which users can access by clicking a hamburger icon. The sidebar’s animation and responsive features were created using a bit of JavaScript, taking reference from the ‘Coding2GO’ YouTube channel and changing it for my needs. 

Building on the feedback received from my prototype, I revised the footer design as the original felt incomplete. I believe the current iteration is a little improvement, although there is plenty of room for further development. For instance, adding direct links to all pages would result in a much more effective footer and improve overall website accessibility, as currently, users can only have access to the individual building information pages through the buildings tab. Additionally, I incorporated universal icons sourced from the Font Awesome website, which resulted in a more aesthetically pleasing design whilst conserving more space (Harley, 2014).

The hero image on the homepage was a bit of a challenge as I wanted it to cover the full screen while sitting behind the header and footer. Additionally, I aimed to ensure the image adjusted correctly for smaller viewport sizes, selecting alternative images better suited for those dimensions. I managed to implement this by using media queries and adding a different background image in each query.

To enhance user experience across my site, I incorporated call-to-action elements like a “LEARN MORE” button on the homepage, creating easier navigation/shortcuts for users. I also integrated subtle animations and transitions on buttons and cards to create feedback and enhance usability (Laubheimer, 2020). For example, on the buildings page, I've designed cards that pop up or zoom in when hovered over on desktops, providing users with feedback and clarity on the clickable options. 

On the building information pages, I incorporated a carousel using the Owl Carousel jQuery script, which I adapted to fit my needs, such as adjusting the autoplay and responsive settings. This carousel allowed me to showcase multiple images for each building in a responsive manner. I used media queries also to ensure that both the carousel container and images adjusted properly, and the number of images visible on screen reduces according to viewport size. On desktop, users can navigate through images using arrow buttons, which I removed for tablet and mobile views, using media queries, since touch interactions are more likely on smaller devices. Additionally, I implemented figure captions beneath each carousel image to provide users with context. 

In terms of areas for improvement, there are definitely several adjustments I could make if time permitted. One notable issue is the margin on larger screens; I struggled to accurately view screen sizes larger than my desktop resolution of 1920x1080, which in turn limited my ability to accurately design for these bigger dimensions. Also, the bottom margin on the building information pages appears quite large across multiple screen sizes, and I haven’t successfully resolved this despite trying several options - including trying to adjust the viewport height. 

Another aspect I would like to refine is my typography and font sizing across different viewport sizes. I believe I could have selected a more simple but more interesting typeface — similar to that in my prototype — to enhance readability (see https://www.lexend.com/). Also using the font size clamp function for responsive text sizing would have been a more effective strategy. Instead of adjusting font sizes through media queries at each breakpoint, which added uneccessary time to my project, using a more straightforward approach would have improved my efficiency greatly.

Overall, I like my website its simple, functional and mostly responsive. It represents Boyd’s modernist approach, through its accessible features and intuitive layout but there is still plenty of room improvement and additions to be made which I think would significantly enhance the functionality and effectiveness of the website.


References:

Boyd, R. (1960). The Australian Ugliness [1st ed.]. F.W.Cheshire. 
https://www.textpublishing.com.au/books/the-australian-ugliness

Harley, A. (2014, July 27). Icon Usability. Nielsen Norman Group. 
https://www.nngroup.com/articles/icon-usability/

Laubheimer, P. (2020, January 12). The Role of Animation and Motion in UX. Nielsen Norman 
Group. https://www.nngroup.com/articles/animation-purpose-ux/

Muller-Brockmann, J. (1999). Grid Systems in Graphic Design: A Visual Communication 
Manual for Graphic Designers, Typographers and Three Dimensional Designers. [1st ed.]. Verlag Niggli. https://ia902309.us.archive.org/4/items/GridSystemsInGraphicDesignJosefMullerBrockmann/Grid%20systems%20in%20graphic%20design%20-%20Josef%20Muller-Brockmann.pdf


Helpful Resources:

Font Awesome-Icons

Learn Web YouTube-Responsive Contact form

Coding2Go YouTube-Responsive Sidebar

Owl Carousel-Responsive Carousel

w3Schools-Responsive HTML and CSS
