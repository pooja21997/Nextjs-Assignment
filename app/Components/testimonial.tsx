'use client'
import { FaGlobe } from 'react-icons/fa';

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading color={'pink'}>SERVICES</Heading>
          <Text>Our top value categories for you</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
          
            <TestimonialContent>
              <TestimonialHeading>Best Tour Guide</TestimonialHeading>
              <TestimonialText>
              What looked like a small patch of purple grass, above five feet.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://th.bing.com/th/id/R.3d250d1b2f53a9cd7ac1ba767a8bb25b?rik=9bLwFpmqdN5Y1g&riu=http%3a%2f%2fpngimg.com%2fuploads%2fglobe%2fglobe_PNG8.png&ehk=Iw05l1q1NfHZZ0e4%2bBEWNoLc7L0%2biJkZOT0S2r6B3qQ%3d&risl=&pid=ImgRaw&r=0'
              }
              name={''}
              title={''}
            />
           
          </Testimonial>
          <Testimonial>
          
            <TestimonialContent>
              <TestimonialHeading>Easy Booking</TestimonialHeading>
              <TestimonialText>
              Square, was moving across the sand in their direction.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://th.bing.com/th/id/OIP.vNs5aKt0IEFqfSlQkjgvdwAAAA?rs=1&pid=ImgDetMain'
              }
              name={''}
              title={''}
            />
            
          </Testimonial>
         
        </Stack>
      </Container>
    </Box>
  )
}