# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Shadcn/UI components. Features smooth animations, dark mode support, and a professional design that showcases skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **Type-Safe**: Built with TypeScript for better development experience
- **Optimized**: Fast loading and optimized for performance
- **Accessible**: Built with accessibility best practices

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Shubham-kothe/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information

Edit the data in `src/data/portfolio.ts` to customize:

- Personal information and bio
- Work experience
- Projects
- Skills
- Contact information

### Theme & Colors

The theme can be customized by modifying:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS variables for colors
- Component styles in individual section files

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add any required hooks in `src/hooks/`
3. Import and add the section to `src/App.tsx`
4. Update navigation in `src/components/sections/Header.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── sections/     # Main page sections
│   └── ui/          # Reusable UI components (Shadcn)
├── hooks/           # Custom React hooks
├── data/            # Portfolio data and content
├── types/           # TypeScript type definitions
├── lib/             # Utility functions
└── App.tsx          # Main application component
```

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting (recommended)
- **Husky** for git hooks (optional)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Shubham-kothe/portfolio/issues).

## 📞 Contact

Shubham Kothe - [LinkedIn](https://linkedin.com/in/shubham-kothe) - shubham@example.com

Project Link: [https://github.com/Shubham-kothe/portfolio](https://github.com/Shubham-kothe/portfolio)

---

⭐ Star this repo if you found it helpful!
