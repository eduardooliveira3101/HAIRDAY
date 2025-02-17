//Configuração da data do calendário
import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

//Define a data atual
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//Data atual
selectedDate.value = inputToday

//Define a data minima como a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()
  console.log("Enviado")
}