
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
    <Flex justify="space-evenly">
    <Main />
    <MImage src="img-19 (1).png" boxSize='470px' mt="100"

    initial ={{
      y:-150,
      opacity : 0,
      size: .2
    }}
    animate = {{ 
      y:0,
      opacity : 1,
      size:1
    }}
    transition = {{
      duration : .5,
      delay:.7
    }}
    whileHover = {{ scale: 1.1}}
    drag

    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
     />
    <Social />
    </Flex>
    
    </div>
  )
}
