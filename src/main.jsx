import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@material-tailwind/react'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
  <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </ThemeProvider>
    
  </StrictMode>,
)
