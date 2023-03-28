import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import InstrumentContainer from '../components/InstrumentContainer'
import { useContext, useEffect, useState } from 'react'
import MeasuresContainer from '../components/MeasuresContainer'
import {InstrumentsContext, InstrumentsContextProvider} from '../hooks/InstrumentContext'

export default function Home() {
  const [togglePlayer, setTogglePlayer] = useState(true);
  const [gesture, setGesture] = useState(false);
  const  {start, stop} = useContext(InstrumentsContext)
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
          {
            !gesture ? 
            <div className="initialize-audio-overlay">
              
              <div class="intro-text">
            <button className="initialize-audio-button" onClick={() => {
              setGesture(true);
            }}>Click Here to Initialize Audio Context!</button>
            </div>
          </div> : <></>}
          <MeasuresContainer/>
          <div className="instruments">
            <div className="instrument-types-label">
              Instrument Types
              <button onClick={() => {
                if (togglePlayer) {
                  start();
                } else {
                  stop();
                }
                setTogglePlayer(!togglePlayer);
              }}>Start</button>
            </div>
            <div className="instruments-container">
              <InstrumentContainer name="kick" color="#455192" instrument_ident="kick"/>
              <InstrumentContainer name="snare" color="#455192" instrument_ident="snare"/>
              <InstrumentContainer name="cymbal" color="#455192" instrument_ident="cymbal"/>
              <InstrumentContainer name="bass" color="#779F68" instrument_ident="bass"/>
              <InstrumentContainer name="melody" color="#B95264" instrument_ident="melody"/>
              <InstrumentContainer name="auxiliary" color="#D2C761" instrument_ident="auxiliary"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
