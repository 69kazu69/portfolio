import React from 'react'
import { Box, Divider, Flex, Heading, useColorModeValue } from '@chakra-ui/react'


const Social = () => {

  let bg = useColorModeValue("gray.200", "gray.900")
  return (
    <Flex direction="column" justify="center" align="center" mr={150}>
      
        <Flex  height="25vh" >
            <Box boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem">
              
            </Box>
            <Divider orientation="vertical" h="20vh" mt={5} />
            <Box boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem">

            </Box>
        </Flex>
        <Divider w = "10vw" mr="12vw"  /><Divider ml="12vw" w="10vw"/>
        <Flex  height="25vh">
            <Box boxShadow='xl'  m={5} bg = {bg} w="10vw" borderRadius="2rem">

            </Box>
            <Divider orientation="vertical" h="20vh" mt={5} />
            <Box boxShadow='xl' m={5} bg = {bg} w="10vw" borderRadius="2rem">

            </Box>
        </Flex>
    </Flex>
  )
}

export default Social