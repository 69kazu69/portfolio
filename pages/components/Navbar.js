import React from 'react'
import {Flex, Button, useColorMode, Heading, Text, useColorModeValue, IconButton }  from "@chakra-ui/react"
import {SunIcon, StarIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"



const Navbar = () => {

    const color = useColorModeValue( 'gray.500','white')
    const { colorMode, toggleColorMode } = useColorMode()
    
    let MFlex = motion(Flex);


  return (
   <MFlex align="center" justify="space-between" mt = {3}
   
   initial = {{
     width : "0%",
     opacity : 0
   }}
   animate={{
     width : "100%",
     opacity : 1

   }}
   transition = {{
     duration : 1.8
   }}
   
   
   
   >
       <Heading ml ={50} color = {color}>PortFolio.✨</Heading>
       <Flex  justify="center" width="100%"> 
        <Button variant="ghost" color = {color}>Home</Button>
        <Button variant="ghost"  color = {color} ml = {10}>Projects</Button>
        <Button variant="ghost"  color = {color} ml = {10}>About Me</Button>
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