# Dylan Burton - IFSC 11003 Assignments

## Prototype HTML5 Assignment
[Prototype HTML5 Assignment](https://guyoncyberspace.github.io/ifsc-11003/Prototype%20HTML5%20Assignment.html)

## Positioning Lab

- [Positioning Lab Index](https://guyoncyberspace.github.io/ifsc-11003/positioning-lab/)
- [Exercise 1 – Float](https://guyoncyberspace.github.io/ifsc-11003/positioning-lab/exercise1.html)
- [Exercise 2 – Float Row](https://guyoncyberspace.github.io/ifsc-11003/positioning-lab/exercise2.html)
- [Exercise 3 – Absolute Corners](https://guyoncyberspace.github.io/ifsc-11003/positioning-lab/exercise3.html)
- [Exercise 4 – Absolute + Center](https://guyoncyberspace.github.io/ifsc-11003/positioning-lab/exercise4.html)

## CSS Grid Lab
- [Grid Lab Index](https://guyoncyberspace.github.io/ifsc-11003/css-grid-lab/index.html)
- [Two Column – Left Aside](https://guyoncyberspace.github.io/ifsc-11003/css-grid-lab/grid-two-col-left.html)
- [Two Column – Right Aside](https://guyoncyberspace.github.io/ifsc-11003/css-grid-lab/grid-two-col-right.html)
- [Two Column – Stacked](https://guyoncyberspace.github.io/ifsc-11003/css-grid-lab/grid-two-col-stacked.html)
- [Two Column – Equal Columns](https://guyoncyberspace.github.io/ifsc-11003/css-grid-lab/grid-two-col-equal.html)

## Cycle Demo
 [jQuery Cycle Demo](https://guyoncyberspace.github.io/ifsc-11003/jquery-cycle-demo/index.html)

 ## Carousel Demo
[Carousel Demo – Slick](https://guyoncyberspace.github.io/ifsc-11003/slick-demo/index.html)

## Mars Rovers First Draft
- [Home Page](https://guyoncyberspace.github.io/ifsc-11003/mars-rovers-draft/html/index.html)
- [Mission History](https://guyoncyberspace.github.io/ifsc-11003/mars-rovers-draft/html/history.html)
- [FAQ](https://guyoncyberspace.github.io/ifsc-11003/mars-rovers-draft/html/faq.html)

 <section id="progressive-enhancement-thoughts">
  <h2>Thoughts on Progressive Enhancement</h2>
  <p>
    Progressive enhancement means building a site so its core content and functionality work for as many users as possible, even when CSS or JavaScript isn’t available. The foundation is clean, semantic HTML. On top of that, optional layers of styling and interactivity are added for browsers that can support them. The experience improves with capability, but the essential information never becomes inaccessible.
  </p>
  <p>
    This approach matters in modern web development because users access the web through a wide range of devices, screen sizes, connection speeds, and assistive technologies. Progressive enhancement ensures reliability, accessibility, search‑engine clarity, and long‑term maintainability. It avoids locking essential functionality behind CSS or JavaScript and keeps the core experience durable even as technologies shift.
  </p>
  <p>
    Additional reading: <a href="https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/">Smashing Magazine — Progressive Enhancement</a>
  </p>
</section>

 <section id="mars-rovers-reflection">
  <h2>Mars Rovers Revision & Semester Reflection</h2>
  <p>
    For this project I collected feedback from my dad—a regular web user but not a programmer. On my first version of the Mars rovers site, he immediately noticed that the NASA logo on the FAQ page did not load, which made that page feel “broken.” He also said the contact form at the bottom looked unfinished on a laptop screen, and he was unsure whether the dark mode toggle was just a temporary color change or something the site would remember. Even though the content was there, these issues made the overall experience feel less polished and less trustworthy.
  </p>
  <p>
    I used that feedback to drive specific revisions. First, I fixed the broken logo by correcting the image path and file extension so the FAQ page now shows the NASA branding consistently with the rest of the site. Next, I fixed a mistake in my CSS: all of the contact form styles were trapped inside a small-screen media query, so larger screens showed almost unstyled controls. I moved those rules out of the media query and refined the layout so the form appears as a clear, card-like section on all devices, with consistent spacing, typography, and a prominent submit button. I kept strong focus styles so keyboard users can still see exactly where they are.
  </p>
  <p>
    On the JavaScript side, I focused on progressive enhancement instead of adding more features. The site’s navigation and content work fully without JavaScript; the script is limited to enhancing the experience with a theme toggle. I improved this behavior by reading and writing a <code>mars-theme</code> value in <code>localStorage</code>, toggling a <code>data-theme</code> attribute on the <code>&lt;body&gt;</code>, and updating the button label to reflect the current mode. This directly addresses the feedback that the toggle felt temporary: now the browser remembers the user’s preference across visits, while users without JavaScript still get a functional default theme.
  </p>
  <p>
    Looking back, one thing I did well was starting with clean, semantic HTML and a clear content structure: header, nav, hero, rover cards, a comparison table, a timeline, an FAQ, and a footer. That foundation made it straightforward to apply CSS and then layer JavaScript on top without changing the markup. I am also satisfied with the theming strategy using CSS custom properties for colors, which lets dark and light themes share the same layout while keeping the stylesheet maintainable. These choices match the idea of progressive enhancement: start with a strong baseline, then enhance.
  </p>
  <p>
    If I had to start over, I would plan the project’s “plumbing” more carefully: consistent relative paths for images, styles, scripts, and navigation links, all based on local assets instead of mixed remote URLs. Most of the issues my dad found were small linkage errors rather than complex logic problems. I would also standardize the navigation across pages from the very beginning and design my responsive breakpoints intentionally so that desktop and mobile experiences stay aligned. Over the semester, this project tied together semantic HTML, responsive CSS, simple JavaScript, accessibility details, and deployment. The main lesson for me is to think less about “does the code run” and more about “does a real person experience a stable, progressively enhanced site.”
  </p>
  <p>
    I did not actually find the course site and start building this project until after midterms, so a lot of the semester’s material hit me in a compressed window. That late start forced me to absorb semantic HTML, responsive CSS, and basic JavaScript in a short time and then apply them immediately on a real assignment instead of spreading the practice out over several weeks. If I could restart the semester, I would engage with the projects from day one, read the resources more carefully, and leave more time for iteration instead of fixing issues at the end. Even with the late beginning, this project pulled the concepts together: progressive enhancement, accessibility, and deployment to a live URL. The main lesson I am taking from the semester is that a solid, progressively enhanced baseline matters more than flashy features, and that consistent, early work would make that baseline much easier to build.
  </p>
  <p>
  The revised version of the project is available here:
    <a href="https://guyoncyberspace.github.io/ifsc-11003/mars-rovers/html/index.html">Mars Rovers — Revised Project</a>.
  </p>
</section>

## CSS Diner 
![CSS Diner Proof](https://guyoncyberspace.github.io/ifsc-11003/CSS%20Diner%20Proof.png)

## Flexbox Froggy 
![Flexbox Froggy Proof](https://guyoncyberspace.github.io/ifsc-11003/Flexbox%20Froggy%20Proof.png)

## Grid Garden 
![Grid Garden Proof](https://guyoncyberspace.github.io/ifsc-11003/Grid%20Garden%20Proof.png)
