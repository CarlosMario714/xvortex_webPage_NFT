//Animacion parrafo pagina 1//
// const loading = document.getElementById("loading");
const parrafo = document.querySelector(".parrafo");
// const logo = document.getElementById("logo");
// const content = document.getElementById("content");
// const textoScroll = document.querySelector('.textoScroll')
// const footer = document.getElementById("footer")
// const parrafo2 = document.getElementById("parrafo2");
// const textoScroll2 = document.querySelector('.textoScroll2')
// const texto3 = document.getElementById("estesi")
// const generation1 = document.querySelector('.generation1')
// const textoScroll3 = document.querySelector('.textoScroll3')
// const botton = document.getElementById('botton')
const translatetexts = document.querySelectorAll('.traducir')
// const lore = document.getElementById('lore')
// const about = document.getElementById('about')
// const team = document.getElementById('team')
// const socialMedia = document.getElementById('social-media')
const idioma = document.querySelector('.Language')
const particles = document.getElementById('particles-js')
const earthquake = document.querySelector('.earthquake')
const video = document.getElementById('video')
const history = document.querySelector('.history')
const questions = document.querySelector('.about')
const aboutus = document.querySelector('.team-container')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]
// const text = "The year is 3055." 
//             +"Exul is the 4th planet in the Sericom galaxy were a solar year takes 700 days."          
//             +"Humanity was devasted by wars and different viruses that impede human reproduction."          
//             +"And here is where the adventure begins."

// const text2 = "Life Out is a utility NFT Project created on the Ethereum chain aiming to create a Multiverse that will reside in the web3 community."
// + 
// "We are community driven, so holding an NFT from the collection will give you perks in the ecosystem."
// +" Moreover, being part of the Genesis collection will bring you even more utility in future developments."
// let i = 0;


// function fcHistory(){
//   history.scrollIntoView()
// }

// function fcQuestion(){
//   questions.scrollIntoView()
// }
// function fcTeam(){
//   aboutus.scrollIntoView()
// }
// function fcsocialMedia(){
//   footer.scrollIntoView()
// }

video.playbackRate = 2.0


  setTimeout(() => {
    particles.style.opacity = '1'
    earthquake.style.zIndex = '0'
    earthquake.style.position = 'static'
    logo.style.opacity = "1";
    logo.style.paddingTop = '0'
    // setTimeout(opacidad, 2000); 
  }, 15000)

// lore.onclick = fcHistory
// about.onclick = fcQuestion
// team.onclick = fcTeam
// socialMedia.onclick = fcsocialMedia

function dealay(n) {
  return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
  });
}

const info3 = (entradas) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      parrafo.style.marginRight = "0"
      console.log(1)
    } else {
      
    }
  });
}

const observador = new IntersectionObserver(info3, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})

observador.observe(parrafo)




async function language(element){
  const requestJson = await fetch(`../Languages/${element}.json`)
  const texts = await requestJson.json()

  for( const translatetext of translatetexts ){
    const section = translatetext.dataset.content
    const type = translatetext.dataset.type

    translatetext.innerHTML = texts[section][type]
  }
}

idioma.addEventListener('click', (e) => {

  if(e.target.dataset.function === 'en'){
    language(e.target.dataset.function)
  }


  if(e.target.dataset.function === 'es'){
    language(e.target.dataset.function)
  }

  if(e.target.dataset.function === 'lore'){
    console.log(e.target.parentElement)
    e.target.parentElement.scrollIntoView()
  }
  
  
})

// let timeDelay = 0;
// let time = 10;

// async function typeWriter() {
//   if (i < text.length) {
//       if (text[i] == ".") {
//           parrafo.innerHTML += text[i];
//           parrafo.innerHTML += "<br><br>";
//       } else {
//           parrafo.innerHTML += text[i];
//       }
//       i++;
//       setTimeout(typeWriter, time);
//   } else {
//       botton.firstElementChild.innerHTML = "NEXT >";
//       botton.style.display = "flex";
//       await dealay(0);
//       botton.style.opacity = "1";
//       i = 0;
//   }
// }

