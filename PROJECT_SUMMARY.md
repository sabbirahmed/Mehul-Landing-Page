# Project Summary: Mehul Landing Page

## Architecture
The application is built on **Next.js (App Router)** as a statically generated site. It follows a server-first architecture for data and static elements, sprinkled with client components where interactivity or browser APIs (like scroll animations) are required. 
A key architectural pattern is the custom **Internationalization (i18n)** approach. It utilizes a dynamic `[locale]` route segment to serve content in English, Bengali, and Japanese, passing the locale down the component tree to fetch correct static dictionary entries.

## Folder Structure
- **`app/`**: Contains the routing logic.
  - `page.tsx`: Root route that redirects to the default `/en` locale.
  - `[locale]/`: The core dynamic route housing all pages (`/about`, `/branches`, `/courses`, `/visa-services`, and the main page).
- **`components/`**: Reusable UI elements.
  - Global components like `navbar.tsx`, `footer.tsx`, and `language-switcher.tsx`.
  - Feature-specific subdirectories like `branches/` and `courses/`.
  - Utility components like `fade-in.tsx` for animations.
- **`lib/`**: Contains business logic and static data. 
  - `site-content.ts` acts as the single source of truth for translations, branch details, and static metadata.
- **`public/`**: Stores static assets such as images and icons.

## APIs
This project operates entirely as a **static frontend** and does not consume any internal or external REST/GraphQL APIs. Data is statically managed within the TypeScript codebase (`lib/site-content.ts`), avoiding the need for backend fetching or database connections. External links are used for mapping (Google Maps), but no API calls are made.

## Dependencies
- **Core Framework**: `next` (v16.2.4), `react`, `react-dom` (v19.2.4)
- **Styling**: `tailwindcss` (v4), `@tailwindcss/postcss`
- **Animations**: `framer-motion` (v12.38.0)
- **Icons**: `lucide-react` (v1.11.0)
- **Tooling**: TypeScript, ESLint (`eslint-config-next`)

## Coding Style
- **Strict Typing**: TypeScript is heavily utilized with explicit types (e.g., `Branch` type, `Locale` type definition).
- **Utility-First CSS**: Tailwind classes are used extensively inline within `className` props for rapid styling without external CSS files (aside from the base `globals.css`).
- **Componentization**: High level of reusability. The UI is broken down into small, focused functional components.
- **Data Injection**: Content is injected via a dictionary pattern (`labels[locale].key`), keeping markup clean from raw text strings.

## Important Modules
- **`lib/site-content.ts`**: The most critical data file. It holds the `labels` dictionary for i18n, branch location data, and other site-wide static strings.
- **`app/[locale]/page.tsx`**: The main orchestration file for the landing page, assembling various sections and injecting the current locale data.
- **`components/language-switcher.tsx`**: Manages the crucial user action of changing languages, updating the URL segment accordingly.

## Possible Technical Debt
1. **Unoptimized Images**: The codebase heavily uses raw HTML `<img>` tags (e.g., in `page.tsx` and `navbar.tsx`) instead of Next.js's `<Image />` component. This bypasses Next.js's powerful built-in image optimization, lazy loading, and automatic responsive sizing, potentially harming Core Web Vitals (LCP) and loading speed.
2. **Hardcoded Translations**: While the `site-content.ts` dictionary pattern works for small sites, as the site scales, maintaining a single massive file for all languages will become unwieldy. Migrating to JSON files with a library like `next-intl` or using a Headless CMS would improve maintainability.
3. **Basic Locale Redirection**: The root `page.tsx` does a hard `redirect('/en')`. It does not attempt to read the user's `Accept-Language` header to automatically serve their preferred language, which could be implemented via a Next.js `middleware.ts` for a better user experience.
