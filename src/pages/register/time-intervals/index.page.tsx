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
// import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { getWeekDays } from '@/utils/get-week-days'

// const timeIntervalsFormSchema = z.object({})

export default function TimeIntervals() {
  // async function handleNavigateToNextStep() {
  //   await router.push('/register/time-intervals')
  // }
  const {
    register,
    handleSubmit,
    control,
    // formState: { isSubmitting, erros },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const weekDays = getWeekDays()

  async function handleSetTimeIntervals() {}

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

        <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
          <IntervalsContainer>
            {fields.map((field, index) => {
              return (
                <IntervalItem key={field.id}>
                  <IntervalDay>
                    <Checkbox />
                    <Text>{weekDays[field.weekDay]}</Text>
                  </IntervalDay>
                  <IntervalInputs>
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      {...register(`intervals.${index}.startTime`)}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      crossOrigin={undefined}
                    />
                    <TextInput
                      size="sm"
                      type="time"
                      step={60}
                      {...register(`intervals.${index}.endTime`)}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      crossOrigin={undefined}
                    />
                  </IntervalInputs>
                </IntervalItem>
              )
            })}
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
