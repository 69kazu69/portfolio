import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Projects = () => {
  const bg = useColorModeValue( 'gray.500','gray.900')
  let color = useColorModeValue("gray.200", "gray.400")
  let border = useColorModeValue("gray.900" ,"gray.100")
  return (
    <Flex>
        <Flex width="100%" height="35vh" mx="50">
          <Box
          width="30%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {color} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box></Box>
          <Box></Box>
        </Flex>
        <Flex>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        </Flex>
    </Flex>
  )
}

export default Projects