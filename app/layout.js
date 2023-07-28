import './globals.css'
import { Inter } from 'next/font/google'
import ParticleBG from '../components/ParticleBG';
import Nav from "../components/Nav";
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RSM Offical website',
  description: 'Next.js website to showcase the clubs activites, events, members, contact info and other information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <ParticleBG />
        <Footer/>
      </body>
      
    </html>
  )
}
