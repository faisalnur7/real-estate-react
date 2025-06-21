import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './contexts/AuthContext.jsx';
import { RouterProvider } from "react-router-dom";
import router from './routes/Routes.jsx';
import { TitleProvider } from './contexts/TitleContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TitleProvider>
      <RouterProvider router={router}></RouterProvider>
    </TitleProvider>
  </AuthProvider>
  </StrictMode >,
)
