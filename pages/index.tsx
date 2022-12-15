
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB]/80' >
      <Head>
        <title>Jackies Portfolio</title>      
      </Head>

        <Header/>
    
      <section id='hero' className='snap-start'>
        <Hero/>
      
      </section>

    
      <section id='about' className='snap-start'>
        <About/>
      </section>

      
       <section id='experience' className='snap-start '>
        <Experience/>
       </section>
      
      <section id='skills' className='snap-start '>
        <Skills />
      </section >
      
     
       <section id='projects' className='snap-center'>
        <Projects/>
       </section>
      {/**Contact me section */}
      <section id='contact'className='snap-start'>
        <ContactMe/>
      </section>

      <Link href='#hero'>
      <footer className='cursor-pointer sticky bottom-5 w-full  flex justify-end px-20'>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/512/1633/1633288.png' alt='footer image'
          className='h-10 w-10 hover:bg-[#F7AB] rounded-full'/>
        </div>
      </footer>
      </Link>

    </div>
  )
}
