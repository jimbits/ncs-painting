# NCS Painting - Professional Painting Services Website

[![Live Site](https://img.shields.io/badge/Live-ncs--painting.vercel.app-brightgreen)](https://ncs-painting.vercel.app)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](#)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

> Edmonton's Complete Interior & Exterior House Painting Services - Over 35 years of excellence in residential and commercial painting solutions.

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Services Highlighted](#services-highlighted)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎨 About The Project

NCS Painting website is a professional business website showcasing comprehensive interior and exterior painting services in Edmonton and surrounding areas. The site features a modern, responsive design that effectively communicates the company's 35+ years of experience and commitment to quality craftsmanship.

### Built With Experience In Mind

This website serves as the digital presence for NCS Painting, highlighting their extensive service offerings, customer testimonials, and professional expertise in the Edmonton market.

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop viewing
- **Service Showcase** - Comprehensive display of interior and exterior painting services
- **Image Gallery** - Professional photography showcasing completed projects
- **Customer Testimonials** - Social proof through client reviews and feedback
- **Contact Integration** - Easy-to-find contact information and call-to-action buttons
- **SEO Optimized** - Structured for local Edmonton search visibility
- **Fast Loading** - Optimized images and performance-focused build
- **Professional Branding** - Consistent visual identity throughout

## 🛠 Tech Stack

- **Frontend Framework**: [Add your framework - Next.js, React, Vue, etc.]
- **Styling**: [Add your CSS solution - Tailwind, CSS Modules, etc.]
- **Image Optimization**: Cloudinary CDN integration
- **Hosting**: Vercel Platform
- **Domain**: Custom domain with SSL

## 🚀 Getting Started

### Prerequisites

Before running this project locally, ensure you have:

- Node.js (version 16.0 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ncs-painting-website.git
   cd ncs-painting-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables:
   ```env
   CLOUDINARY_URL=your_cloudinary_url
   NEXT_PUBLIC_CONTACT_EMAIL=info@ncspainting.com
   NEXT_PUBLIC_PHONE=(780)-722-6555
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the site

## 📁 Project Structure

```
ncs-painting-website/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── About/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── pages/
│   │   ├── index.js
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── styles/
│   │   ├── globals.css
│   │   └── components/
│   └── utils/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

## 💼 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests (if configured)
npm test
```

### Key Components

- **Hero Section** - Eye-catching introduction with company value proposition
- **Services Grid** - Organized display of interior and exterior services
- **About Section** - Company history and expertise showcase
- **Image Gallery** - Before/after project photos using Cloudinary
- **Testimonials** - Customer review carousel/grid
- **Contact Forms** - Lead generation and inquiry handling

## 🎯 Services Highlighted

### Interior Services
- Wall, Ceiling & Feature Wall Painting
- Cabinet Painting & Refinishing
- Wallpaper Installation & Removal
- Trim & Crown Molding Painting
- Eco-friendly Interior Painting
- Popcorn Ceiling Removal

### Exterior Services
- Siding (Wood & Metal)
- Stucco Painting & Repair
- Brick Painting & Staining
- Deck & Fence Painting/Staining
- Garage Door Painting
- Window Frame & Shutter Painting

### Additional Services
- Faux Finishes
- Airless & HVLP Spraying
- Wood Refinishing
- Drywall Repairs & Installation
- Power Washing
- Minor Carpentry

## 🚀 Deployment

This site is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. **Connect your repository to Vercel**
2. **Configure environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 🤝 Contributing

We welcome contributions to improve the NCS Painting website. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**NCS Painting**
- Phone: (780) 722-6555
- Website: [ncs-painting.vercel.app](https://ncs-painting.vercel.app)
- Service Areas: Edmonton, St. Albert, Sherwood Park, Stony Plain

**Project Repository**
- GitHub: [Your GitHub Profile](https://github.com/your-username)
- Issues: [Report Issues](https://github.com/your-username/ncs-painting-website/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎨 Design Credits

- Professional photography by NCS Painting team
- Image optimization via Cloudinary CDN
- Responsive design optimized for Edmonton market

**Built with ❤️ for Edmonton's premier painting professionals**