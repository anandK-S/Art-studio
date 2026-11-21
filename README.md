# The Art Studio — Curated Exhibition & Atelier

A luxury, editorial-grade Art Gallery and Atelier website built exclusively with **Pure HTML5 & CSS3** (No external CSS frameworks like Bootstrap or Tailwind, and zero JavaScript dependencies for core functionality and styling).

---

## 🎨 UI/UX Upgrade Highlights

### 1. Pure HTML5 & CSS3 Architecture
- **Zero Framework Bloat:** Removed legacy Bootstrap 5.3 CDN files and classes. All layout and aesthetics are 100% custom crafted.
- **Pure CSS State Engine:**
  - **Category Filtering:** Uses CSS `:has()` and radio state controllers (`#filter-all`, `#filter-mirror`, `#filter-mosaic`, `#filter-folk`, `#filter-glass`) for instant, smooth client-side filtering without JavaScript.
  - **Mobile Drawer Navigation:** Responsive off-canvas sidebar driven by pure CSS checkbox toggle (`#sidebar-toggle`).
  - **Interactive Accordions:** Native semantic `<details>` and `<summary>` elements with animated SVG chevrons.
  - **Acquisition & Lightbox Modals:** Handled via CSS `:target` pseudo-classes (`#inquiry-modal`, `#art-modal-1`, etc.) with backdrop blurs and exit links.

### 2. High-End Editorial Design System
- **Typography:**
  - Display: `Cinzel` & `Playfair Display` (fine art editorial serif)
  - Body: `Plus Jakarta Sans` (contemporary geometric sans-serif)
- **Palette:**
  - Obsidian & Charcoal Dark: `#0e1014`, `#16191f`
  - Gallery Alabaster: `#fbfaf7`
  - Artisan Champagne Gold: `#c29b38`, `#d9ad42`
  - Deep Bronze & Sage Status Accents

### 3. Curated Masterpieces Catalog
12 certified museum-grade works across 4 distinct craft mediums:
1. **Mirror Art:** Traditional Thikri glass mosaics, convex sunburst brass mirrors, and smoked geometric panels.
2. **Mosaic Art:** Venetian glass smalti inlays, Byzantine marble tesserae, and Mediterranean floral panels.
3. **Royal Folk Art:** Mithila Madhubani heritage paintings, Nathdwara Pichwai lotus tapestries, and Warli sacred scrolls.
4. **Contemporary Glasswork:** Stained cathedral prism arches, dichroic iridescent blown vessels, and kiln-fused bas-reliefs.

### 4. Interactive Components
- Sticky announcement top bar with concierge hotline.
- Live exhibition status indicators with animated pulsing beacons.
- Quick View hover actions on every artwork card.
- Material and dimensional specification summaries.
- Private Acquisition Inquiry modal with custom collector intake form.
- Curatorial craftsmanship philosophy section (400-Year Heritage Lineage, 140+ Hours per piece, Archival Longevity).
- Multi-column salon footer with atelier locations (Mumbai, London), newsletter signup, and social links.

---

## 📁 Project Structure

```
Art-studio/
├── index.html       # Pure HTML5 semantic markup & content
├── style.css        # Pure CSS3 styles, variables, grid, flexbox & animations
├── script.js        # Optional progressive enhancement (search & shortcuts)
└── README.md        # Documentation & exhibition overview
```

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser:
- Double click `index.html`, or
- Serve locally using Python:
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000` in your browser.

---

© 2026 The Art Studio | Curated Exhibition Portfolio
