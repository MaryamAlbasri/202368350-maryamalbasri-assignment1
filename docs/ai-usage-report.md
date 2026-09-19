# AI Usage Report

## 1. Tools Used & Use Cases

**Claude (Anthropic)** was the main AI tool I used throughout this assignment. I used it as a step-by-step assistant rather than asking it to build the whole project at once.

| Stage | How I used Claude |
|---|---|
| Understanding the task | Summarized the assignment requirements and grading rubric so I could plan my time |
| Repository setup | Gave me the Git and terminal commands to create the folder structure, and explained what `.gitignore` does and why each line is there |
| HTML | Generated a starting skeleton with semantic sections (About, Projects, Contact) that I then filled with my own content |
| CSS | Suggested a responsive layout using CSS Grid, Flexbox, CSS variables and media queries |
| JavaScript | Helped me implement a time-of-day greeting, active navigation link highlighting (using `IntersectionObserver`), a contact form confirmation, and an image popup (lightbox) |
| Debugging | Helped me find why my project cards lost their styling (a broken CSS block), why an image was not loading (file name mismatch), and why clicking an image did nothing (the JavaScript had not been added yet) |
| Content | Suggested example taglines, intro text and project descriptions, which I chose from and edited |
| Code explanation | Explained each part of my HTML, CSS and JavaScript line by line, so I could understand it and write my own code comments |
| Documentation | Helped draft the README and technical documentation based on my final code, which I reviewed and completed (e.g. adding the browsers I tested) |

## 2. Benefits & Challenges

**Benefits**
- **Speed:** I got a working structure quickly and could spend more time on content, testing and design choices.
- **Explanations:** Claude explained *why* code works (for example `preventDefault()`, CSS variables, and `IntersectionObserver`), not just *what* to paste.
- **Debugging help:** When I shared screenshots of my page, it helped me spot problems I had missed, such as a missing image file and a stray character at the end of my CSS file.

**Challenges**
- **Generic output:** The first suggestions were generic (placeholder text, standard features). I had to decide what actually fit my portfolio.
- **Not always what I wanted:** Some solutions did not match what I had in mind. For example, making the image open in a new tab left no easy way to go back, so I asked for a different approach (a popup with a close button).
- **Integration errors:** When I edited parts of the code by hand, I sometimes broke things (a missing brace in CSS, code not pasted into the right file). I had to test carefully after each change.
- **Keeping code clean:** Copying and pasting many times caused problems AI does not see on its own, like duplicated CSS rules, a leftover unused style, and lost indentation. I had to review the whole file and clean it up.

## 3. Learning Outcomes

- **Git workflow:** creating a repository, cloning, committing with meaningful messages, and pushing to GitHub.
- **Responsive design:** how CSS Grid switches from two columns to one using media queries, and how to test layouts in browser DevTools device mode.
- **CSS variables:** keeping colors in one place so they are easy to change.
- **DOM manipulation:** selecting elements, adding event listeners, and toggling classes to change what the user sees.
- **`IntersectionObserver`:** detecting which section is on screen without constantly listening to scroll events.
- **Debugging:** using the browser console and checking file names and paths when something does not appear.

## 4. Responsible Use & Modifications

I did not submit the AI output unchanged. Changes I made or decided on myself:

- **Chose my own features:** The first version had a dark/light theme toggle. I decided to remove it and use a time-of-day greeting and active nav link highlighting instead, then removed the unused theme code (HTML button and CSS) to keep the code clean.
- **Wrote and edited my content:** I selected and adjusted my tagline and introduction, and chose which of my real projects to show (SWE206 University Bus Tracker and COE301 Pipelined MIPS Processor).
- **Used my own images:** I added a screenshot from my SWE206 prototype and one from my COE301 Logisim design.
- **Changed the image behavior:** I rejected opening images in a new tab and asked for a popup with a close (✕) button, which I felt was better for the user.
- **Adjusted styling:** I changed image sizes to fit my layout.
- **Cleaned up the code:** I removed duplicated CSS and an unused style rule, and re-formatted all files for consistent indentation.
- **Wrote my own comments:** After asking Claude to explain each part of the code, I wrote the code comments in my own words.
- **Completed the documentation:** I reviewed the AI-drafted README and technical documentation against my actual code and filled in my own testing details.

**How I checked correctness**
- Opened the site in the browser after every change and tested it at desktop, tablet and phone sizes using DevTools.
- Tested each feature by hand: scrolling to check the nav highlight, submitting the form, and opening and closing the image popup.
- Read through each piece of code so I could explain what it does in my technical documentation.

**Academic integrity:** All AI assistance is documented in this report. The project content, decisions, and final choices are my own, and I understand every part of the code I submitted.