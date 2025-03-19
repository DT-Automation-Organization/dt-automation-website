# DT Automation Website

A modern, responsive website for DT Automation, built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design with modern UI/UX
- Light and dark mode support
- Interactive animations using Framer Motion
- Form validation with custom hooks
- SEO-friendly with React Helmet
- Privacy Policy page for Facebook Developer API compliance
- GitHub Pages deployment configuration

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for JavaScript
- **React Router**: For navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Helmet**: Managing document head for SEO
- **Formik**: Form management (with custom implementation)
- **GitHub Pages**: Hosting and deployment

## Project Structure

```
dt-automation-website/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── styles/           # Global styles and theme
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── routes.tsx        # Route definitions
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DTDucas/dt-automation-website.git
   cd dt-automation-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Deployment

The website is configured for GitHub Pages deployment. Follow these steps:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:

   ```json
   "homepage": "https://dt-automation-website.github.io/"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

This will build the project and publish it to the `gh-pages` branch of your repository.

## Required Assets

You'll need to prepare the following assets:

1. Logo (SVG format recommended)
2. Favicon and app icons
3. Hero background image
4. Service and feature images
5. Team member photos
6. Other images referenced in the code

## Customization

- **Colors**: Edit the `tailwind.config.js` file to customize the color scheme
- **Content**: Update text content in components
- **Images**: Replace image placeholders in the `/public/images/` directory

## Facebook Developer API Compliance

The website includes a comprehensive Privacy Policy page that meets the requirements for Facebook Developer API approval. You can find it at `/privacy`.

## License

[MIT License](LICENSE)

## Contact

For support or inquiries, please contact:

- Email: baymax.contact@gmail.com
