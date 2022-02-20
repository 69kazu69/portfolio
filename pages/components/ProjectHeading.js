import React from 'react'
import {Flex, Text, useColorModeValue , Divider, Image} from "@chakra-ui/react"
import {motion} from "framer-motion"

const ProjectHeading = () => {
    const color = useColorModeValue( 'gray.500','white')

    let MText = motion(Text)
    let Mdivider = motion(Divider)
    let MImage = motion(Image)
  return (<>
    <Flex justify="center" align="end" mt = "10" >
      <Image src="img-47.png" boxSize="150px" />
        <Text  fontSize='8xl' color={color}>
            Projects
        </Text>
        
        
    </Flex>
    <Flex justify="center" mb="10">
    <Divider width="30%" />
    </Flex>
    </>
  )
}

export default ProjectHeading