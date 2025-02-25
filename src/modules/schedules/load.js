import { hoursLoad } from "../form/hours-load.js";
import {scheduleFetchByDay} from '../../../services/schedule-fetch-by-day.js'
const selectedDate = document.getElementById('date')

import {scheduleShow} from '../schedules/show.js'

export async function schedulesDay () {
  //Obtém a data do input
  const date = selectedDate.value

  //Buscar os horários agendados na API
  const dailySchedules = await scheduleFetchByDay({ date })

  //Renderizar/exbir os agendamentos
  scheduleShow({dailySchedules})

  //Renderiza as horas disponiveis
  hoursLoad({date, dailySchedules})
} 