# 🪶 NayePankh Foundation — Frontend Website

A fully responsive, animated frontend landing page built for **NayePankh Foundation** — an NGO dedicated to empowering underprivileged youth across India through education, mentorship, and community support.

> *"Every child deserves new wings to fly."*

---

## 🌐 Live Preview

> Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code for the best experience.

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| 🔝 Navbar | Sticky nav with smooth scroll links & mobile hamburger menu |
| 🦅 Hero | Animated SVG feather, tagline, and floating impact stat cards |
| 🎯 Mission | Foundation story with three program pillars (Education, Mentorship, Community) |
| 📊 Impact | Scroll-triggered animated counters (12,000+ youth, 48 districts, etc.) |
| 💬 Stories | Auto-advancing testimonial slider with dot navigation |
| 🤝 Volunteer | Interest form with simulated submission feedback |
| 💛 Donate | Dynamic donation picker (₹500 – ₹5,000) with live impact preview |
| 🔗 Footer | Quick links and branding |

---

## 🗂️ Project Structure

```
nayepankh/
│
├── index.html       # Main HTML — all sections and layout
├── style.css        # Full styling — variables, components, responsive design
├── script.js        # Interactions — slider, counters, form, nav highlight
└── README.md        # You are here
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations, media queries
- **Vanilla JavaScript** — No frameworks or dependencies
- **Google Fonts** — Playfair Display + Inter (loaded via CDN)

> ✅ Zero npm installs. Zero build steps. Just open and run.

---

## ✨ Features

- 🪶 **Signature SVG feather animation** — draw-on stroke animation on page load, floating loop
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🔢 **Animated counters** — numbers count up when the Impact section scrolls into view
- 🎠 **Testimonial carousel** — auto-advances every 6 seconds, supports manual navigation
- 💰 **Live donation preview** — impact message updates dynamically as amount is selected
- 🎯 **Scroll-triggered fade-ins** — sections animate in using Intersection Observer
- 🍔 **Mobile hamburger menu** — collapses nav into a clean dropdown on small screens
- ♿ **Reduced motion support** — respects `prefers-reduced-motion` for accessibility
- 🔆 **Active nav highlighting** — current section is highlighted as you scroll

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Clone the repo
git clone https://github.com/your-username/nayepankh-foundation.git

# Open index.html in your browser
```

### Option 2 — VS Code Live Server (Recommended)
1. Open the project folder in **VS Code**
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **"Open with Live Server"**
4. Your browser opens at `http://127.0.0.1:5500`

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Deep Teal | `#0D4F5C` | Primary brand, headings |
| Saffron | `#F4A116` | Accent, CTAs, feather |
| Sage Green | `#8DB5A0` | Secondary accents |
| Warm Cream | `#FDF8F0` | Background |
| Charcoal | `#1A2332` | Body text, footer |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Playfair Display | 400, 700, 900 |
| Body / UI | Inter | 300, 400, 500, 600 |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 900px` | Two-column hero, mission, volunteer sections |
| `≤ 900px` | Single column, hero visual hidden, hamburger nav |
| `≤ 560px` | Compact donate buttons, stacked CTAs |

---

## 🔧 Customization

All design tokens live at the top of `style.css` under `:root {}` — change colors, radius, or transitions in one place:

```css
:root {
  --teal:      #0D4F5C;
  --saffron:   #F4A116;
  --sage:      #8DB5A0;
  --cream:     #FDF8F0;
  --charcoal:  #1A2332;
  --radius:    12px;
  --transition: 0.3s ease;
}
```

To add more testimonials, copy a `.story-card` block in `index.html` and add a new `.dot` in the dots container. The slider logic in `script.js` handles the rest automatically based on how many cards exist.

---

## 🙌 About NayePankh Foundation

**NayePankh Foundation** is a registered Indian NGO founded in 2020. Their name means *"new wings"* — reflecting their mission to give underprivileged youth the tools to rise above their circumstances.

- 🌍 **Official Website:** [nayepankh.com](https://nayepankh.com)
- 📧 **Volunteer Enquiries:** volunteer@nayepankh.com
- 🏛️ **80G Tax Exemption** available for donors

---

## 👨‍💻 Built By

**[VANSH CHAUHAN]**

> This project was built as part of a frontend development internship application / personal project to support NayePankh Foundation's digital presence.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to fork, adapt, and build upon it — especially if it's for a good cause. 💛

---

<p align="center">
  Made with 💛 for <strong>NayePankh Foundation</strong> · Empowering Youth Since 2020
</p>
