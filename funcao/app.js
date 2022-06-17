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

/*====== links ======*/

function face(){
  alert('indisponível')
}
function insta(){
  const irinsta = confirm('Você deseja ir para o  Instagram ? ')
  if(irinsta == true){
    location='https://www.instagram.com/gage_developer'
  }
}

function linkedin(){
  const linkedin = confirm('Você deseja ir para o LinkedIn')
  if(linkedin == true){
  location='https://www.linkedin.com/in/gustavo-ferreira-dos-santos-103317154/'
  }
}
function whast(){
  const whastsa = confirm('Você deseja ir para WhatsApp ?')
  if(whastsa == true){
  location='https://api.whatsapp.com/send?phone=5561995118369&text=Ol%C3%A1%2C%20Gustavo'
  }
}
function you(){
  const yout = confirm('Você deseja ir para o YouTube ?')
  if(yout == true){
    location='https://www.youtube.com/channel/UC06k8u6-wycS0-6WAOdVl2Q'
  }
}
function telegram(){
  const teleg = confirm('Você deseja ir para o Telegram ?')
  
  if(teleg == true){
    location='https://t.me/GustavoFerreira73'
  }
}

function chamamsgg(){
  msgg.style.display='block'
}

function fecharmsgtt(){
  msgg.style.display='none'
}

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', enviarMasg)
function enviarMasg(){
  alert('OPS! houve um erro.')
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