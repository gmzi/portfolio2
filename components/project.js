import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from './project.module.css'

export default function Project({ data }) {

    return (
        <div className={styles.container}>
            <Link href={data.html_url}>
                <a target="_blank">{data.name}</a>
            </Link>
            <p>{data.description}</p>
        </div >
    )

}