import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Logo from '../components/logo'
import Footer from './Footer'
import { data } from '../lib/data'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Layout({ children, home, dashboard }) {
    return (
        <>
            <Head>
                <meta name="title" content={data.name} />
                <meta httpEquiv='Content-Language' content={data.language} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={data.description} />
                {/* OpenGraph */}
                <meta property="og:description" content={data.description} />
                <meta property="og:title" content={data.description} />
                <meta property="og:type" content="index" />
                <meta property="og:site_name" content={data.name} />
                <meta property="og:image" content={data.ogImage} />
                <meta property="og:url" content={BASE_URL} />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={data.description} />
                <meta name="twitter:image" content={data.ogImage} />
                <meta name="twitter:title" content={data.name} />
                <title>{data.title}</title>
            </Head>

            <nav className={styles.nav}>
                {dashboard ? (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href="/"><Logo /></a>
                ) : (
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                )}
            </nav>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href='/'>
                            <a>← home</a>
                        </Link>
                    </div>
                )}
                {/* <Footer /> */}
                {home &&
                    !dashboard &&
                    <footer className={styles.footer}>
                        <a
                            href="https://github.com/gmzi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github
                        </a>
                        <a
                            href="https://twitter.com/spiritusliteram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gastonmazieres"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin
                        </a>
                    </footer>

                }
            </div>
        </>
    )

}