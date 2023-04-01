import React from 'react'
import { Flex, Box, useColorModeValue, Text, Divider, Button} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {FiBarChart} from "react-icons/fi"
import {FaGithub} from "react-icons/fa"
import {motion} from "framer-motion"




const Projects = () => {





  const bg = useColorModeValue( 'gray.700','gray.800')
  let color = useColorModeValue( "white","gray.200")
  let btncolor = useColorModeValue( "gray.700","white")
  let border = useColorModeValue("gray.900","gray.800")
  let MBox = motion(Box)
  let MDivider = motion(Divider)





  return (<>
  
    <Flex justify="center" >
     
        <Flex direction="column" mt={10}>
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          


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
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and an open weather api.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/weather-with-react/" }>Explore</Button>
            </Flex>
          </MBox>
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          


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
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, bootstrap and an open source api.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/Quote-Machine/"}>Explore</Button>
            </Flex>
          </MBox>
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
        
          
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using reactjs, chakra ui and  formik - Yup.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => {location.href ="https://69kazu69.github.io/formik-form/"}} >Explore</Button>
            </Flex>
          </MBox>
           <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using nodejs, mongodb and expressjs.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid"  label = "Explore" onClick={()=>{location.href="https://replit.com/@69kazu69/boilerplate-project-urlshortener-1?v=1"}}>Explore</Button>
            </Flex>
          </MBox>
        </Flex>

        <Flex mt="100" direction="column">
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          


          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using javascript, d3js and  topojson.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => {location.href = "https://69kazu69.github.io/chloropleth-fcc-project/"}}>Explore</Button>
            </Flex>
          </MBox>
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          
          mt={50}



          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using HTML and CSS as my first web project.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href = "https://69kazu69.github.io/Mi-First-Webpage/"}>Explore</Button>
            </Flex>
          </MBox>
          <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          
          mt={50}



          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using d3js andjavascript.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href ="https://69kazu69.github.io/heat-map-d3/"}>Explore</Button>
            </Flex>
          </MBox>
           <MBox id="mbox"
          width="25vw"
          bg = {bg}
          color ={color}
          boxShadow='dark-lg'
          mr="50"
          
          mt={50}


          whileHover={{ scale: 1.1,
            transition : {
              duration :.3
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
                <Text fontSize = "md" id="dtext" mx = "5" width = "70%"textAlign="center" opacity = "0.7">
                  I made this mini project using angular and bootstrap.
                </Text>
                <br /><br /> <Button id="btn" rightIcon={<ArrowForwardIcon />} width="120px"   color = {btncolor} variant = "solid" label = "Explore" onClick={() => location.href="https://69kazu69.github.io/todo-angular/"}>Explore</Button>
            </Flex>
          </MBox>
        </Flex>
  
      
    </Flex>
    <Flex justify="center" align="center" direction="column">
      
      <br /><br /> <Button id="btn" fontSize ="2xl" width ="8vw"  m={20} p ={6}><Text mr="3" onClick={() => location.href = "https://github.com/69kazu69"} >Explore </Text>   <FaGithub /></Button></Flex>
    
    </>
  )
}

export default Projects