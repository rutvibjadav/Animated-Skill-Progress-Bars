# Animated Skills & Progress Bars

## Project overview

A responsive developer portfolio landing page featuring an animated technical-skills section. Skill bars fill when the section enters the viewport, with a polished dark gradient design that adapts to desktop, tablet, and mobile screens.

## Features

- Professional navigation, introductory hero, skills card, and footer
- Six technical skills with percentage labels and distinct gradient bars
- Scroll-triggered, one-time progress animations
- Responsive layout, hover details, and smooth in-page navigation
- Accessible progress indicators with live values and reduced-motion support
- Resume and social links ready to be replaced with personal destinations

## Technologies used

- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or clone the project.
2. Open `index.html` in a modern browser.

No build step, framework, or package installation is required.

## Animation implementation

Each bar stores its target in a `data-progress` attribute. JavaScript observes the skills section with `IntersectionObserver`; when it becomes visible, the script reads and validates each target, sets it as a CSS custom property, and applies a class. CSS transitions the bar width from `0` to that target. The observer stops watching after the first reveal, so the animation runs only once. If `IntersectionObserver` is unavailable, the bars are shown directly. The progress indicators expose their current values to assistive technology.

## Author

Alex Morgan — replace this sample name and the placeholder resume, social, and email links in `index.html` with your own details.
