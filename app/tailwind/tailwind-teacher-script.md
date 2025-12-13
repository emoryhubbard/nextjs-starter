### Prep

- **Teacher** Go to https://nextjs.org/docs/app/getting-started/installation and get a Next.js setup working

- **Teacher** Clone or download zip for https://github.com/emoryhubbard/nextjs-starter

- **Student** Go to https://nextjs.org/docs/app/getting-started/installation and get a Next.js setup working

### Next.js setup

- **Teacher** Open lessons repo locally in VS Code with tailwind-teacher-script.md and tailwind/page.mdx in split view

- **Teacher** Explain that we will go over 5 to 10 minutes of CSS vs Tailwind examples / the why

- **Teacher** Tailwind is a basically a shorthand which overcomes several other disadvantages of CSS: grenade instead of laser styling, verbosity, lack of co-location despite tight coupling of markup with styling code in practice

- **Student** Go to https://github.com/emoryhubbard/nextjs-starter and download and extract zip and open in a new VS Code window

- **Student** Run pnpm install

- **Student** Run pnpm dev

- **Student** Go to https://localhost:3000/tailwind--just to check things are working

- **Student** Go to tailwind/page.mdx--we will stay here for now

### Clean HTML
    
- **Student** Think about how you could edit the CSS to make the text "Dashboard" turn blue while reading

- **Student** Make the edit

- **Teacher** Any questions about any code here

### Laser

- **Student** While reading try to figure out if there is a much simpler way the co-worker could have avoided this problem

- **Student** Make an edit if they thought of something otherwise keep going--it is not a skill we are trying to build here--the "think about this while reading" things are just to (1) improve focus and attention while reading to increase chances of understanding concept and (2) check for understanding of concept afterwards

- **Teacher** Any questions about any code here

### Laser fix

- **Student** Think about how you would add a button below change preferences that says Delete Account while reading

- **Student** Make the edit

- **Teacher** Any questions about any code here

### Why Tailwind

- **Teacher** Ask have you heard about the problems in CSS that Tailwind helps solve

- **Teacher** Ask have you heard about the principle of separation of concerns

### Verbosity

- **Student** The next 3 concepts are quick and simple so think about this one question while reading the next three concepts--verbosity, preventing grendade, and tight coupling--what would you say to me to explain the big problems with CSS it solves and why you think it's worth using for the project?

- **Teacher** Any questions about any code here

### Preventing grenade

- **Teacher** Any questions about any code here

### Tight coupling

- **Teacher** Any questions about any code here

- **Student** Imagine teacher were a grug developer who said Tailwind makes styling code more difficult to read, less reusable, and breaks the principle of separation of concerns--explain the big problems with CSS it solves and why you think it's worth using for the project?

### Matching Styling

- **Student** Customize the header of diagnostic-exercises/page.mdx with Tailwind--just doing the color for now is fine but as a stretch goal you can make it match a site header / h1 design that uses a google font to get an exact match--see https://trends.builtwith.com/websitelist/Google-Font-API (connectify.me was one)--explain we won't use arbitrary values in production--it would take forever to get anything done if you had to find arbitrary values to match each part of the design you are turning into code or change values when the design changes--but for now we will use them for learning--in production we use design tokens and a design system--I'll teach that later if desired
