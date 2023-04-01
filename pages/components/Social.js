import React from 'react'
import {Box, Divider, Flex, Heading, useColorModeValue, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const Social = () => {

  let MotionBox = motion(Box)

  let bg = useColorModeValue( "gray.900","gray.200")
  return (
    <Flex direction="column" justify="center" align="center" id="main-social">
      
        <Flex   >
            <MotionBox id="card" boxShadow='xl' my={5} bg = {bg} w="10vw" borderRadius="2rem"

onClick={() => location.href = "https://www.linkedin.com/in/aanchal-walia-85294021a/"}
            
            whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}

      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1,
                x:-140
              }}
              transition={{
                duration :.7             }}
            >
              <Image src ="link.png" />
            </MotionBox>
            <MotionBox id="card" boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
            whileHover={{ scale: 1.1,
              transition : {
                duration :.1
              } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}
      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1,
                x:-130
              }}
              transition={{
                duration :.7,
                delay : .4             }}

                onClick={() => location.href = "mailto:waliaaanchal02@gmail.com"}
            >
              <Image src="gmail.png" />

            </MotionBox>
            <MotionBox id="card" boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
            whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}

      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1,
                x:-140
              }}
              transition={{
                duration :.7 , 
              delay :.6       }}

              onClick={()=>{
                location.href = "https://replit.com/@69kazu69"
              }}
            >
              <Image src = "replit.png" />
            </MotionBox>
        </Flex>
        <Flex  height="25vh" mr={50} >
            <MotionBox id="card" boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
            whileHover={{ scale: 1.1,
              transition : {
                duration :.1
              } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}
      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1
              }}
              transition={{
                duration :.7,
              delay : .8           }}

              onClick = {() => {location.href = "https://twitter.com/w_aanchal"}}
            >

              <Image src="tweet.png" height = "9vw" m ="auto"   />

            </MotionBox>
            <MotionBox id="card" boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
            whileHover={{ scale: 1.1,
              transition : {
                duration :.1
              } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}
      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1
              }}
              transition={{
                duration :.7,
                  delay : 1.2      }}

                  onClick={() => {
                    location.href = "https://discord.gg/vjusDH6X"
                  }}
            >
                <Image src ="dc.png" boxSize = "9vw" m={2} />
            </MotionBox>
            <MotionBox id="card" boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
            whileHover={{ scale: 1.1,
              transition : {
                duration :.1
              } }}
      whileTap={{ scale: 0.9,
        transition : {
          duration :.1
        } }}
      initial ={{ 
        scale : .2,
        opacity : 0
            }}
              animate={{
                scale : 1,
                opacity : 1,
                
              }}
              transition={{
                duration :.7,
                  delay : 1.5     }}

                  onClick = {() => {
                    location.href = "https://github.com/69kazu69"
                  }}
            >
              <Image  src="ghl.png" />
            </MotionBox>
        </Flex>
        
    </Flex>
  )
}

export default Social