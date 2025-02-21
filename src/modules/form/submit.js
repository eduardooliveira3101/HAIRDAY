//Configuração da data do calendário
import dayjs from "dayjs"

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

//Define a data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//Data atual
selectedDate.value = inputToday

//Define a data minima como a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
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
    console.log(when)

    //Gerando ID (Identificador único)
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    })

  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error)
  }
}