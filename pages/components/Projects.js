import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {FiBarChart} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import {motion} from "framer-motion"




const Projects = () => {





  const bg = useColorModeValue( 'gray.700','gray.800')
  let color = useColorModeValue("gray.200", "white")
  let btncolor = useColorModeValue("gray.700", "white")
  let border = useColorModeValue("gray.900" ,"gray.800")
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
      <MDivider orientation="vertical" mr="5vw" height="175vh"

     
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
    


      



          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Weather Search
                </Text>
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and an open weather api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/weather-with-react/" }>Explore</Button>
            </Flex>
          </MBox>
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
    


      mt={50}




          >
            <Flex fontSize="4xl" direction = "column" align="center" >
                <Text mt="5">
                  {"<> Web </>"}
                </Text>
                <Divider width="80%" colorScheme={border} />
                <Text fontSize = "xl" m = "5">
                    Quote Machine
                </Text>
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and an open source api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/Quote-Machine/"}>Explore</Button>
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
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, chakra ui and  formik - Yup.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => {location.href ="https://69kazu69.github.io/formik-form/"}} >Explore</Button>
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
                    Url Shortener
                </Text>
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using nodejs, mongodb and expressjs.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid"  label = "Explore" onClick={()=>{location.href="https://replit.com/@69kazu69/boilerplate-project-urlshortener-1?v=1"}}>Explore</Button>
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
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using javascript, d3js and  topojson.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => {location.href = "https://69kazu69.github.io/chloropleth-fcc-project/"}}>Explore</Button>
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
                    My First Webpage.
                </Text>
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using HTML and CSS as my first web project.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/Mi-First-Webpage/"}>Explore</Button>
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
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using d3js, javascript and open rest api.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href ="https://69kazu69.github.io/heat-map-d3/"}>Explore</Button>
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
                    ToDo Application
                </Text>
                <Text fontSize = "lg" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using angular and bootstrap.
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} width="120px"  my={35} color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href="https://69kazu69.github.io/todo-angular/"}>Explore</Button>
            </Flex>
          </MBox>
        </Flex>
  
        <MDivider orientation="vertical" ml="5" height="175vh"
        
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
      <Button fontSize ="2xl" width ="8vw"  m={20} p ={6}><Text mr="3" onClick={() => location.href = "https://github.com/69kazu69"} >Explore </Text>   <FaGithub /></Button></Flex>
    
    </>
  )
}

export default Projects