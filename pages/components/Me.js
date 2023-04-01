import React from 'react'
import {Flex, Button, useColorMode, Heading, Text, useColorModeValue, IconButton, Divider, Box, Image }  from "@chakra-ui/react"
import {motion} from "framer-motion"

const Me = () => {
    const color = useColorModeValue("gray.600", "white")
  let MFlex = motion(Flex)
  let MBox = motion(Box)
  let bg = useColorModeValue("gray.200", "gray.900")


  return (
    <MFlex h="88vh" w="100%" justify="center" align="center"  direction="column"
    
    initial = {{
        opacity : 0,
        scale:0
    }}
    animate={{
        opacity : 1,
        scale:1

    }}
    transition={{
        duration : .7
    }}>
        <MFlex direction="column" w="60%" align="center" color={color} mb = {100}
        
        
        
        >
            <Heading>
                <p class="hover-underline-animation">
                About Me</p>
                <Divider/>
            </Heading>
            <Text align="center" mt = "5" fontSize = "xl" as="i">
                Hello! Iam Aanchal, a web developer who likes to creates different stuff in the web. I have great interest in learning about javascript libraries and
                frameworks like reactjs, angular, d3js, bootstrap and many more. Currently I am a university student pursuing Bachelors in  Information Technology at HPU, you can also see some of 
                my works in the projects section.
            </Text>
        </MFlex>
        <Text color = "gray.500" fontSize="2xl" as = "i">You Can Contact Me Through :</Text>
        <MFlex mt={5} align="center" 
        >
            
            <MBox whileHover = {{scale : 1.1}} whileTap = {{scale :.8}} w="80px"  mr={10} onClick={() => location.href = "https://www.linkedin.com/in/aanchal-walia-85294021a/"} ><Image src ="link.png"/></MBox>
            <MBox whileHover = {{scale : 1.1}} whileTap = {{scale :.8}} w="80px"  mr={10} onClick={() => location.href = "mailto:waliaaanchal02@gmail.com"}><Image src ="gmail.png"/></MBox>
            <MBox whileHover = {{scale : 1.1}} whileTap = {{scale :.8}} w="80px"  mr={10} onClick = {() => {location.href = "https://twitter.com/w_aanchal"}} ><Image src="tweet.png" /></MBox>
            <MBox whileHover = {{scale : 1.1}} whileTap = {{scale :.8}} w="80px"  mr={10} onClick={() => location.href = "https://github.com/69kazu69"} ><Image src="ghl.png" /></MBox>
            <MBox whileHover = {{scale : 1.1}} whileTap = {{scale :.8}} w="80px" onClick={() => {location.href = "https://discord.gg/vjusDH6X" }} ><Image src="dc.png"/></MBox>
        </MFlex>
    </MFlex>
  )
}

export default Me