import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById('hours')

export function hoursLoad({date}) {
  const opening = openingHours.map((hour) => {
    //Recuperar somente a hora
    const [scheduleHour] = hour.split(':')

    //Adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
    
    //Verifica se o horario está disponivel
    return {
      hour,
      available: isHourPast,
    }
  })

  opening.forEach( ({hour, available}) => {
    const li = document.createElement('li')

    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour

    if(hour === '09:00') {
      hourHeaderAdd('Manhã')
    } else if(hour === '13:00') {
      hourHeaderAdd('Tarde')
    } else if(hour === '18:00') {
      hourHeaderAdd('Noite')
    }

    hours.append(li)
  })

  //Adiciona um evento de click no horario disponivel
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')

  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}