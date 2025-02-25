import dayjs from 'dayjs'
import {apiConfing} from './api-config.js'

export async function scheduleFetchByDay({date}) {
  try {
    //Buscando, fazendo a requisição
    const response = await fetch(`${apiConfing.baseURL}/schedules`)
    
    //Converte em JSON
    const data = await response.json()

    //Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, 'day'))
     
    return dailySchedules

  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar o agendamento do dia selecionado.')
  }
}