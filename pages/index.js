
import styles from '../styles/Home.module.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { Flex, Image } from '@chakra-ui/react'
import "../public/undraw_Personal_info_re_ur1n.png"
import Social from './components/Social'
import {motion} from "framer-motion"

export default function Home() {

  let MImage = motion(Image)

  return (
    <div >
    
      <Navbar/>
    <Flex justify="space-between" id="main">
    <Main  />
    
    <Social id="main-social" />
    </Flex>
    
    </div>
  )
}
