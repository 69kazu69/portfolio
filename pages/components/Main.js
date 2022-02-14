import React from 'react'
import {Flex, Heading, Text , useColorModeValue, Button, IconButton} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {FaGithub} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"


const Main = () => {
  const color = useColorModeValue("gray.600", "white")

  return (
    <>
    <Flex height="90vh" direction="column" justify="center" mx = {50} color={color}>
        <div> 
        <Heading as='h1' size='3xl' isTruncated mb = {10} py={1}> Hi ! I am Aanchal.👋</Heading>
        <Text fontSize='4xl' mt={3} mb={3}> I am a Web Developer.💻</Text>
        <Text fontSize='md' width='500px'>I am a Developer who likes to create stuff for the web in different frameworks as reactjs, angular, nextjs, d3js etc.
        You can checkout some of my personal projects which consists of webApps, Data-Visualisation with javaScript and also some back-end microservices.
        </Text>

        </div>
        <Flex align="center">
          <Button rightIcon={<ArrowForwardIcon />} width="120px" mr = {25} my={25} color = {color} variant = "solid" label = "Explore" >Explore</Button>
          
    </Flex>
    <div>
    <IconButton variant = "ghost"><FaGithub/></IconButton>
    <IconButton variant = "ghost"><FaLinkedinIn/></IconButton>
    <IconButton variant = "ghost"><FaGoogle /></IconButton>
    </div>
          
    </Flex>
    
  </>
  )
}

export default Main

//framer motion at line 9
