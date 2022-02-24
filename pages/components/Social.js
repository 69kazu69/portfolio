import React from 'react'
import {Box, Divider, Flex, Heading, useColorModeValue, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'


const Social = () => {

  let MotionBox = motion(Box)

  let bg = useColorModeValue("gray.200", "gray.900")
  return (
    <Flex direction="column" justify="center" align="center" >
      
        <Flex  height="25vh"  >
            <MotionBox boxShadow='xl' my={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            <MotionBox boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            >
              <Image src="gmail.png" />

            </MotionBox>
            <MotionBox boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            >
              <Image src = "replit.png" />
            </MotionBox>
        </Flex>
        <Flex  height="25vh" mr={50} >
            <MotionBox boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            >

              <Image src="tweet.png" height = "17vh" m ="auto" mt="5"  />

            </MotionBox>
            <MotionBox boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            >
                <Image src ="dc.png" boxSize = "15vh" m= "6" ml ="7"/>
            </MotionBox>
            <MotionBox boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem"
            
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
            >
              <Image src="ghl.png" />
            </MotionBox>
        </Flex>
        
    </Flex>
  )
}

export default Social