'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit , } from 'react-icons/fc'
import { FaTripadvisor, FaAirbnb , FaPlane } from 'react-icons/fa';



interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={5}  alignItems="flex-center">
        <Feature
          icon={<Icon as={FaTripadvisor} w={5} h={5} color={'#19182580'}/>}
          title={'tripadvisor'} 
          text={''}
        />
        <Feature
          icon={<Icon as={FcDonate} w={5} h={5} color={'#19182580'}/>}
          
          title={'Expedia'}
          text={''
            
          }
          
        />
        <Feature
          icon={<Icon as={FaPlane} w={5} h={5} color={'#19182580'}/>}
          title={'Booking.com'}
          text={''
          
          }
        />

<Feature
          icon={<Icon as={FaAirbnb} w={5} h={5} color={'#19182580'}/>}
          title={'airbnb'}
          text={
            ''
          }
        />
<Feature
          icon={<Icon as={FcInTransit} w={5} h={5} color={'#19182580'}/>}
          title={'Orbitz'}
          text={
           ''
          }
        />
        
      </SimpleGrid>
    </Box>
  )
}