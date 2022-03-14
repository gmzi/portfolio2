import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Project from '../components/project'

export default function Home({ projects }) {

  const allProjects = projects.map((data, i) => (
    <Project key={`${data.name}-${i}`} data={data} />
  ))


  return (
    <Layout home>
      <section>
        <h1 className={styles.title}>Projects</h1>
        <q className={styles.quote}>Ars longa, vita brevis.</q>
        {!projects.length ? (
          <p>No projects yet...</p>
        ) : (
          allProjects
        )}
      </section>
    </Layout >
  )
}

export async function getStaticProps() {
  const request = await fetch(' https://api.github.com/users/gmzi/repos?sort=created')
  const projects = await request.json()
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    }
  }
}