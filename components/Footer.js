import { Link } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black lg:p-24 p-10'>
        <div className='mx-auto lg:max-w-screen-lg grid grid-cols-1 lg:grid-cols-4'>
            <div className='flex flex-col'>
                <h3 className='text-white text-3xl'>Links</h3>
                <ul className='flex flex-col text-xl mt-3 gap-2'>
                    <Link className='no-underline text-slate-300' href='/'>Home</Link>
                    <Link className='no-underline text-slate-300' href='/Events'>Events</Link>
                    <img
                        width={100}
                        height={100}
                        src="https://res.cloudinary.com/rsmanipal/image/upload/v1615985422/ResearchSoc/mit_white_ll4bne.png"
                        alt="logo"
                    />
                </ul>
            </div>

            <div>
                <h3 className='text-white text-3xl'>About</h3>
                    <ul className='flex flex-col text-xl mt-3 gap-2'>
                        <Link className='no-underline text-slate-300' href='#About'>Research Society</Link>
                        <Link className='no-underline text-slate-300' href='/Team'>Team</Link>
                        <Link className='no-underline text-slate-300' href='/Publications'>Publications</Link>
                        {/* <ul>
                            <Link><Image/></Link>
                            <Link><Image/></Link>
                            <Link><Image/></Link>
                        </ul> */}
                    </ul>
            </div>

            <div className='col-span-2 p-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.9637195293235!2d74.79063371477467!3d13.352532090606745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a7d2c4edb7%3A0x8d588d4fb81d861f!2sManipal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1614173951024!5m2!1sen!2sin" width="100%" height="250px"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Footer
