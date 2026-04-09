import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './features/auth/context/authcontext' 

// Componentes Layouts
import { Header } from './features/layout/Header'
import { Footer } from './features/layout/Footer'
import { Content } from './features/layout/Content'

// 1. IMPORTAMOS COMO "Api" (que es como lo tienes en el archivo)
import { Api } from './features/shared/components/ApiRy' 

// Portal de transacciones
import Portal from './features/auth/components/portal'

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        
        {/* 2. USAMOS EL MISMO NOMBRE AQUÍ: <Api /> */}
        <Route path="/Api" element={<Api />} />

        <Route path="/portal" element={<Portal />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}