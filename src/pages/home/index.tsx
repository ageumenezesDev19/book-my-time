import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview-2.png'
// import { useEffect, useState } from 'react'

export default function Home() {
  // const [imageHeight, setImageHeight] = useState(800)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 1980) {
  //       setImageHeight(400)
  //     } else {
  //       setImageHeight(800)
  //     }
  //   }

  //   window.addEventListener('resize', handleResize)

  //   handleResize()

  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])

  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority={true}
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
