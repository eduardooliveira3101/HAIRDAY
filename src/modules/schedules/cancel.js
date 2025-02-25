import { scheduleCancel } from "../../../services/schedule-cancel.js"
import {schedulesDay} from './load.js'
//Gerar evento de click para cada lista (manhã, tarde e noite)
const periods = document.querySelectorAll('.period')

periods.forEach((period => {
  period.addEventListener('click', async (event) => {
    if(event.target.classList.contains('cancel-icon')) {
      
      //Obtém a LI pai do elemento clicado
      const item = event.target.closest('li')

      //Pega o ID do agendamento para remover
      const { id } = item.dataset

      //Confirma que o ID foi selecionado
      if(id) {
        //Confirma se o usuário quer remover
        const isConfirm = confirm('Tem certeza que deseja cancelar esse agendamento?')
      
        if(isConfirm) {
        //Faz a requisição na API para cancelar
          await scheduleCancel({id})
          //Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
}))