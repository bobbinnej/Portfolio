
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'
import WorkExperience from '../components/WorkExperience'


type Props = {

  pageInfo:PageInfo;
  experiences:Experience[];
  skills:Skill[];
  socials:Social[];
  projects:Project[];

}

export default function Home({pageInfo,experiences,skills,socials,projects}:Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB]/80' >
      <Head>
        <title>{pageInfo?.name}-Portfolio</title>      
      </Head>

        <Header socials={socials}/>
    
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      
      </section>

    
      <section id='about' className='snap-start'>
        <About pageInfo={pageInfo}/>
      </section>

      
       <section id='experience' className='snap-start '>
        <WorkExperience experiences={experiences}/>
       </section>
      
      <section id='skills' className='snap-start '>
        <Skills skills={skills} />
      </section >
      
     
       <section id='projects' className='snap-center'>
        <Projects projects={projects}/>
       </section>
      
      <section id='contact'className='snap-start'>
        <ContactMe pageInfo={pageInfo}/>
      </section>

      <Link href='#hero'>
      <footer className='cursor-pointer sticky bottom-6 w-full  flex justify-end px-12'>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/4113/4113413.png' alt='footer image'
          className='h-8 w-8 hover:bg-[#F7AB] rounded-full'/>
        </div>
      </footer>
      </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo= await fetchPageInfo();
  const experiences:Experience[] = await fetchExperience();
  const skills:Skill[] = await fetchSkills();
  const socials:Social[] = await fetchSocials();
  const projects:Project[] = await fetchProjects();

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },

    revalidate:10,
   
  }

}
