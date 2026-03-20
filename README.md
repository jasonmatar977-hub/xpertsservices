# Xperts Services - Facility Management Website

A modern, responsive business website for Xperts Services facility management company.

## Tech Stack

- **React** 18
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Project Structure

```
├── public/           # Static assets
│   ├── Logo.jpeg
│   ├── Porfolio.jpeg
│   └── Rates.jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Coverage.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── CTASection.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails. It sends `name`, `email`, `phone`, and `message` fields to the configured template.

## Features

- Responsive design (mobile + desktop)
- Brand colors extracted from logo (#C41E24 red, #1A1A1B black)
- Smooth scroll navigation
- Contact form
- Hover effects and modern UI
