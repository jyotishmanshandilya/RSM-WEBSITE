import React from 'react'
import Image from 'next/image'

const Domains = () => {
  return (
    <section className='bg-[#1c1c1ce1] mt-10 lg:p-24 p-10 opacity-90'>
      <div className='mx-auto max-w-screen-lg'>
        <h2 className='text-white text-center'>OUR DOMAINS</h2>
        <br/>
        <br/>
        <div className='flex justify-center'>
            <div className='bg-[#1c1c1c] p-5 lg:max-w-lg p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/AI.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>ARTIFICIAL INTELLIGENCE</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
        </div>
        <div className='mt-10 grid lg:grid-cols-3 gap-10 '>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/design.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>HUMANITIES AND PSYCHOLOGY</h2>
                <p className='text-center text-base'>Humanities and psychology is all about people and their 
                interaction with technology. <br/> This involves studying the influence products have on user 
                behaviour or testing new designs for usability. <br/> We explore different areas of technology 
                and try to make the experience better for people.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/chemical.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>CHEMICAL ENGINEERING</h2>
                <p className='text-center text-base'>Chemical engineering shows paths to various interesting 
                fields like Nanotechnology, Drug Delivery, Thermodynamics and Renewable energy among countless 
                others. <br/> We aim to overcome some of the toughest challenges of the 21st century like climate 
                change, vaccines, drinking water scarcity etc.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/electric.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>ELECTRONICS</h2>
                <p className='text-center text-base'>Electronics is a culmination of physics, nanomaterials, 
                quantum mechanics, signal processing, circuit design and algorithms. <br/> We dive into the nano 
                realm to make things like nanoscale devices, quantum computing, neuromorphic computing and so 
                much more possible.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/bio.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>BIOTECHNOLOGY</h2>
                <p className='text-center text-base'>Biotechnology is the sweet spot between Biology, 
                Technology and Engineering. <br/> It's the area of study responsible for production of 
                medicines, environmental control, vaccines, cancer research and many more fields.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/arm.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>ROBOTICS</h2>
                <p className='text-center text-base'>Robotics is an integration of maths, physics, and 
                engineering fields. <br/>At RSM, we are focused on intense research in the fields of perception, 
                planning, kinematics sprawling across autonomous systems, multi-agent systems, biomedical robots 
                to name a few.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/aero.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>AERODYNAMICS</h2>
                <p className='text-center text-base'>The rules of aerodynamics are a subset of fluid dynamics 
                which explains how an aeroplane is able to fly, the reason behind designing rockets in a specific 
                shape and much more. <br/> An uprising sector due to the recent interests in the commercialization 
                of the space industry.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Domains
