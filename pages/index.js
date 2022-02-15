
import styles from '../styles/Home.module.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { Flex, Image } from '@chakra-ui/react'
import "../public/undraw_Personal_info_re_ur1n.png"
import Social from './components/Social'

export default function Home() {

  return (
    <div >
    
      <Navbar/>
    <Flex justify="space-evenly">
    <Main />
    <Image src="img-19 (1).png" boxSize='570px' mt="100"
     />
    <Social />
    </Flex>
    
    </div>
  )
}
