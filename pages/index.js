import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wedding</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/sunghyunzz/wedding">jayoung.sunghyun.wedding</a>
        </h1>
      </main>
    </div>
  )
}