// function opacidad(){
//     content.style.display = "flex";
//     // typeWriter() 
// }

// // window.addEventListener("load", () => {
// //   logo.style.opacity = "1";
// //   logo.style.paddingTop = '0'

// //   setTimeout(opacidad, 2000);           

// // });

// function borrar(parrafo) {
//   let element = parrafo;

//   function typeDelete() {
//       let last = element.innerHTML.length - 1;

//       if (parrafo.innerHTML !== "") {

//           element.innerHTML = element.innerHTML.substring(0, last);

//           setTimeout(typeDelete, 1);
//       }
//   }

//   typeDelete();
// }

// botton.addEventListener("click", async () => {

//   if (botton.classList[1] == "bnt-next") {
//       botton.style.opacity = "0";
//       borrar(parrafo);
//       await dealay(1);
//       parrafo.classList.remove("visible");
//       parrafo2.classList.add("visible");
//       typeWriter2();
//       botton.classList.remove("bnt-next");
//       return botton.classList.add("bnt-previous");
//   }

//   if (botton.classList[1] == "bnt-previous") {
//       parrafo.classList.add("visible");
//       botton.firstElementChild.innerHTML = "NEXT >";
//       parrafo2.classList.remove("visible");
//       typeWriter();
      
//       botton.classList.add("bnt-next2");
//       return botton.classList.remove("bnt-previous");
//   }

//   if (botton.classList[1] == "bnt-next2") {
//       parrafo.classList.remove("visible");
//       parrafo2.classList.add("visible");
//       botton.firstElementChild.innerHTML = "< PREVIOUS";
//       botton.classList.remove("bnt-next2");
//       return botton.classList.add("bnt-previous2");
//   }

//   if (botton.classList[1] == "bnt-previous2") {
//       parrafo2.classList.remove("visible");
//       parrafo.classList.add("visible");
//       botton.firstElementChild.innerHTML = "NEXT >";
//       botton.classList.add("bnt-next2");
//       return botton.classList.remove("bnt-previous2");
//   }
// });


// //Animacion parrafo pagina 2 y 3//

// async function typeWriter2() {
    
//   if (i < text2.length) {
//       if (text2[i] == ".") {
//           parrafo2.innerHTML += text2[i];
//           parrafo2.innerHTML += "<br><br>";
//       } else {
//           parrafo2.innerHTML += text2[i];
//       }
//       i++;
//       setTimeout(typeWriter2, time);
//   } else {
//       botton.style.opacity = "1";
//       textoScroll2.style.opacity = '1'
//       botton.firstElementChild.innerHTML = "< PREVIOUS";
//       textoScroll.style.opacity = '1'
//       i = 0;
//   }
// }

// const info3 = (entradas) => {
//   entradas.forEach((entrada) => {
//     if(entrada.isIntersecting){
//       texto3.style.opacity = "1"
//       generation1.style.opacity = "1"
//     } else {
      
//     }
//   });
// }

// const observador2 = new IntersectionObserver(info3, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0
// })

// observador2.observe(generation1)
// observador2.observe(texto3)

// //Animacion pagina 4 About Us//

// const aboutus = document.querySelector(".aboutus")
// const team = document.querySelector(".team")

// const info4 = (entradas) => {
//   entradas.forEach((entrada) => {
//     if(entrada.isIntersecting){
//       aboutus.style.opacity = "1"
//       team.style.opacity = "1"
//       footer.style.opacity = "1"
//       //setTimeout(typeWriter2, 500);
//     } else {
//       //parrafo2.style.opacity = "0"
//     }
//   });
// }

// const observador3 = new IntersectionObserver(info4, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0
// })

// observador3.observe(aboutus)
// observador3.observe(team)

