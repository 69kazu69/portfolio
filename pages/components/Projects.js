import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {FiBarChart} from "react-icons/fi"


const Projects = () => {
  const bg = useColorModeValue( 'gray.500','gray.900')
  let color = useColorModeValue("gray.200", "gray.400")
  let btncolor = useColorModeValue("gray.500", "gray.400")
  let border = useColorModeValue("gray.900" ,"gray.100")
  return (<>
    <Flex justify="center" >
        <Flex width="100%" height="35vh" mx="50">
          <Box
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
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
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Quote Machine
                </Text>
                <Text fontSize = "md"  width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and some json data.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    ToDo Application
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using angular, bootstrap and ng formModules.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
        </Flex>
       
    </Flex>
        <Flex mt="50">
        <Flex width="100%" height="35vh" mx="50">
          <Box
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  D. Visualisation
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Chloropleth Map
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using d3js, svg and some json data .
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                D. Visualisation
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Heat Map
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                I made this mini project using d3js, svg and some json data .
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
          <Box
          width="33%"
          borderRadius='xl'
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"Back-end"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" mx = "3" my="5">
                  TimeStamp Microservice
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using nodejs, expressjs and replit.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </Box>
        </Flex>
       
    </Flex>
    </>
  )
}

export default Projects