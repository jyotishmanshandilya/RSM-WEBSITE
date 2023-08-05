import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import ParticleBG from '../components/ParticleBG';
import Nav from "../components/Nav";
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Research Society Manipal | The Official Student Research Body of Manipal Institute Of Technology, Manipal',
  description: 'Next.js website to showcase the clubs activites, events, members, contact info and other information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <body className={montserrat.className}>
        <Nav/>
        {children}
        <ParticleBG />
        <Footer/>
      </body>
      
    </html>
  )
}
