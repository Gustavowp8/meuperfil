/*====== card =======*/
var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });

/*===============*/
function chamum(){
  imgs.style.display='block'
}
function fechaum(){
  imgs.style.display='none'
}

/*==========*/

const labels = [
  'HTML',
  'CSS',
  'JavaScript',
  'C# .NET',
  'Firebase',
  'SQLserve',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Meus conhecimentos',
    backgroundColor: '#1f2633',
    borderColor: 'rgb(255, 99, 132)',
    data: [100, 85, 45, 75, 20, 30,],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);