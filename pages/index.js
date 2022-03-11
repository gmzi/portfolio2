import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Logo from '../components/logo'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import Project from '../components/project'
import utilStyles from '../styles/utils.module.css'
import { data } from '../lib/data'

const URL = process.env.NEXT_PUBLIC_URL;

export default function Home({ projects }) {

  const allProjects = projects.map((data, i) => (
    <Project key={`${data.name}-${i}`} data={data} />
  ))


  return (
    <Layout home>
      <Head>
        {/* Base meta tags */}
        <meta name="description" content={data.description} />
        <meta name="title" content={data.name} />
        {/* OpenGraph */}
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.ogImage} />
        <meta property="og:site_name" content={data.name} />
        <meta property="og:title" content={data.description} />
        <meta property="og:type" content="index" />
        <meta property="og:url" content={URL} />
        {/* Twitter */}
        <meta name="twitter:title" content={data.name} />

        <title>{data.title}</title>
      </Head>
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