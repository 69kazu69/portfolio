import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {FiBarChart} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import {motion} from "framer-motion"




const Projects = () => {





  const bg = useColorModeValue( 'gray.700','gray.900')
  let color = useColorModeValue("gray.200", "gray.100")
  let btncolor = useColorModeValue("gray.700", "gray.200")
  let border = useColorModeValue("gray.900" ,"gray.100")
  let MBox = motion(Box)
  let MDivider = motion(Divider)





  return (<>
  <MDivider  ml ="19.3vw"
  

  initial = {{
    width : 0
  }}
  animate = {{
     width : "61.4vw"
  }}
  transition = {{
    duration : 1
  }}
  />
    <Flex justify="center" >
      <MDivider orientation="vertical" mr="5vw" height="130vh"

     
initial = {{
  opacity :0
}}
animate={{
  opacity : 1
}}
transition={{
  duration : 4
}}
      
      
      />
        <Flex direction="column" mt={10}>
          <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"


          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}

          


          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}


      



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
          </MBox>
          <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
        
          height="35vh"
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}

           
          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}

          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Sign Up Page
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, chakra ui and  formik - Yup.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </MBox>
           <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}

      
          
          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}

          whileInView={{ opacity: 1 }}
          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Url Shortener
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using nodejs, mongodb and expressjs.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </MBox>
        </Flex>

        <Flex mt="100" direction="column">
          <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"


          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}

          
          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}


          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Chloropleth Map
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using javascript, d3js and  topojson.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </MBox>
          <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}



          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}

          
          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}

          
          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    HeatMap
                </Text>
                <Text fontSize = "md" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using d3js, javascript and open rest api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </MBox>
           <MBox
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          height="35vh"
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.1
            } }}
    whileTap={{ scale: 0.9,
      transition : {
        duration :.1
      } }}

          
          initial ={{
            width : "0%",
            opacity : 0
          }}
          animate={{
            width : "25vw",
            opacity : [0,0, 1],
            transition :{
              duration : 2
            }
          }}

          whileInView={{ opacity: 1 }}
  

          
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
                  I made this mini project using angular and bootstrap.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" >Explore</Button>
            </Flex>
          </MBox>
        </Flex>
  
        <MDivider orientation="vertical" ml="5" height="130vh"
        
        initial = {{
          opacity :0
        }}
        animate={{
          opacity : 1
        }}
        transition={{
          duration : 5
        }}
        
        
        />
    </Flex>
    <Flex justify="center" align="center" direction="column">
      <Divider width="61.4vw"  />
      <Button fontSize ="2xl" width ="8vw"  m={20} p ={6}><Text mr="3">Explore </Text>   <FaGithub /></Button></Flex>
    
    </>
  )
}

export default Projects