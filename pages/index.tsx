import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0' >
      <Head>
        <title>Jackies Portfolio</title>      
      </Head>

        <Header/>
      {/**Hero section */}
      <section id='hero' className='snap-center'>
        <Hero/>
      
      </section>

      {/**About section */}

      {/**Experience section */}

      {/**Skills section */}

      {/**Projects section */}

      {/**Contact me section */}

    </div>
  )
}
