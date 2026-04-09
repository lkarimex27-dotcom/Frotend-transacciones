import React from 'react'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from "./features/auth/context/Authcontext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
