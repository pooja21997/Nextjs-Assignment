'use client'

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'

interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function Statistics() {
  return (
    <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'3xl'} py={10} fontWeight={'bold'} color={'pink'}>
      <h1 color='pink'>Travlog</h1>
      We helping you find your dream location
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Holiday Package'} stat={'500+'} />
        <StatsCard title={'Luxury Hotel'} stat={'100'} />
        <StatsCard title={'Premium Airlines'} stat={'7'} />
        <StatsCard title={'Happy Customers'} stat={'2K+'} />
      </SimpleGrid>
    </Box>
  )
}