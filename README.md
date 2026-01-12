# M. Asjad Kashif - Portfolio Website

A premium, modern, and visually striking personal portfolio website showcasing the work and expertise of M. Asjad Kashif, a Full-Stack Developer and Computer Science undergraduate at NUST.

## Features

- 🎨 **Premium Design**: High-end, client-ready design with glassmorphism effects and futuristic UI elements
- ✨ **Smooth Animations**: Powered by Framer Motion for elegant, performant animations
- 📱 **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- 🚀 **Performance Optimized**: Built with Vite for lightning-fast builds and optimal performance
- ♿ **Accessible**: Following WCAG guidelines for accessibility
- 🔍 **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - For scroll-triggered animations

## Sections

1. **Hero Section** - Prominent display of name, tagline, and bio
2. **Skills Section** - Interactive cards showcasing technical expertise
3. **Projects Section** - Detailed showcase of 7 real-world projects
4. **Why Hire Me** - Compelling reasons highlighting strengths
5. **Contact Section** - Professional contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

- Edit `src/components/Hero.jsx` for hero section content
- Update `src/components/Contact.jsx` for contact information
- Modify `src/components/Projects.jsx` to add/edit projects
- Adjust `src/components/Skills.jsx` for skill sets

### Styling

The website uses Tailwind CSS with custom configuration. Modify `tailwind.config.js` to customize colors, fonts, and animations.

### Colors & Theme

The color scheme can be customized in `tailwind.config.js` and `src/index.css`. The current theme uses:
- Primary: Blue/Purple gradient
- Background: Dark slate with purple accents
- Glass effects: White with transparency

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── WhyHireMe.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

**M. Asjad Kashif**
- Email: asjad.kashif@example.com
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React and Tailwind CSS

