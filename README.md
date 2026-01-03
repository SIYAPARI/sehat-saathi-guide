# Welcome to your My project

## Project info

**URL**: https://sehat-saathi-guide.netlify.app/
## Don't forget to rate this app


# 🏥 Sehat Saathi Guide

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://sehat-saathi-guide.netlify.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)

A comprehensive guide and resource platform for the SAATHI initiative at IIT Madras - empowering students with mental wellness resources, information, and support systems.

🌐 **Live Demo:** [https://sehat-saathi-guide.netlify.app/](https://sehat-saathi-guide.netlify.app/)

---

## 📸 UI Preview

### 🏠 Home
![Home Page](./screenshots/home.png)

### 🤖 AI Assistant
![AI Assistant](./screenshots/ai-assistant.png)

### 💊 Medicine Store
![Medicine Store](./screenshots/store.png)

### 🩺 Health Suggestions
![Health Suggestions](./screenshots/health-suggestions.png)

### 📝 Symptom Tracker
![Symptom Tracker](./screenshots/symptoms.png)


## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

**Sehat Saathi Guide** is a digital platform designed to provide accessible information and resources related to student wellness and mental health support systems at IIT Madras. SAATHI (Student wellness cell) is a proactive platform for self-growth and well-being, and this guide aims to make their services and resources more discoverable and accessible to students.

The application serves as a centralized hub for:
- Information about wellness programs and initiatives
- Mental health resources and support systems
- Student mentorship and academic support services
- Guidance for navigating campus wellness facilities

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive interface built with React and Tailwind CSS
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast development and optimized builds
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- 🧩 **Component-Based Architecture** - Reusable UI components using shadcn/ui
- 🎭 **Type Safety** - Built with TypeScript for robust code quality
- 🌐 **Deployed on Netlify** - Continuous deployment with automatic updates

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.x** - UI library for building interactive interfaces
- **TypeScript 5.x** - Type-safe JavaScript
- **Vite 5.x** - Next-generation frontend tooling

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations and optimizations
- **shadcn/ui** - High-quality, accessible component library
- **Lucide React** - Beautiful, consistent icon set

### Development Tools
- **ESLint** - Code linting and quality checks
- **Bun** - Fast JavaScript runtime and package manager (alternative to npm/yarn)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (v9.x or higher) or **Bun** - Comes with Node.js or [install Bun](https://bun.sh/)
- **Git** - [Download here](https://git-scm.com/)

---

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Naman-iitm/sehat-saathi-guide.git
cd sehat-saathi-guide
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using Bun:
```bash
bun run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

---

## 💻 Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
# or
bun run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
bun run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
bun run lint
```

---

## 📁 Project Structure

```
sehat-saathi-guide/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components
│   │   └── ui/            # shadcn/ui components
│   ├── lib/               # Utility functions and helpers
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app-specific config
├── tsconfig.node.json     # TypeScript Node-specific config
└── vite.config.ts         # Vite configuration
```

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Steps to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this page

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/sehat-saathi-guide.git
   cd sehat-saathi-guide
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Write clear commit messages
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail

### Contribution Guidelines

- Ensure your code follows the existing style and conventions
- Write meaningful commit messages
- Update documentation if needed
- Test your changes before submitting
- Be respectful and constructive in discussions

### Code of Conduct

This project follows a Code of Conduct to ensure a welcoming environment for all contributors. Please be respectful, inclusive, and considerate in all interactions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Contact

**Naman Jha** - [GitHub Profile](https://github.com/Naman-iitm)

**Project Link:** [https://github.com/Naman-iitm/sehat-saathi-guide](https://github.com/Naman-iitm/sehat-saathi-guide)

**Live Website:** [https://sehat-saathi-guide.netlify.app/](https://sehat-saathi-guide.netlify.app/)

---

## 🙏 Acknowledgments

- **SAATHI Team** - Student Wellness Cell, IIT Madras
- **IIT Madras** - For supporting student wellness initiatives
- **shadcn/ui** - For the beautiful component library
- **Netlify** - For hosting and continuous deployment

---

## 📊 Project Status

🚧 **Status:** Active Development

This project is actively maintained and open to contributions. Check the [Issues](https://github.com/Naman-iitm/sehat-saathi-guide/issues) page for current tasks and feature requests.

---

Made with ❤️ for the IIT Madras community