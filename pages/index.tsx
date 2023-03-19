"use client";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Strings } from '@/ContentText/Strings';
import Banner from '@/components/Banner/Banner';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handlerBannerButtonClick = () => {
    console.log('this is clicked')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover coffe shop</title>

      </Head>
      <main className={styles.main}>
        <Banner buttonText={Strings.viewStoreNearBy} handlerOnClick={handlerBannerButtonClick} />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' alt='banner-image' width={700} height={400} />
        </div>

      </main>
    </div>
  )
}
