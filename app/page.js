'use client'
import Image from 'next/image'
import Link from "next/link";
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'
import Domains from '../components/Domains'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner/>
      <About/>
      <Domains/>
      <Contact/>
    </main>
  );
}
