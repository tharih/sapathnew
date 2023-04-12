import React, { useEffect, useState } from 'react'
import Image from '../assets/img/about.webp'
import { fetchAbout } from '../utils/fetchAbout'

const About = () => {
    const [about, setAbout] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetchAbout()
          .then((res) => {
            setAbout(res);
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);


     
  return (
    <section id='about' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-24'>
                <img className='object-cover h-full w-[566px] md:mx-auto lg-mx-0 rounded-2xl' src={Image} alt='' />
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                            {about[0]?.name}
                           
                        </h2>
                        <p className='mb-4 text-accent'>{about[0]?.job}</p>
                        <hr className='mb-8 opacity-5'/>
                        <p className='mb-8'>
                            {about[0]?.description}
                        </p> <br />
                        <p className='mb-8'>
                        {about[0]?.description}

                        </p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'> Download CV</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About