# Blind Cricket Coach Portfolio

A modern, responsive portfolio website for a blind cricket coach built with React, TypeScript, and Tailwind CSS. This project showcases achievements, services, blog posts, gallery, videos, and newspaper coverage in an accessible and beautiful interface.

## 🏏 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Local Database**: Self-contained data storage with no external dependencies
- **Blog System**: Rich text editor with image support
- **Gallery**: Image management with drag-and-drop uploads
- **Video Management**: YouTube video integration
- **Services Showcase**: Impact stories and testimonials
- **Newspaper Coverage**: Media mentions and press coverage
- **Accessibility**: WCAG compliant with skip-to-content and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form with Zod validation
- **Rich Text**: TipTap editor
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Local TypeScript files (no external dependencies)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── blog/           # Blog-related components
│   ├── dashboard/      # Admin dashboard components
│   ├── gallery/        # Gallery components
│   ├── home/           # Home page sections
│   ├── newspaper/      # Newspaper coverage components
│   ├── services/       # Services components
│   └── ui/            # shadcn/ui components
├── contexts/           # React contexts
├── data/              # Local database files
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd blind-cricket-coach-portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📊 Local Database System

This project uses a completely local database system that stores all data in TypeScript files within the repository. No external database services are required.

### Data Storage
- **Blogs**: `src/data/blogs.ts`
- **Gallery**: `src/data/gallery.ts`
- **Videos**: `src/data/videos.ts`
- **Services**: `src/data/services.ts`

### Key Benefits
- ✅ No external dependencies
- ✅ Version controlled data
- ✅ Works offline
- ✅ Easy deployment
- ✅ Cost effective
- ✅ Perfect for portfolio sites

For detailed information about the local database system, see [LOCAL_DATABASE_README.md](./LOCAL_DATABASE_README.md).

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

### Alternative Deployment Options

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

#### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

#### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the static files

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Content

1. **Blogs**: Add entries to `src/data/blogs.ts`
2. **Gallery**: Add images to `src/data/gallery.ts`
3. **Videos**: Add videos to `src/data/videos.ts`
4. **Services**: Add services to `src/data/services.ts`

### Styling

- **Theme**: Modify `src/contexts/ThemeContext.tsx`
- **Colors**: Update `tailwind.config.ts`
- **Components**: Edit files in `src/components/ui/`

### Data Export

To export current data from the browser:
1. Open browser console
2. Run: `exportCurrentData()`
3. Copy the logged data to appropriate data files

## 🔧 Development

### Project Structure Overview

- **Components**: Modular, reusable UI components
- **Pages**: Main route components
- **Hooks**: Custom React hooks for data management
- **Types**: TypeScript type definitions
- **Utils**: Helper functions and utilities

### Adding New Features

1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Create hooks in `src/hooks/`
4. Update routing in `src/App.tsx`
5. Add types in `src/types/`

## 🌟 Features in Detail

### Home Page
- Hero section with call-to-action
- Journey timeline
- Achievements showcase
- Testimonials carousel

### Blog System
- Rich text editor with TipTap
- Image upload support
- Categories and filtering
- Responsive design

### Gallery
- Grid layout with masonry effect
- Image upload with drag-and-drop
- Lightbox for image viewing
- Recent uploads section

### Services
- Impact stories grid
- Service descriptions
- Quote sections
- Call-to-action buttons

### Newspaper Coverage
- Tabbed interface
- Category filtering
- Carousel for featured articles
- Responsive grid layout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Rich text editing with [TipTap](https://tiptap.dev/)

---

**Note**: This is a public portfolio website with no authentication required. All content is publicly accessible and managed through local data files.
