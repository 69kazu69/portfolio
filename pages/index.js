import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Main />
    </>
  )
}
