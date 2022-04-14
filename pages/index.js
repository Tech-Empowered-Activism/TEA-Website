import Head from 'next/head'
import Image from 'next/image'
import CSS from '../styles/Home.module.css'

import AboveTheFold from '../components/Home/AboveTheFold'
import SupportSystem from '../components/Home/SupportSystem'
import Sustainability from '../components/Home/Sustainability'
import UserIntegrity from '../components/Home/UserIntegrity'
import Footer from '../components/Footer'

import GlobalIntervalProvider from '../context/GlobalInterval'
import ColorContextProvider from '../context/CMY'

const Home = () => (
  <GlobalIntervalProvider>
    <ColorContextProvider>
      <AboveTheFold />
      <SupportSystem />
      <Sustainability />
      <UserIntegrity />
      <Footer />
    </ColorContextProvider>
  </GlobalIntervalProvider>
)

export default Home
