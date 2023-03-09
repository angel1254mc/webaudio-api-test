import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import InstrumentContainer from '../components/InstrumentContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main_app_container">
          <div className="top-container">

          </div>
          <div className="instruments">
            <div className="instrument-types-label">
              Instrument Types
            </div>
            <div className="instruments-container">
              <InstrumentContainer name="drums" color="#455192"/>
              <InstrumentContainer name="bass" color="#779F68"/>
              <InstrumentContainer name="melody" color="#B95264"/>
              <InstrumentContainer name="auxiliary" color="#D2C761"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
