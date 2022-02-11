import React from 'react'
import {Flex, Text, useColorModeValue , Divider} from "@chakra-ui/react"

const ProjectHeading = () => {
    const color = useColorModeValue( 'gray.500','white')
  return (
    <Flex justify="center" align="center" my = "10" direction="column">
        <Text  fontSize='5xl' color={color}>
            Projects
        </Text>
        <Divider width="50%"  />
        
    </Flex>
  )
}

export default ProjectHeading