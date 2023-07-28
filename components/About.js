import React from 'react'

const About = () => {
  return (
    <section id='About' className='bg-[#1c1c1ce1] mt-10 lg:p-24 p-10 opacity-90'>
    <div className=' mx-auto text-center max-w-screen-lg text-justify'>
      <div className='pb-16'>
        <h2 className='text-white text-center'>
            ABOUT US            
        </h2>
        <p className='pt-5'>
            The Research Society is Manipal's official student research body that works on an array of research projects, 
            covering a broad span of fields, from artificial intelligence and robotics to nanotechnology and immunology.
        </p>
      </div>
      <div>
        <h3 className='text-white text-center'>WHAT WE DO</h3>
        <div className='pt-5 flex flex-col lg:flex-row lg:gap-x-10'>
            <p>Our aim is to facilitate the development of a research community that can work on projects, both interdisciplinary 
                and otherwise. <br/> We also look to bridge the gap between our students and alumni from universities all across 
                the globe, many of whom have an illustrious research background themselves. <br/> Along with this, we have several 
                students who have published research and bagged foreign internships at premier institutes.
            </p>
            <p>
            RSM actively strikes to foster a holistic spirit of research and encourages students to pursue research in the hopes 
            of making a meaningful contribution. <br/> To this end, several of our events, such as the paper discussion sessions, 
            breakout discussions and alumni webinars are open to everyone. <br/> Additionally, we also provide guidance to students 
            of the institute, regardless of their prior research background and affiliation to the organization.
            </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
