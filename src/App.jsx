import React from 'react'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from "../AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
