export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available');

  hours.forEach((available) => {
    available.addEventListener('click', (selected) => {

      //Removendo a classe hour-selected de todas as li(listas) não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove('hour-selected')
      })

      //Adiciono a classe na li clicada
      selected.target.classList.add('hour-selected')
    })
  })
}