"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/navbar'
import Footer from './Components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar/>{children}
          <Footer/></ChakraProvider>
      </body>
      
    </html>
  )
}
