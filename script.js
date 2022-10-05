
let bg = document.querySelector('#wrapper');
let fog = document.querySelector('.mouse-parallax-fog');

window.addEventListener('mousemove', function(e) {
   let x = e.clientX / window.innerWidth;
   let y = e.clientY / window.innerHeight;  
   bg.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
   fog.style.transform = 'translate(+' + x * 200 + 'px, -' + y * 200 + 'px)';
});


const mainContent = document.getElementById('main_content')
const content = document.getElementById('box_content') 

const start = () => {
   console.log(data)
}

start()