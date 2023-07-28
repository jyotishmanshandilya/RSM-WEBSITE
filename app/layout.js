import './globals.css'
import { Inter } from 'next/font/google'
import ParticleBG from '../components/ParticleBG';
import { StyledEngineProvider } from "@mui/material/styles";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RSM Offical website',
  description: 'Next.js website to showcase the clubs activites, events, members, contact info and other information',
}

export default function RootLayout({ children }) {
  return (
    // <StyledEngineProvider injectFirst>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ParticleBG />
      </body>
      
    </html>
      // </StyledEngineProvider>
  )
}
