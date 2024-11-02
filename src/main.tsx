import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './views/Main.tsx'
import './index.css'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import BaseLayout from './layouts/base-layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BaseLayout>
        <Main />
      </BaseLayout>
    </ThemeProvider>
  </StrictMode>,
)
