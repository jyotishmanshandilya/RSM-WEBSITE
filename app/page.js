'use client'
import Nav from '@/components/Nav'
import ParticleBG from '@/components/ParticleBG'
import Image from 'next/image'
import Link from "next/link";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      RSM Website
      <ParticleBG />
      <Nav />
    </main>
  );
}
