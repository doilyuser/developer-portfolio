# Developer Portfolio

<p align="center">
<img src="https://github.com/user-attachments/assets/18333531-02b6-4cca-b60f-3f80853461b1" alt="Developer Portfolio" width="450px"/>
</p>

## A modern, accessible, and customizable portfolio template for developers built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-yellow?style=flat&logo=webpack)](https://turbo.build/pack)
[![Vercel](https://img.shields.io/badge/Optimized%20for-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

<br />

## Table of Contents 📑
- [Features](#features-sparkles)
- [Demo](#demo-movie_camera)
- [Tech Stack](#tech-stack-gear)
- [Getting Started](#getting-started-rocket)
  - [Forking the Repository](#forking-the-repository)
  - [Installation](#installation)
  - [Basic Configuration](#basic-configuration)
  - [Running Locally](#running-locally)
- [Customization](#customization-art)
  - [Essential Customization](#essential-customization)
  - [Optional Customization](#optional-customization)
- [EmailJS Setup](#emailjs-setup-envelope)
- [Deployment](#deployment-globe_with_meridians)
- [Accessibility](#accessibility-wheelchair)
- [SEO Optimization](#seo-optimization-mag)
- [License](#license-page_with_curl)

<br />

## Features ✨

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Fast Development**: Powered by Turbopack for lightning-fast development experience
- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Dark Mode Support**: Automatic dark mode based on user preferences
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Built-in SEO best practices with structured data
- **Contact Form**: Integrated with EmailJS for easy contact form setup
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Type Safety**: Full TypeScript support for a robust development experience
- **Easy Customization**: Simple data files to customize your portfolio
- **Vercel Ready**: Optimized for deployment on Vercel

<br />

## Demo 🎬

Visit the [live demo](https://developer-portfolio-xi-three.vercel.app/) to see the portfolio in action.

<br />

## Tech Stack ⚙️

This portfolio template is built with:

- **[Next.js 15](https://nextjs.org/)**: React framework with App Router for improved routing and server components
- **[React 19](https://react.dev/)**: Latest version with improved performance and features
- **[TypeScript](https://www.typescriptlang.org/)**: For type safety and better developer experience
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development
- **[Turbopack](https://turbo.build/pack)**: Incremental bundler for faster development
- **[EmailJS](https://www.emailjs.com/)**: Client-side email sending for the contact form
- **[Headless UI](https://headlessui.com/)**: Accessible UI components styled with Tailwind CSS
- **[React Icons](https://react-icons.github.io/react-icons/)**: Popular icon sets as React components

<br />

## Getting Started 🚀

### Forking the Repository

1. Go to [fork page](https://github.com/doilyuser/developer-portfolio/fork)
2. Give your fork a name (e.g., "my-portfolio")
3. Click "Create fork"

### Installation

Clone your forked repository and install dependencies:

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Basic Configuration

1. **Update Personal Information**:
   Edit the following files to add your information:
   - `src/data/contact.data.ts`: Your name and contact details
   - `src/data/landing.data.ts`: Your introduction and social links
   - `src/app/layout.tsx`: Update the metadata with your name and description

2. **Replace Images**:
   - Replace `public/images/profile.png` with your profile picture
   - Replace `public/images/og-image.png` with your custom Open Graph image
   - Replace `public/svg/logo.svg` with your logo
   - Replace `public/assets/cv.pdf` with your resume/CV
   - Update `src/app/favicon.ico` with your favicon

3. **Configure EmailJS** (see [EmailJS Setup](https://github.com/doilyuser/developer-portfolio?tab=readme-ov-file#emailjs-setup-) section below)

### Running Locally

Start the development server with Turbopack:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

<br />

## Customization 🎨

### Essential Customization

1. **Personal Information**:
   - Update your name, title, and description in `src/data/landing.data.ts`
   - Update contact information in `src/data/contact.data.ts`
   - Update social media links in `src/data/landing.data.ts`

2. **Navigation**:
   - Customize navigation items in `src/data/navigation.data.ts`
   - Choose which sections to display by modifying the `customNavigationItems` array (or set it to `null` to use the default navigation items)

3. **Logo**:
   - Replace `public/svg/logo.svg` with your own logo
   - Update the `orientation` value in `src/data/navigation.data.ts` to match your logo's shape

4. **Images**:
   - Replace `public/images/profile.png` with your profile picture (recommended: 800x800px)
   - Replace `public/images/og-image.png` with your custom Open Graph image (recommended: 1200x630px)
   - Update `src/app/favicon.ico` with your favicon

5. **Resume/CV**:
   - Replace `public/assets/cv.pdf` with your resume/CV

### Optional Customization

1. **Theme Colors**:
   - Customize colors in `src/app/globals.css`
   - Use a color from your profile picture for a cohesive look (see tip in `profile.png.example`)

2. **SEO**:
   - Update metadata in `src/app/layout.tsx`
   - Customize keywords for better search engine visibility
   - Update structured data in `src/data/schema.data.ts`

3. **Content Sections**:
   - Customize content in the respective data files:
     - `src/data/about.data.ts`
     - `src/data/experience.data.ts`
     - `src/data/projects.data.ts`
     - `src/data/skills.data.ts`
     - `src/data/blog.data.ts`

4. **Footer**:
   - Enable/disable the footer in `src/data/footer.data.ts`

5. **Privacy Policy & Terms and Conditions**:
   - Add links to your privacy policy and terms and conditions in `src/data/contact.data.ts`
   - These will appear in the contact form's consent section

<br />

## Theme Options 🎨

Easily modify your portfolio's theme by changing the color variables in `src/app/globals.css`.

### Blue Theme - [#006d8c](https://colorkit.co/color/006d8c/)

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/user-attachments/assets/7419028f-b5c7-42bf-b012-03d278ac7a6d" width="48%" alt="Blue theme - Light mode"/>
    <img src="https://github.com/user-attachments/assets/6adff0f9-57be-497e-aca0-55adedaca2c4" width="48%" alt="Blue theme - Dark mode"/>
</div>

### Grey Theme - [#30474c](https://colorkit.co/color/30474c/)

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/user-attachments/assets/91ecbfb6-b211-49af-8d07-093ea5945ca0" width="48%" alt="Grey theme - Light mode"/>
    <img src="https://github.com/user-attachments/assets/8430c67b-90c8-4766-bbaa-779688833228" width="48%" alt="Grey theme - Dark mode"/>
</div>

### Orange Theme - [#d46956](https://colorkit.co/color/d46956/)

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/user-attachments/assets/572ec385-8480-489e-abdc-80d61c0a6520" width="48%" alt="Orange theme - Light mode"/>
    <img src="https://github.com/user-attachments/assets/4daf5b77-fdf4-4193-9982-da125a64a5f6" width="48%" alt="Orange theme - Dark mode"/>
</div>

### Red Theme - [#551f1c](https://colorkit.co/color/551f1c/)

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/user-attachments/assets/1d41c7f9-43da-4a35-b5ff-a6bd850a3c26" width="48%" alt="Red theme - Light mode"/>
    <img src="https://github.com/user-attachments/assets/582a54fb-1f7f-4e62-bd8e-e198767274fd" width="48%" alt="Red theme - Dark mode"/>
</div>

### Yellow Theme - [#c69524](https://colorkit.co/color/c69524/)

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/user-attachments/assets/d983dee3-3938-41f9-af8a-8607dacd9aae" width="48%" alt="Yellow theme - Light mode"/>
    <img src="https://github.com/user-attachments/assets/191503cc-1190-4fb0-ab84-357a9e1c9420" width="48%" alt="Yellow theme - Dark mode"/>
</div>

<br />

## EmailJS Setup 📧

The contact form uses EmailJS to send emails directly from the client-side. Follow these steps to set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template with the following variables:
   - `name`: Sender's name
   - `email`: Sender's email
   - `message`: Message content
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SERVICE_ID=your_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_public_key
   ```
6. Restart your development server

<br />

## Deployment 🌐

This portfolio is optimized for deployment on [Vercel](https://vercel.com/), but can be deployed on any platform that supports Next.js.

### Deploying to Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. Connect your GitHub account
3. Import your portfolio repository
4. Add your environment variables (for EmailJS)
5. Click "Deploy"

Vercel will automatically detect that you're using Next.js and configure the build settings accordingly:

<p align="center">
<img src="https://github.com/user-attachments/assets/c9b3f9b4-0e15-4894-8e55-124d98af67bb" alt="Screenshot of vercel settings page" width="450px"/>
</p>


### Other Deployment Options

- **Netlify**: Follow the [Netlify deployment guide for Next.js](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- **GitHub Pages**: Use the [next-github-pages](https://github.com/vercel/next.js/tree/canary/examples/github-pages) example
- **AWS Amplify**: Follow the [AWS Amplify deployment guide](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)

<br />

## Accessibility ♿

This portfolio template is built with accessibility in mind:

- **Semantic HTML**: Proper use of HTML elements for better structure
- **ARIA attributes**: Enhanced screen reader support
- **Keyboard navigation**: Full keyboard accessibility
- **Focus management**: Proper focus handling for interactive elements
- **Color contrast**: WCAG AA compliant color contrast
- **Responsive design**: Accessible on all device sizes
- **Screen reader announcements**: Dynamic content changes are announced to screen readers
- **Form labels**: All form inputs have associated labels

<br />

## SEO Optimization 🔍

This portfolio is optimized for search engines:

- **Metadata**: Customizable title, description, and keywords
- **Structured Data**: JSON-LD schema for better search engine understanding
- **OpenGraph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Canonical URLs**: Prevents duplicate content issues
- **Semantic HTML**: Helps search engines understand your content
- **Responsive Design**: Mobile-friendly (a ranking factor)
- **Performance**: Fast loading times (a ranking factor)
- **robots.txt**: Customizable file to control search engine crawling behavior

<br />

## Photography 📷

Stock photos sourced from [Unsplash](https://unsplash.com/):
- [Charles Deluvio](https://unsplash.com/@charlesdeluvio)
- [Lance Reis](https://unsplash.com/s/photos/lance-reis)
- [Maeva Vigier](https://unsplash.com/s/photos/maeva-vigier)
- [Toa Heftiba](https://unsplash.com/s/photos/toa-heftiba)

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
