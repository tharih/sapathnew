import React, { useRef } from 'react'
import { contact } from '../data'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2sc0jxs', 'template_r3rbx17', form.current, 'JIoITWCRFErW3lGUM')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  


  }
  return (
    <section className='section bg-primary' id='contact'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Contact me</h2>
                <p className='subtitle'>
                    {/* Lorem hfguydwfuyfgewf urgiufguigidu igfguirgh hgfruoighruig  uigrrhuigrehuier
                    ifugiugfuig uigrureuieru fhguegdfg ugrgouirg g urguri gruidghuidr ughfug
                    iufgfdugfuig dfguifhfui udgfuidfui */}
                </p>
            </div>

            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index) => {
                        const { icon, title, subtitle, description} = item;
                        return(
                            <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0'>{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-accent font-normal'>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* form  */}
                <form className='space-y-8 w-full max-w-[780px]' method="post" onSubmit={sendEmail} ref={form} >
                    <div className='flex gap-8'>
                        <input className='input' name='user_name' type='text' placeholder='Your name' />
                        <input className='input' name='user_email' type='email' placeholder='Your email' />
                    </div>
                    <input className='input' name='from_name' type='text' placeholder='Subject' />
                    <textarea className='textarea' name="message" placeholder='Your message'></textarea>
                    <button className='btn btn-lg bg-accent hover:bg-accent-hover' type="submit" value="Send">Send message</button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact