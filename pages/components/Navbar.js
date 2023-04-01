import React from 'react'
import {Flex, Button, useColorMode, Heading, Text, useColorModeValue, IconButton }  from "@chakra-ui/react"
import {SunIcon, StarIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"
import { useRouter } from 'next/router'



const Navbar = () => {

    const color = useColorModeValue( 'white','gray.500')
    const { colorMode, toggleColorMode } = useColorMode()
    
    let MFlex = motion(Flex);

    let router = useRouter();


  return (
   <MFlex align="center" justify="space-between" mt = {3}
   
   initial = {{
     
     opacity : 0
   }}
   animate={{
    
     opacity : 1

   }}
   transition = {{
     duration : 1.8
   }}
   
   
   
   >
       <Heading ml ="5vw" color = {color}>PortFolio.✨</Heading>
       <Flex  justify="center" ml="-12vw"> 
        <Button id="nbtn"  onClick={() => router.push("/")} variant="ghost" color = {color}><p  className="hover-underline-animation nt">Home</p></Button>
        <Button id="nbtn" onClick={() => router.push("/projects")} variant="ghost"  color = {color} ml = {10}><p  className="hover-underline-animation nt">Projects</p></Button>
        <Button id="nbtn" onClick={() => router.push("/AboutMe")} variant="ghost"  color = {color} ml = {10}><p  className="hover-underline-animation nt">About Me</p></Button>
       </Flex>
       <div mx={5}>
       <IconButton onClick={toggleColorMode} mx={5} variant = "ghost" id="mode">
        {colorMode === 'light' ? (<StarIcon/>) :(<SunIcon/>)}
      </IconButton>
       </div>
       
       

   </MFlex>
  )
}

export default Navbar