import React from 'react'
import {Flex, Text, useColorModeValue , Divider, Image} from "@chakra-ui/react"
import {motion} from "framer-motion"

const ProjectHeading = () => {
    const color = useColorModeValue( 'gray.500','white')

    let MText = motion(Text)
    let MDivider = motion(Divider)
    let MImage = motion(Image)
  return (<>
    <Flex justify="center" align="end" mt = "10" >
      <MImage src="img-47.png" boxSize="150px" />
        <MText  fontSize='8xl' color={color}
        
        initial = {{
          opacity : 0
        }}

        animate={{
          opacity : 1
        }}
        

        transition={{
          duration : 2
        }}
        
        >
            Projects
        </MText>
        
        
    </Flex>
    <Flex justify="center" mb="10">
    <MDivider  ml={10}

    initial={{
      width : "0%"
     }}
     
     animate={{
       width : "40%"
     }}

     transition={{
       duration : 2
     }}
     
     
     />
    </Flex>
    </>
  )
}

export default ProjectHeading