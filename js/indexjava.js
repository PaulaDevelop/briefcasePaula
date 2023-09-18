(function () {
  const listElements = document.querySelectorAll(".menu-item--show");
  const list = document.querySelector(".menu-links");

  const addClick = () => {
    listElements.forEach(element => {
      element.addEventListener("click", () => {

        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("menu-item--active")

        console.log(subMenu.clientHeight);

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight
        }

        subMenu.style.height = `${height}px`;

      });
    });
  }

  addClick();
})();

var menuAbierto = document.querySelector('.button-menu');

function desplegarMenu(){
  var menuDesplegable = document.querySelector('.nav-link');
  menuDesplegable.classList.toggle('desplegar-menu');
}

menuAbierto.addEventListener('click', desplegarMenu);



const d = document;
const w = window;

const showButtonLimit = 500;
const btn_scroll = d.querySelector('.scroll-top-btn');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

d.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showButtonLimit){
    btn_scroll.classList.remove('hidden');
  }else{
    btn_scroll.classList.add('hidden');
  }
});

const goTop = () =>{
  d.body.scrollIntoView({
    behavior: 'smooth',
  });
};

btn_scroll.addEventListener('click', goTop);





const form1 = document.querySelector('#formulario')
const botonMailto = document.querySelector('.mandar')

form1.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  // let text = `mailto:paula.montes1111@gmail.com?subject=${form.get('nombre')} ${form.get('apellido')} ${form.get('email')} &body=${form.get('mensaje')}`
  let text = `mailto:paula.montes1111@gmail.com?subject=${('Mensaje de la pagina web')}&body=${form.get('nombre')} ${form.get('apellido')}: ${form.get('mensaje')}`
  botonMailto.setAttribute('href', text)
  console.log(text)
  botonMailto.click()
}