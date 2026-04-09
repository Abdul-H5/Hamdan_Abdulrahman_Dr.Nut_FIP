# 🥜 Dr. Nut - Premium Beverage Rebrand

A responsive, highly interactive, and modern multi-page website built for a fictional premium soda brand, **Dr. Nut**. This project demonstrates advanced web development techniques including CSS Grid layouts, fluid typography, DOM manipulation, GreenSock (GSAP) animations, and strict JavaScript architectural standards.

## 🚀 Live Demo
Simply open the `index.html` file in any modern web browser, or use VS Code's "Live Server" extension for the best experience.

---

## 📁 Project Structure (1 Mark / Folder Setup)
The project adheres to a strict, logical directory structure separating markup, styles, scripts, and media assets.

    dr-nut-project/
    │
    ├── css/
    │   ├── grid.css           # Custom mobile-first 12-column grid system
    │   └── main.css           # Custom typography, components, and layout styling
    │
    ├── js/
    │   └── main.js            # Strict ES6+ JavaScript handling UI and GSAP animations
    │
    ├── images/
    │   ├── logo.svg           # Brand vector logo
    │   ├── almond.png         # Standard product imagery
    │   ├── hazelnut.png       
    │   ├── pistachio.png      
    │   ├── can-almond.png     # Transparent PNGs for 3D CSS drop-shadow effects
    │   ├── can-hazelnut.png   
    │   ├── can-pistachio.png  
    │   ├── lifestyle-1.jpg    # High-res lifestyle split-section photography
    │   └── social-1.jpg -> social-4.jpg # Perfect 1:1 aspect ratio social grid photos
    │
    ├── videos/
    │   ├── commercial.mp4     # HTML5 looped cinemagraph background (Home)
    │   └── product-video.mp4  # HTML5 promotional video (Products)
    │
    ├── index.html             # Homepage (Cinemagraph hero, Interactive JS UI, Grid layouts)
    ├── products.html          # E-Commerce page (Accordions, Comparison Tables, Add to Cart)
    └── contact.html           # Contact page (Advanced semantic HTML form, FAQ)

---

## 🛠️ Technical Features & Rubric Alignment

### 1. Valid HTML5 & Document Outline (9 Marks)
* **Semantic Structure:** Every page utilizes proper `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` tags to ensure a flawless document outline.
* **Heading Hierarchy:** Headings follow strict numerical order (H1 -> H2 -> H3) with zero skipped levels. Visually hidden headings (`<h2 class="visually-hidden">`) were utilized to satisfy W3C validation without breaking the visual design.
* **Semantic UI:** The Product Specifications utilize native `<details>` and `<summary>` tags for accessible accordion functionality.
* **Advanced Forms:** The Contact form implements `<fieldset>`, `<legend>`, and `<select>` dropdowns for superior data collection structure.

### 2. Advanced CSS & Responsive Design (15 Marks)
* **CSS Grid & Flexbox:** Built upon a custom responsive grid framework (`col-span-4`, `m-col-span-8`, etc.) transitioning flawlessly from mobile to desktop.
* **Fluid Typography:** Implemented modern `clamp()` functions (`font-size: clamp(50px, 8vw, 90px);`) to ensure headers scale organically across all viewports.
* **Contextual Considerations:** 
  * "Below the fold" images utilize the `loading="lazy"` attribute to optimize mobile bandwidth.
  * Mobile navigation converts to an off-canvas/dropdown menu seamlessly.
* **Premium Animations:** 
  * **Text Wipe Navigation:** A complex `::before` pseudo-element expanding width hover effect creates a premium "left-to-right text fill" animation.
  * **3D Transparent Cans:** Replaced standard `box-shadow` with `filter: drop-shadow()` to calculate the alpha-channels of transparent PNG cans, rendering highly realistic, shape-hugging shadows.

### 3. JavaScript & Interactivity (10 Marks)
The `main.js` file strictly adheres to advanced coding standards outlined in the project requirements:
* **No `DOMContentLoaded`:** Scripts are executed globally via `<script>` tag placement at the end of the HTML body.
* **No `getElementById`:** Exclusively utilizes `querySelector` and `querySelectorAll`.
* **No Anonymous Functions:** Every event handler and timeout callback points to a specifically named function for optimal readability and reuse.
* **No Modulo (`%`) Operator:** Array cycling (for the automated Review Rotator) relies on explicit `if/else` logic.
* **Interactive Data-Driven UI:** The "Explore the Lineup" section actively manipulates the DOM. Clicking a flavor button queries a JavaScript Object (`flavorData`), swapping the image, title, and description while triggering a CSS-based micro-interaction fade.
* **Shopping Cart State:** An interactive cart counter tracks clicks from the "Add to Cart" buttons, firing a timed Toast Notification popup.
* **GSAP Integration:** Replaced the Intersection Observer API with **GreenSock (ScrollTrigger)** to animate sections, cards, and videos smoothly into the viewport upon scrolling.

---

## 🎨 Design & Research (11 Marks)
* **Typography:** Utilizes Google Fonts (*Montserrat* for bold, geometric headings, and *Poppins* for highly legible body copy).
* **Color Palette:** A premium, dark-mode aesthetic utilizing Deep Crimson (`#8c1d18`), Charcoal (`#111111`), and Warm Off-White (`#f7f5f0`) to reflect a "roasted" energy brand.
* **Content Planning:** Included comprehensive e-commerce details (sugar content comparisons, vegan/allergy warnings, 0% ABV notes, wholesale options) to accurately reflect real-world beverage brand architecture.

---

## 👤 Author Information
* **Student Name:** [Abdulrahman Hamdan]
* **Course:** [Web Development 1 and Multimedia Authoring 2]