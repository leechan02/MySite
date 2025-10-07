# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, showcasing projects and a personal resume. The site features internationalization (i18n) support for English and Korean, dark mode theming, and responsive design with animations.

## Development Commands

```bash
# Install dependencies (uses Yarn)
yarn install

# Run development server (starts on http://localhost:3000)
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

## Architecture

### Next.js App Router Structure

The project uses Next.js 14's App Router with a locale-based structure:

- `app/[locale]/(normal)/` - Main pages (home, info)
  - Uses `Header` component in layout
  - Home page displays project cards
  - Info page shows resume/experience details

- `app/[locale]/(projects)/` - Project detail pages
  - Uses `ProjectHeader` component in layout
  - Each project has its own page with detailed content
  - Projects: bookmoeum, mysite, transcendence, webserv

### Internationalization (i18n)

- Powered by `next-intl` library
- Supported locales: `en` (English), `ko` (Korean)
- Default locale: `en`
- Middleware (`middleware.ts`) handles dynamic routing with locale prefixes
- Translation messages stored in `messages/en.json` and `messages/ko.json`
- Configuration in `i18n.ts`

### State Management (Redux)

Redux Toolkit is used for global state management:

- `lib/redux/store.ts` - Configures Redux store
- `lib/redux/themeSlice.ts` - Manages dark mode state (synced with localStorage)
- `lib/redux/navSlice.ts` - Manages navigation state
- `lib/redux/provider.tsx` - Redux Provider component

Theme state persists to localStorage and respects system preferences on first load.

### Styling

- **Tailwind CSS** - All styling uses Tailwind utility classes
- **Dark Mode** - Implemented via Redux state and Tailwind's `dark:` variant
- Custom Tailwind config in `tailwind.config.ts`
- Global styles in `styles/globals.css`
- Responsive breakpoints: mobile-first design with `lg:` and `xl:` variants

### Components

Organized by function in `components/`:

- `box/` - Container components (ProjectBox)
- `button/` - Button components (Button, MacButtons)
- `chip/` - Chip/tag components
- `content/` - Content display (Code, CodeSection, ImageBox, VideoBox, Title)
- `header/` - Headers (Header, ProjectHeader)
- `nav/` - Navigation components
- `popup/` - Modal/popup components (SkillPopup)
- `switch/` - Toggle switches (DarkModeSwitch, LangModeSwitch)
- Root level: `Footer`, `ThemeProvider`

### Animations

- **Framer Motion** - Used for component animations and transitions
- **react-intersection-observer** - Scroll-based animations and lazy loading

### External Integrations

- **GitHub API** (`lib/github/github.ts`) - Fetches last commit date from repository
  - Uses Octokit REST API
  - Requires `GITHUB_TOKEN` environment variable
  - Results are cached with React's `cache()` function

### Assets

- `public/image/` - Static images
- `public/video/` - Project demo videos
- `public/resume/` - Resume/CV files
- `app/fonts/` - Custom fonts (GeistVF, GeistMonoVF)

## TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Uses Next.js TypeScript plugin
- Module resolution: `bundler`

## Environment Variables

Create `.env.local` file with:
```
GITHUB_TOKEN=your_github_token
```

## Deployment

- Platform: Vercel
- Package manager: Yarn (specified in package.json)
- Build command: `yarn build`
- Output directory: `.next/`

## Key Implementation Details

### Route Groups

The app uses Next.js route groups (parentheses syntax) to organize pages with different layouts without affecting URL paths:
- `(normal)` - Standard pages with regular header
- `(projects)` - Project pages with project-specific header

### Static Generation

- `generateStaticParams()` is used in layouts to pre-render both locale versions
- Uses `unstable_setRequestLocale()` for locale context in Server Components

### Theme System

The theme system works in layers:
1. `ThemeProvider` (client component) reads localStorage/system preferences
2. Dispatches theme state to Redux store
3. Toggles `dark` class on `<html>` element
4. Tailwind CSS responds to `dark:` class with appropriate styles

### Code Syntax Highlighting

Uses `react-syntax-highlighter` for displaying code blocks in project documentation.
