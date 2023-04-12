import React, { useEffect, useState } from 'react'
import {  services } from '../data'
import { fetchService } from '../utils/fetchService'
import { urlFor } from '../client'

const Services = () => {
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetchService()
          .then((res) => {
            setService(res);
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
  if (loading) return <div>Loading...</div>;


  return (
    <section id='services' className='section bg-tertiary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
                    What I do for clients
                </h2>
                <p className='subtitle'>
                    {/* Lorem hfguydwfuyfgewf urgiufguigidu igfguirgh hgfruoighruig  uigrrhuigrehuier
                    ifugiugfuig uigrureuieru fhguegdfg ugrgouirg g urguri gruidghuidr ughfug
                    iufgfdugfuig dfguifhfui udgfuidfui */}
                </p>
            </div>

            {/* item grid  */}
            <div className='grid lg:grid-cols-3 gap-8'>
                {service.map((service, index) => {
                    const { icon, name, description } = service;
                    return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                        {/* <img
                      className=""
                      src={urlFor(servic[0]?.icon?.asset._ref).url()}
                      alt=""
                    /> */}
                    
                        </div>
                        <h4 className='text-xl font-medium mb-2'>{service?.name}</h4>
                        <p>{service?.description}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services