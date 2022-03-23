import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from './project.module.css'

export default function Project({ data }) {


    const [languages, setLanguages] = useState([])


    useEffect(() => {
        async function getLanguages() {
            const request = await fetch(data.languages_url)
            const langsObject = await request.json()
            const langKeys = Object.keys(langsObject)
            setLanguages([...langKeys])
        }
        getLanguages()
    }, [])



    const demoUrl = () => {
        if (!data.homepage) return "/";
        if (data.homepage.includes('http')) {
            return data.homepage
        } else {
            return `https://${data.homepage}`
        }
    }

    return (
        <div className={styles.container}>
            {demoUrl() &&
                <Link href={demoUrl()}>
                    <a target="_blank">{data.name}</a>
                </Link>
            }
            <p>{data.description}</p>
        </div >
    )

}