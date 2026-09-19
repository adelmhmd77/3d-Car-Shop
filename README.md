
# 🚗 3D Car Shop

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github)

A front-end car shop website where every vehicle is displayed as an interactive 3D model, with prices, cart buttons, and a cart summary.

<img width="916" height="476" alt="image" src="https://github.com/user-attachments/assets/6805903c-3bdb-4860-b868-7e243ba3f14d" />

---

## Overview

**3D Car Shop** is a static, single-page storefront (page title: *Cars Shop*) that showcases cars using embedded [Sketchfab](https://sketchfab.com/) 3D models. Visitors can browse a catalog of 12 vehicles, view each one in 3D, and use the cart section to collect products and see a total.

## Features

- 🎬 Hero section with an autostarting 3D **Cyberpunk Car** model and a **Shop Now** button
- 🧊 Catalog titled **Our Selection Of Cars** with 12 interactive Sketchfab 3D models
- 💲 Name and price displayed on every product card
- 🛒 **add to cart** and **buy now** buttons on each card
- 🔢 Cart icon with an item counter
- 🧾 **Your Cart** section with *Products Bought* and *Your Total Is* areas
- 🧭 Navigation bar: Home, Cars, Shop, About Us, Contact

### Catalog

| Car | Price |
| --- | ---: |
| Volvo S90 Recharge | $55,000 |
| BMW X3 M40i | $62,000 |
| BMW M4 Widebody | $85,000 |
| McLaren W1 | $1,200,000 |
| McLaren Senna GTR | $1,100,000 |
| McLaren MCL35 F1 | $1,500,000 |
| Toyota Land Cruiser 300 | $90,000 |
| Toyota Hilux BEV | $80,000 |
| Lamborghini Gallardo LP550-2 | $220,000 |
| BYD Seal 6 DM-i Touring | $45,000 |
| Rimac Nevera R | $2,000,000 |
| Rimac Nevera R 2025 | $2,100,000 |

## Technologies

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure (`index.html`) |
| CSS3 | Styling (`css/style.css`) |
| JavaScript | Client-side logic (`js/script.js`) |
| Sketchfab | 3D car models embedded through `iframe` |
| Google Fonts | Audiowide, Chakra Petch, Oxanium |
| Font Awesome 7.0.1 | Icons, loaded from cdnjs |
| GitHub Pages | Hosting |

## Getting Started

### Prerequisites

- A modern web browser
- An internet connection, since the 3D models, fonts, and icons are loaded from external services

### Installation

```bash
git clone https://github.com/adelmhmd77/3d-Car-Shop.git
cd 3d-Car-Shop
```

No build step or package installation is required.

### Usage

Open `index.html` in your browser, or visit the [live demo](https://adelmhmd77.github.io/3d-Car-Shop/).

1. Browse the cars under **Our Selection Of Cars** and rotate or inspect each 3D model.
2. Click **add to cart** on a car to add it to your cart.
3. Scroll to **Your Cart** to see the products and the total.

## Project Structure

```text
3d-Car-Shop/
├── css/
│   └── style.css
├── images/
│   └── logo.png
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Live Demo

[https://adelmhmd77.github.io/3d-Car-Shop/](https://adelmhmd77.github.io/3d-Car-Shop/)

## Repository

[GitHub Repository](https://github.com/adelmhmd77/3d-Car-Shop)

## License

Not specified

## Notes

- This is a static front-end project deployed on GitHub Pages.
- No backend, payment processing, or checkout system is referenced in the page, so cart and purchase features should be treated as a front-end demo.
- Car names and prices are sample catalog data displayed on the site.
- The 3D models are embedded from Sketchfab and belong to their respective creators.

## Author

**Adel Mohammed Adel** — [Portfolio](https://adelmhmd77.github.io/Adel-Mohammed/)

NOTES
-----
- 3D models are embedded from Sketchfab; the models belong to
  their respective creators on Sketchfab.
- Car names and prices are sample catalog data on the site.
