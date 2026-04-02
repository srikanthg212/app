# Infinite Mind - Counselling Services Website

<div align="center">
  <img src="https://customer-assets.emergentagent.com/job_wp-to-html-daycare/artifacts/k7rdq8r0_InfinteMindLogo.png" alt="Infinite Mind Logo" width="300"/>
  
  ### Nurturing minds, Empowering Lives
  
  A modern, responsive website for professional psychology counselling services built with React and FastAPI.
  
  [Live Demo](https://wp-to-html-daycare.preview.emergentagent.com) • [Report Bug](https://github.com/srikanthg212/InfiniteMind/issues) • [Request Feature](https://github.com/srikanthg212/InfiniteMind/issues)
</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

Infinite Mind is a professional counselling services website designed to provide a welcoming and supportive online presence for mental health professionals. The website offers comprehensive information about counselling services, therapist profiles, session pricing, and therapeutic approaches.

### Why Infinite Mind?

- **Professional Design**: Clean, modern interface that builds trust and comfort
- **Comprehensive Services**: Individual, couples, and group therapy options
- **Transparent Pricing**: Clear session options with flexible packages
- **Expert Team**: Showcase qualified therapists and their specializations
- **Evidence-Based**: Highlight proven therapeutic approaches

---

## ✨ Features

- 🏠 **Hero Section** - Engaging landing with tagline and call-to-action
- 📖 **About Section** - Mission, values, and founder information
- 💼 **Services** - Individual, Couples, and Group therapy options
- 💰 **Flexible Pricing** - Session packages in Indian Rupees (₹)
- 🧠 **Therapeutic Approaches** - CBT, Mindfulness, Trauma-Informed Care, and more
- 👥 **Team Profiles** - Meet qualified therapists
- 📸 **Gallery** - Calming therapy environment images
- 💬 **Testimonials** - Client success stories
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Modern UI** - Built with React and Tailwind CSS
- ⚡ **Fast Performance** - Optimized loading and smooth animations

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - UI library
- **React Router DOM** 7.5.1 - Routing
- **Tailwind CSS** 3.4.17 - Styling
- **Shadcn UI** - Component library
- **Lucide React** - Icons
- **Axios** - HTTP client

### Backend
- **FastAPI** 0.110.1 - Python web framework
- **Motor** 3.3.1 - Async MongoDB driver
- **MongoDB** - Database
- **Uvicorn** 0.25.0 - ASGI server
- **Pydantic** 2.6.4 - Data validation

### Development Tools
- **CRACO** 7.1.0 - React configuration
- **ESLint** 9.23.0 - Linting
- **Supervisor** - Process management

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.9 or higher)
- **MongoDB** (v4.5 or higher)
- **Yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srikanthg212/InfiniteMind.git
   cd InfiniteMind
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

---

## 🔐 Environment Variables

### Frontend (.env)
Create a `.env` file in the `frontend` directory:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
Create a `.env` file in the `backend` directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=infinitemind
```

---

## ▶️ Running the Application

### Development Mode

**Start MongoDB** (if running locally):
```bash
mongod
```

**Start Backend Server**:
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

**Start Frontend Development Server**:
```bash
cd frontend
yarn start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs

### Production Build

**Build Frontend**:
```bash
cd frontend
yarn build
```

**Run Backend**:
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001
```

---

## 📁 Project Structure

```
InfiniteMind/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── ScheduleSection.jsx
│   │   │   ├── WhyUsSection.jsx
│   │   │   ├── GallerySection.jsx
│   │   │   ├── ApproachesSection.jsx
│   │   │   ├── TherapistsSection.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   ├── FinalCTASection.jsx
│   │   │   └── Footer.jsx
│   │   ├── mockData.js          # Mock data for development
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── server.py                # FastAPI application
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## 📸 Screenshots

### Hero Section
Beautiful landing page with tagline "Nurturing minds, Empowering Lives"

### Services Section
Three main therapy options: Individual, Couples, and Group therapy

### Pricing Section
Transparent pricing in Indian Rupees:
- Single Session: ₹1,000
- Monthly Package: ₹4,000
- Intensive Program: ₹8,000

### Team Section
Professional therapist profiles with credentials

---

## 🎨 Design Features

- **Color Palette**: Calming cyan/turquoise with orange accents
- **Typography**: Clean, professional sans-serif fonts
- **Animations**: Smooth hover effects and transitions
- **Shadows**: Subtle depth for cards and images
- **Rounded Corners**: Modern, friendly aesthetic
- **Responsive**: Mobile-first design approach

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📞 Contact

**Infinite Mind Counselling Services**

- 📧 Email: info@infinitemind.com
- 📱 Phone: (123) 456-7890
- 📍 Address: 123 Wellness Street, Suite 100, City, ST 12345
- 🌐 Website: [infinitemind.com](https://wp-to-html-daycare.preview.emergentagent.com)

**GitHub**: [@srikanthg212](https://github.com/srikanthg212)

**Project Link**: [https://github.com/srikanthg212/InfiniteMind](https://github.com/srikanthg212/InfiniteMind)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) - Professional imagery
- [Pexels](https://pexels.com/) - Stock photos

---

<div align="center">
  <p>Built with ❤️ for mental wellness</p>
  <p>© 2025 Infinite Mind Counselling. All rights reserved.</p>
</div>
