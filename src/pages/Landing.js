import React from "react";
import { Input } from "@chakra-ui/react"
import { Grid, Box, InputGroup, InputLeftAddon } from "@chakra-ui/react"

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
    <Grid templateColumns="repeat(5, 1fr)" gap={6} bg="primary.300" padding = "2.4rem">
    <Input placeholder="Dirección de inicio" bg="primary.100"
              textColor =  "primary.800" _placeholder={{ color: 'primary.800' }} borderColor={"primary.800"}/>
    <Input placeholder="Dirección de Destino" bg="primary.100"
             textColor =  "primary.800" _placeholder={{ color: 'primary.800' }} borderColor={"primary.800"}/>
    <Input placeholder="dd/mm/aaaa" textColor =  "primary.800"
              borderColor={"primary.800"} bg="primary.100" _placeholder={{ color: 'primary.800' }} />
  <InputGroup>
    <InputLeftAddon children="+EC234" bg="primary.600" textColor =  "primary.100" borderColor={"primary.800"} />
    <Input  placeholder="Postal" bg="primary.100"
  textColor =  "primary.800" _placeholder={{ color: 'primary.800' }} borderColor={"primary.800"} />
  </InputGroup>
  <Input placeholder="Transporte"  bg="primary.100"
  textColor =  "primary.800" _placeholder={{ color: 'primary.800' }} borderColor={"primary.800"}/>
  
</Grid>
 <Grid templateColumns="repeat(5, 1fr)" gap={6}>
  <Box w="100%" h="10" bg="colors.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
</Grid>
      <Hero
        title="LLevamos Tus Paquetes Rápido y Sencillo"
        subtitle="AeroCar Lleva años de experiencia en el transporte de carga "
        image="https://source.unsplash.com/collection/574111/800x600"
        ctaText="Crea tu cuenta ahora"
        ctaLink="/signup"
        
      />
     
    
     
           
    
    </LandingLayout>
    

  );
}
