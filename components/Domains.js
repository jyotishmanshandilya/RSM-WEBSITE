import React from 'react'
import Image from 'next/image'

const Domains = () => {
  return (
    <section className='bg-[#1c1c1ce1] mt-10 p-24'>
      <div className='mx-auto max-w-screen-lg'>
        <h2 className='text-white text-center'>OUR DOMAINS</h2>
        <br/>
        <br/>
        <div className='flex justify-center'>
            <div className='bg-[#1c1c1c] lg:max-w-lg p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
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
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/chemical.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>CHEMICAL ENGINEERING</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/electric.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>ELECTRONICS</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/bio.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>BIOTECHNOLOGY</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/arm.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>ROBOTICS</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning className='text-center text-white' 
                and so much more.
                </p>
            </div>
            <div className='bg-[#1c1c1c] p-5 shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none rounded-2xl border-2 border-transparent'>
                <Image className='mx-auto' src={'/aero.png'} width={100} height={100}/>
                <h2 className='text-center text-white text-2xl'>AERODYNAMICS</h2>
                <p className='text-center text-base'>AI is an interdisciplinary science with multiple approaches. <br/> 
                Research in machine learning and deep learning has brought about a paradigm 
                shift in virtually every aspect of life. <br/> At RSM, we dive into several 
                sub-fields such as NLP, CV, Reinforcement Learning, GANs, Federated Learning 
                and so much more.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Domains
