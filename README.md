# React Vite Template

A modern, production-ready React application template built with Vite, featuring authentication, routing, state management, and a comprehensive development setup.

## 🚀 Features

- **⚡ Vite** - Lightning-fast build tool and dev server
- **⚛️ React 19** - Latest React with modern features
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🛣️ React Router** - Client-side routing with protected routes
- **🔐 Authentication** - Complete auth system with context management
- **📡 API Integration** - Axios-based API client with organized endpoints
- **🔔 Toast Notifications** - Beautiful notifications with Sonner
- **📱 Responsive Design** - Mobile-first responsive layout
- **🛡️ Code Quality** - ESLint, Prettier, and Husky pre-commit hooks
- **📦 Modern Tooling** - Latest development tools and best practices

## 🏗️ Project Structure

```
src/
├── api/                    # API configuration and endpoints
│   ├── apiClient.js       # Axios instance and HTTP methods
│   ├── axiosInstance.js   # Axios configuration
│   ├── endpoints.js       # API endpoint definitions
│   └── index.js          # API exports
├── assets/                # Static assets
├── context/               # React Context providers
│   └── userContext/      # User authentication context
├── pages/                 # Page components
│   ├── auth/             # Authentication pages
│   │   ├── signIn/       # Sign in page
│   │   └── signUp/       # Sign up page
│   ├── dashboard/        # Protected dashboard pages
│   │   └── profile/      # User profile page
│   ├── home/             # Public home page
│   └── notFound/         # 404 error page
├── routes/                # Routing configuration
│   ├── protected/        # Protected route wrapper
│   └── public/           # Public route wrapper
├── App.jsx               # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## 🛠️ Tech Stack

### Core

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.3** - Client-side routing

### Styling

- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind

### State Management & API

- **React Context** - Built-in state management
- **Axios 1.12.2** - HTTP client
- **Sonner 2.0.7** - Toast notifications

### Development Tools

- **ESLint** - Code linting with React and import rules
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-vite-template
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

## 📜 Available Scripts

| Script                 | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run preview`      | Preview production build  |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | Fix ESLint errors         |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check code formatting     |

## 🔐 Authentication System

The template includes a complete authentication system:

- **User Context** - Global state management for user data
- **Protected Routes** - Route protection based on authentication status
- **Local Storage** - Persistent user session
- **API Integration** - Ready-to-use auth endpoints

### Usage Example

```jsx
import { useUserContext } from './context';

function MyComponent() {
  const { isLoggedIn, user, setIsLoggedIn } = useUserContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic
  };

  return <div>{isLoggedIn ? <p>Welcome, {user?.name}!</p> : <p>Please sign in</p>}</div>;
}
```

## 🛣️ Routing

The app uses React Router with a clean route structure:

- **Public Routes** - Accessible without authentication
  - `/` - Home page
  - `/auth/signin` - Sign in page
  - `/auth/signup` - Sign up page

- **Protected Routes** - Require authentication
  - `/dashboard` - Dashboard home
  - `/dashboard/profile` - User profile

- **Fallback** - 404 page for unknown routes

## 📡 API Integration

The template includes a well-organized API layer:

```jsx
import { get, post, END_POINTS } from './api';

// Example usage
const signIn = async (credentials) => {
  try {
    const response = await post(END_POINTS.SIGN_IN, credentials);
    return response.data;
  } catch (error) {
    console.error('Sign in failed:', error);
    throw error;
  }
};
```

## 🎨 Styling

The project uses Tailwind CSS for styling:

- **Utility-first** approach
- **Responsive design** built-in
- **Custom configuration** ready
- **Dark mode** support available

## 🔧 Configuration

### ESLint Configuration

- React and React Hooks rules
- Import/export organization
- Code quality enforcement
- Prettier integration

### Prettier Configuration

- Single quotes
- 2-space indentation
- No trailing commas
- 100 character line width

### Git Hooks

- **Pre-commit** - Runs linting and formatting
- **Husky** - Git hook management
- **lint-staged** - Staged file processing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/routes/index.tsx`
3. Update navigation if needed

### Adding API Endpoints

1. Add endpoint to `src/api/endpoints.js`
2. Use in components with the API client

### Styling Customization

- Modify `tailwind.config.js` for theme customization
- Add custom CSS in `src/index.css`
- Use Tailwind utilities for component styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) for the UI library
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- [React Router](https://reactrouter.com/) for routing
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications

---

**Happy coding! 🎉**
