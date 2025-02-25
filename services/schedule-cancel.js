import { apiConfing } from "./api-config.js";

export async function scheduleCancel({id}) {
  try {
    await fetch(`${apiConfing.baseURL}/schedules/${id}`, {
      method: 'DELETE'
    })

    alert('Agendamento cancelado com sucesso')

  } catch (error) {
    console.log(error)
    alert('Não foi possível cancelar o agendamento')
  }
}