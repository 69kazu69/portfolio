import React from 'react'
import {Flex, Heading, Text , useColorModeValue, Button, IconButton} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {motion} from "framer-motion"
import { useRouter } from 'next/router'


const Main = () => {
  const color = useColorModeValue("white","gray.600" )
  let MFlex = motion(Flex)
  const router = useRouter()


  return (
    <div id="int">
    <MFlex height="90vh" direction="column" justify="center"  color={color}
    initial={{
      opacity : 0
    }}
    animate={{ 
      opacity : 1
    }}
    transition ={{
      duration : 1.5
    }}>
        <div> 
        <Heading as='h1' size='3xl' isTruncated mb = {10} py={1} id="intro"> Hi ! I am Aanchal.<span className="wave">👋</span></Heading>
        <Text fontSize='4xl' mt={3} mb={3}> I am a Web Developer.💻</Text>
        <Text fontSize='md' width='500px'>I am a Developer who likes to create stuff for the web in different frameworks as reactjs, angular, nextjs, d3js etc.
        You can checkout some of my personal projects which consists of webApps, Data-Visualisation with javaScript and also some back-end microservices.
        </Text>

        </div>
        <MFlex align="center">
          <Button rightIcon={<ArrowForwardIcon />} width="120px" mr = {25} my={25} color = "black" variant = "solid" label = "Explore" onClick={() => router.push("/projects")}>Explore</Button>
          
    </MFlex>
    <div>
    <IconButton variant = "ghost" onClick={() => location.href = "https://github.com/69kazu69"} ><FaGithub/></IconButton>
    <IconButton variant = "ghost" onClick={() => location.href = "https://www.linkedin.com/in/aanchal-walia-85294021a/"}><FaLinkedinIn/></IconButton>
    <IconButton variant = "ghost" onClick={() => location.href = "mailto:waliaaanchal02@gmail.com"}><FaGoogle /></IconButton>
    </div>
          
    </MFlex>
    
  </div>
  )
}

export default Main

//framer motion at line 9
