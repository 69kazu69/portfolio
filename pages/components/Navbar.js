import React from 'react'
import {Flex, Button, useColorMode, Heading, Text, useColorModeValue, IconButton }  from "@chakra-ui/react"
import {SunIcon, StarIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"
import { useRouter } from 'next/router'



const Navbar = () => {

    const color = useColorModeValue( 'gray.500','white')
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
       <Heading ml ={50} color = {color}>PortFolio.✨</Heading>
       <Flex  justify="center" width="100%"> 
        <Button onClick={() => router.push("/")} variant="ghost" color = {color}>Home</Button>
        <Button onClick={() => router.push("/projects")} variant="ghost"  color = {color} ml = {10}>Projects</Button>
        <Button onClick={() => router.push("/AboutMe")} variant="ghost"  color = {color} ml = {10}>About Me</Button>
       </Flex>
       <div mx={5}>
       <IconButton onClick={toggleColorMode} mx={5} variant = "ghost">
        {colorMode === 'light' ? (<StarIcon/>) :(<SunIcon/>)}
      </IconButton>
       </div>
       
       

   </MFlex>
  )
}

export default Navbar