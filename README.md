# Vidhun V Warrier Portfolio

Personal portfolio site for Vidhun V Warrier, focused on robotics, autonomous systems, ROS 2, perception, and real-world deployment work across automotive and marine platforms.

## Overview

This project is a React + Vite portfolio website with a bold robotics-themed visual style. The site highlights:

- Professional summary and contact details
- Work experience
- Skills and tooling
- Projects
- Publications and Medium posts
- Education

The portfolio content is mostly data-driven, so profile updates can usually be made without touching the UI layout.

## Tech Stack

- React 19
- TypeScript
- Vite
- Lucide React
- GitHub Pages for deployment

## Project Structure

```text
.
|-- App.tsx           # Main portfolio UI and section layout
|-- constants.ts      # Resume data, projects, links, posts, education
|-- types.ts          # Shared TypeScript types
|-- public/assets     # Static assets such as project images
|-- index.tsx         # App entry point
|-- vite.config.ts    # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local development server and print the preview URL in the terminal.

## Available Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Create production build in dist/
npm run preview  # Preview the production build locally
npm run deploy   # Deploy dist/ to GitHub Pages
```

## Updating Portfolio Content

Most content edits happen in [constants.ts](/C:/Users/vidhu/Documents/portfolio/constants.ts).

Use it to update:

- `PERSONAL_INFO` for headline, location, email, LinkedIn, Medium, and GitHub
- `EXPERIENCES` for job history
- `SKILLS` for skill groups and proficiency bars
- `PROJECTS` for featured work
- `BLOG_POSTS` for Medium posts and publications
- `EDUCATION` for academic history

Design and section layout live in [App.tsx](/C:/Users/vidhu/Documents/portfolio/App.tsx).

## Deployment

This repo is configured for GitHub Pages using the `homepage` value in `package.json`.

Typical deploy flow:

```bash
npm run build
npm run deploy
```

## Notes

- Project cards support optional images. If no image is supplied, the UI falls back to a default remote image.
- The blog section is also used for publications and Medium posts to preserve the current design system.
- No API key or backend service is required for the current version of the portfolio.
