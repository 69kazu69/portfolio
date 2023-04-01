import React from 'react'
import {Flex, Text, useColorModeValue , Divider, Image} from "@chakra-ui/react"
import {motion} from "framer-motion"

const ProjectHeading = () => {
    const color = useColorModeValue( 'white','gray.500')

    let MText = motion(Text)
    let MDivider = motion(Divider)
    let MImage = motion(Image)
  return (<>
    <Flex justify="center" align="end" mt = "10" >
      
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
            <p className="phover-underline-animation">✨Projects</p>
        </MText>
        
        
    </Flex>
    <Flex justify="center" mb="10">
    
    </Flex>
    </>
  )
}

export default ProjectHeading