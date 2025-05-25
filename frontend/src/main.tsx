import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RegisterPage from './pages/auth/register/RegisterPage.tsx'
import { Toaster } from 'react-hot-toast'
import LoginPage from './pages/auth/login/LoginPage.tsx'
import AuthMiddleware from './middleware/AuthMiddleware.tsx'
import DashboardPage from './pages/dashboard/Dashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route
          path='/dashboard'
          element={
            <AuthMiddleware>
              <DashboardPage />
            </AuthMiddleware>
          }
        />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </StrictMode>,
)
