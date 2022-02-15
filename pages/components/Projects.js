import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {FiBarChart} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"

const Projects = () => {
  const bg = useColorModeValue( 'gray.700','gray.300')
  let color = useColorModeValue("gray.200", "gray.900")
  let btncolor = useColorModeValue("gray.500", "gray.700")
  let border = useColorModeValue("gray.900" ,"gray.900")
  return (<>
    <Flex justify="center" >
        <Flex direction="column">
          <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
        
          height="35vh"
          mt={50}
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
           <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
        </Flex>

        <Flex mt="100" direction="column">
          <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
           <Box
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
        </Flex>
  
       
    </Flex>
    <Flex justify="center"><Button fontSize ="2xl"  m={20} p ={6}><Text mr="3">Explore </Text>   <FaGithub /></Button></Flex>
    </>
  )
}

export default Projects