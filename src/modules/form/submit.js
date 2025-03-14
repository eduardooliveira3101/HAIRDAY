//Configuração da data do calendário
import dayjs from "dayjs"
import {schedulesDay} from '../schedules/load.js'

import {scheduleNew} from '../../../services/schedule-new'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

//Define a data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//Data atual
selectedDate.value = inputToday

//Define a data minima como a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()
    if(!name) {
      return alert('Informe o nome do cliente')
    }

    //Recuperar o horário selecionado
    const hourSelected = document.querySelector('.hour-selected')
    if(!hourSelected) {
      return alert('Selecione o horário')
    }

    //Recuperar somente a hora 
    const [hour] = hourSelected.innerText.split(':')

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    //Gerando ID (Identificador único)
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when
    })

    //Recarrega os agendamentos 
    await schedulesDay()

        //Limpa o input de nome do cliente
    clientName.value = ''

  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error)
  }
}