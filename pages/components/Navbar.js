import React from 'react'
import {Flex, Button, useColorMode, Heading, Text, useColorModeValue, IconButton }  from "@chakra-ui/react"
import {SunIcon, StarIcon} from "@chakra-ui/icons"
const Navbar = () => {

    const color = useColorModeValue( 'gray.500','white')
    const { colorMode, toggleColorMode } = useColorMode()
    


  return (
   <Flex align="center" justify="space-between" mt = {3} >
       <Heading ml ={50} color = {color}>PortFolio.</Heading>
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
       
       

   </Flex>
  )
}

export default Navbar