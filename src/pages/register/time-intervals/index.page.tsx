import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
// import { api } from "../../../lib/axios"
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  // async function handleNavigateToNextStep() {
  //   await router.push('/register/time-intervals')
  // }

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Quase lá</Heading>
          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
          </Text>

          <MultiStep size={4} currentStep={3} />
        </Header>

        <IntervalBox as="form">
          <IntervalsContainer>
            <IntervalItem>
              <IntervalDay>
                <Checkbox />
                <Text>Segunda-feira</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </IntervalInputs>
            </IntervalItem>
            <IntervalItem>
              <IntervalDay>
                <Checkbox />
                <Text>Terça-feira</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step={60}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </IntervalInputs>
            </IntervalItem>
          </IntervalsContainer>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </IntervalBox>
      </Container>
    </>
  )
}
