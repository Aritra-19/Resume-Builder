<div align="center">

<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/file-text.svg" width="80" alt="Resume Builder Logo" />

# ✨ Resume Builder

### AI-Powered Resume Creation Platform

*Build stunning, ATS-friendly resumes in minutes — with a little help from AI.*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

</div>

## 🚀 What is Resume Builder?

**Resume Builder** is a full-stack web application that lets users create polished, professional resumes with the power of AI assistance. Whether you're starting from scratch or uploading an existing resume, the app intelligently extracts your data, enhances your content, and presents it across beautiful templates — all ready to share or download.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🤖 **AI Content Enhancement** | Automatically improve your professional summary and job descriptions using OpenAI GPT |
| 📄 **PDF Resume Upload** | Upload an existing PDF resume and let AI parse and populate your data instantly |
| 🎨 **Multiple Templates** | Choose from Classic, Modern, Minimal, and Minimal-Image resume layouts |
| 🎨 **Color Customization** | Personalize your resume's color scheme with an in-built color picker |
| 📸 **Profile Photo Upload** | Upload and display a professional profile image via ImageKit CDN |
| 👁️ **Live Preview** | See real-time changes as you fill in your resume sections |
| 🔗 **Public Resume Link** | Share a public, shareable URL for your resume with anyone |
| 🔐 **Auth & Dashboard** | Secure JWT-based login with a personal dashboard to manage all your resumes |

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React 19** — UI framework
- **Vite 8** — Lightning-fast build tool
- **Tailwind CSS 4** — Utility-first styling
- **Redux Toolkit** — Global state management
- **React Router DOM 7** — Client-side routing
- **Axios** — HTTP client
- **Lucide React** — Icon library
- **React Hot Toast** — Notifications
- **react-pdftotext** — Client-side PDF text extraction

### Backend (`/server`)
- **Node.js + Express 5** — REST API server
- **MongoDB + Mongoose** — Database & ODM
- **OpenAI SDK** — AI content enhancement & resume parsing
- **ImageKit** — Image storage & CDN
- **Multer** — File upload handling
- **JWT + bcrypt** — Authentication & password hashing

---

## 📁 Project Structure

```
Resume_builder/
├── client/                     # React frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── configs/        # Axios API config
│   │   │   ├── features/       # Redux auth slice
│   │   │   └── store.js        # Redux store
│   │   ├── assets/
│   │   │   └── templates/      # Template preview components
│   │   ├── components/
│   │   │   ├── home/           # Landing page sections (Hero, Banner, Features…)
│   │   │   ├── templates/      # Resume templates (Classic, Modern, Minimal…)
│   │   │   ├── ColorPicker.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   ├── ProfessionalSummaryForm.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   └── TemplateSelector.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── Dashboard.jsx   # User's resume list
│   │   │   ├── ResumeBuilder.jsx  # Main builder page
│   │   │   ├── Preview.jsx     # Public preview page
│   │   │   └── Login.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/                     # Express backend
    ├── configs/
    │   ├── AI.js               # OpenAI client setup
    │   ├── db.js               # MongoDB connection
    │   ├── imageKit.js         # ImageKit configuration
    │   └── multer.js           # File upload config
    ├── controllers/
    │   ├── aiController.js     # AI enhancement & PDF parsing
    │   ├── resumeController.js # CRUD for resumes
    │   └── userController.js   # Auth (register/login)
    ├── middlewares/
    │   └── authMiddleware.js   # JWT verification
    ├── models/
    │   ├── Resume.js
    │   └── User.js
    ├── routes/
    │   ├── aiRoutes.js
    │   ├── resumeRoutes.js
    │   └── userRoutes.js
    └── server.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- [OpenAI API key](https://platform.openai.com/)
- [ImageKit account](https://imagekit.io/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resume-builder.git
cd resume-builder
```

---

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

Start the server:

```bash
# Development (with auto-reload)
npm run server

# Production
npm start
```

The API will be live at `http://localhost:3000`

---

### 3. Setup the Client

```bash
cd ../client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The app will be live at `http://localhost:5173`

---

## 🔌 API Endpoints

### Auth — `/api/users`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Create a new account |
| `POST` | `/login` | Log in and receive a JWT |
| `GET`  | `/data` | Get authenticated user data |

### Resumes — `/api/resumes`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST`   | `/create` | Create a new blank resume |
| `GET`    | `/user` | Get all resumes for the logged-in user |
| `GET`    | `/:resumeId` | Get a specific resume (authenticated) |
| `GET`    | `/public/:resumeId` | Get a resume for public viewing |
| `PUT`    | `/:resumeId` | Update resume data |
| `PUT`    | `/upload-image/:resumeId` | Upload a profile photo |
| `DELETE` | `/:resumeId` | Delete a resume |

### AI — `/api/ai`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/enhance-summary` | AI-enhance a professional summary |
| `POST` | `/enhance-description` | AI-enhance a job description |
| `POST` | `/upload-resume` | Upload & parse a PDF resume with AI |

---

## 🎨 Resume Templates

The app ships with **4 professionally designed templates**:

| Template | Description |
|---|---|
| **Classic** | Traditional two-column layout with a clean, formal structure |
| **Modern** | Bold header design with a contemporary color accent system |
| **Minimal** | Clean, text-focused layout with generous whitespace |
| **Minimal Image** | Minimal layout enhanced with a profile photo sidebar |

---

## 📸 Screenshots

> _Add screenshots of your app here to make the README shine!_
>
> Suggested shots:
> - Home / landing page
> - Dashboard with resume cards
> - Resume builder form
> - Live preview with a template
> - Public share link view

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

Made with ❤️ using React, Node.js, and a sprinkle of AI

</div>
