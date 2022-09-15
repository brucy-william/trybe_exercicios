function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  let diasCorridos = document.getElementById('days');
  console.log(diasCorridos);
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let diasCorridoscreate = document.createElement('li');
    diasCorridoscreate.classList.add('day');
    diasCorridoscreate.innerText = decemberDaysList[index];
    if (diasCorridoscreate.innerText === '24' || diasCorridoscreate.innerText === '25' || diasCorridoscreate.innerText === '31') {
        diasCorridoscreate.classList.add('holiday');
    } 
    if (diasCorridoscreate.innerText === '4' || diasCorridoscreate.innerText === '11' || diasCorridoscreate.innerText === '18' || diasCorridoscreate.innerText === '25') {
        diasCorridoscreate.classList.add('friday');
    }
    diasCorridos.appendChild(diasCorridoscreate);

  }





