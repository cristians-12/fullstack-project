import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RegisterPage from './pages/auth/register/RegisterPage.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/auth/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
  </StrictMode>,
)
