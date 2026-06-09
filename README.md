# 🌸 Pastel Shop — Frontend E-Commerce Website

A modern, fully responsive frontend e-commerce website for girls' accessories built with **HTML, CSS, JavaScript and Bootstrap**. Features a complete shopping experience including cart management, real-time search, category filters, and a polished multi-page layout.

---

## 🔗 Live Demo

**[View Live Site]()** 

---

## ✨ Features

### 🛍️ Shopping & Cart
- Full product catalog with **13 real products** across 3 categories
- Add to Cart with **localStorage persistence** — cart survives page refresh
- Cart page with **quantity control** (+/-), **remove items**, and **live total calculation**
- **Toast notifications** on every cart action
- Cart count badge updates in real time across all pages

### 🔍 Shop Page
- **Real-time search** — filters products as you type, no submit needed
- **Category filters** — All, Hair Accessories, Jewellery, Earrings
- **Sort by price** — Low to High, High to Low, A to Z
- Live results count updates with every filter/search
- "No results" state when nothing matches

### 🎨 Design & UI
- Soft pastel theme — pink `#FFC5C5`, deep purple `#660066`, white
- **Fully responsive** — mobile, tablet, desktop
- Navbar and footer **injected via JavaScript** — one source, consistent across all 5 pages
- Hero sections with **background image + colour overlay** on every page
- Scrolling ticker banner on home page
- Smooth hover effects, card lift animations, transitions throughout
- Playfair Display + Poppins font pairing

### 📄 Pages (5 complete pages)

**Home** — Full screen hero with background image overlay, scrolling ticker, category cards, featured products with badges, animated stats counters (IntersectionObserver), new arrivals banner, customer testimonials

**Shop** — Product grid with real-time search + category filters + sort by price, colour-coded product badges (New, Sale, Hair, Jewellery, Earrings), hover image zoom

**Cart** — Full cart management, quantity +/- buttons, remove with trash icon, live order total, empty cart state

**About** — Hero with overlay, animated stats bar, brand story with alternating timeline, values cards, Bootstrap FAQ accordion

**Contact** — Hero with overlay, contact info cards with hover effects, styled message form

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styling, animations, responsive layout |
| JavaScript ES6+ | Cart logic, search, filters, sort, navbar/footer injection, counters |
| Bootstrap 5.3 | Grid, accordion, toast, responsive utilities |
| Bootstrap Icons | UI icons throughout |
| Google Fonts | Poppins + Playfair Display |
| localStorage | Cart persistence across sessions |
| IntersectionObserver API | Scroll-triggered stat counters |

---

## 📁 Project Structure

```
E-commerce-Website/
├── home.html          # Landing page
├── shop.html          # Product catalog with filters
├── cart.html          # Cart management
├── about.html         # Brand story and FAQ
├── contact.html       # Contact form and info
├── style.css          # All styles in one file
├── script.js          # All JS — navbar, footer, cart, search, filters
├── images/            # All product and page images
│   ├── band.jpg
│   ├── bow.jpg
│   ├── rings.jpg
│   ├── earings.jpg
│   └── ...
├── favicon.png
├── LICENSE
└── README.md
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/Nayab-Naeem/E-commerce-Website.git

# Open in VS Code and run with Live Server
# Right click home.html → Open with Live Server
```

---

## 📬 Contact

- 📧 Email: nayabnaeem.tech@gmail.com
- 💼 LinkedIn: [linkedin.com/in/nayabnaeemcs](https://www.linkedin.com/in/nayabnaeemcs)
- 🐙 GitHub: [github.com/Nayab-Naeem](https://github.com/Nayab-Naeem)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).