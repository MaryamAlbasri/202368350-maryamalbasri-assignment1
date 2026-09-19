# Technical Documentation

## 1. Overview
This is a static, single-page personal portfolio website. It uses plain HTML, CSS, and JavaScript with no frameworks, libraries, or backend. All content loads from local files, so the site runs by simply opening `index.html` in a browser.

## 2. Technologies
| Technology | Used for |
|---|---|
| **HTML5** | Page structure using semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| **CSS3** | Styling, CSS variables, Flexbox, Grid, media queries |
| **JavaScript (ES6)** | Interactivity through DOM manipulation and event listeners |
| **Git & GitHub** | Version control and hosting (GitHub Pages) |

## 3. File Structure
| File / Folder | Purpose |
|---|---|
| `index.html` | All page content and structure |
| `css/styles.css` | All styling, layout, and responsive rules |
| `js/script.js` | All interactive features |
| `assets/images/` | Project images |
| `docs/` | Technical documentation and AI usage report |
| `.gitignore` | Stops system and editor files (e.g. `.DS_Store`, `.vscode/`) from being uploaded |

## 4. Page Sections
- **Navigation bar:** links to each section using anchor links (`href="#about"`). It stays at the top while scrolling (`position: sticky`).
- **About:** greeting (filled by JavaScript), name, tagline, and short introduction.
- **Projects:** two project cards, each with an image, title, and description.
- **Contact:** form with Name, Email, and Message fields.
- **Image popup (lightbox):** hidden element that shows a larger version of a clicked project image.
- **Footer:** copyright line.

## 5. Styling & Layout
- **CSS variables** in `:root` store the site colors (`--bg`, `--text`, `--muted`, `--card`, `--accent`), so the color scheme can be changed in one place.
- **Reset:** `* { margin: 0; padding: 0; box-sizing: border-box; }` removes default browser spacing for consistent layout.
- **Flexbox** is used for the navigation bar (logo and links in one row) and the contact form (fields stacked vertically).
- **CSS Grid** is used for the project cards (`grid-template-columns: repeat(2, 1fr)`).
- **Smooth scrolling** is enabled with `scroll-behavior: smooth`, and `scroll-margin-top` stops the sticky navbar from covering section titles.

## 6. Responsive Design
| Screen width | Layout changes |
|---|---|
| Above 768px (desktop) | Projects in 2 columns |
| 768px and below (tablet / phone) | Projects in 1 column, smaller heading |
| 480px and below (small phone) | Smaller nav text and spacing, less section padding |

The viewport meta tag (`<meta name="viewport" ...>`) makes the page scale correctly on mobile devices. The layout was tested using browser DevTools device mode.

## 7. JavaScript Features

### 7.1 Time-of-day greeting
Reads the current hour with `new Date().getHours()` and sets the text of `#greeting`:
- before 12 → "Good morning"
- before 18 → "Good afternoon"
- otherwise → "Good evening"

### 7.2 Active navigation link
Uses the `IntersectionObserver` API to watch each `<section>`. The `rootMargin: "-50% 0px -50% 0px"` setting makes a section count as visible when it crosses the middle of the screen. The matching nav link receives the `active` class, and all other links lose it. This is more efficient than listening to every scroll event.

### 7.3 Contact form
Listens for the form's `submit` event. `event.preventDefault()` stops the page from reloading, a thank-you message using the entered name is shown in `#form-status`, and `form.reset()` clears the fields. Empty fields and invalid emails are blocked by the HTML `required` and `type="email"` attributes. No data is sent anywhere, since there is no backend.

### 7.4 Image popup (lightbox)
Each project image has a click listener. On click, the image's `src` and `alt` are copied into `#lightbox-img` and the `open` class is added to `#lightbox`, which changes it from `display: none` to `display: flex`. The popup closes when:
- the ✕ button is clicked,
- the dark background is clicked (`event.target === lightbox`), or
- the Esc key is pressed.

## 8. Browser Compatibility
Tested on: *(list the browsers you tested, e.g. Safari, Google Chrome)*

All features use standard, widely supported web APIs (Flexbox, Grid, CSS variables, `IntersectionObserver`).

## 9. Accessibility
- Every image has descriptive `alt` text.
- Form inputs are connected to their labels with `for` / `id`.
- Semantic HTML elements make the page structure clear for screen readers.

## 10. Future Improvements
- Connect the contact form to a backend or email service so messages are actually sent.
- Add more projects and a skills section.
- Add a dark/light theme toggle.