import { hoursLoad } from "../form/hours-load.js";
import {scheduleFetchByDay} from '../../../services/schedule-fetch-by-day.js'
const selectedDate = document.getElementById('date')

export async function schedulesDay () {
  //Obtém a data do input
  const date = selectedDate.value

  //Buscar os horários agendados na API
  const dailySchedules = await scheduleFetchByDay({ date })

  console.log(dailySchedules)
  //Renderiza as horas disponiveis
  hoursLoad({date})
} 