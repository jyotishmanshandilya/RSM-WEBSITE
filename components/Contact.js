'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqojayo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
        <form onSubmit={handleSubmit} className='rounded-lg flex flex-col justify-content m-5'>
            <h2 className='text-white font-thin mb-10'>LEAVE A COMMENT</h2>
            <label className='text-white' htmlFor="name">
                Full Name
            </label>
            <input
                className='bg-[#353535] p-4 text-[#929297]'
                id="name"
                type="name" 
                name="name"
            />
            <label className='text-white mt-5' htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label className='text-white' htmlFor="email">
                Message
            </label>
            <textarea
                className='bg-[#353535] text-[#929297] p-4'
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
            <button type="submit" disabled={state.submitting} className='mt-10 bg-black text-white text-base p-3 rounded-lg'>
                Send Message
            </button>
        </form>
  );
}

function ContactInfo(){
    return (
        <section >
            <div className='text-white m-5'>
                <h2 className='font-thin mb-5'>CONTACT US</h2>
                <div className='mb-5'>
                    <img/>
                    <ul>
                        <li className='text-xl font-semibold'>OUR LOCATION</li>
                        <li>MIT, Manipal</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <img/>
                    <ul>
                        <li className='text-xl font-semibold'>PHONE</li>
                        <li>+91 84440-08665 (Pratinav Seth)</li>
                        <li>+91 84848-99782 (Sanskruti C)</li>
                    </ul>
                </div>
                <div>
                    <img/>
                    <ul>
                        <li className='text-xl font-semibold'>MAIL</li>
                        <li>research.society.mit@gmail.com</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

function Contact() {
  return (
    <section id='Contact' className='lg:pt-20 mt-10 bg-[#222222ef] opacity-90 lg:p-24 p-5'>
        <div className='grid lg:grid-cols-2 lg:max-w-screen-lg mx-auto'>
            <ContactInfo/>
            <ContactForm />
        </div>
    </section>
  );
}
export default Contact;
