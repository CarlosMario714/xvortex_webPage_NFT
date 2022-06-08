//Animacion parrafo pagina 1//
const loading = document.getElementById("loading");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const content = document.getElementById("content");
const textoScroll = document.querySelector('.textoScroll')
const footer = document.getElementById("footer")
const parrafo2 = document.getElementById("parrafo2");
const textoScroll2 = document.querySelector('.textoScroll2')
const parrafo3 = document.querySelector(".parrafo3")
const generation1 = document.querySelector('.generation1')
const textoScroll3 = document.querySelector('.textoScroll3')
const botton = document.getElementById('botton')
const multiverse = document.querySelector('.logo h1:nth-child(3)')
const video = document.querySelector('.video video')
const buttonPlay = document.querySelector('.buttonPlay')
const logo2 = document.querySelector('.logo2')

const text = "The year is 3055." 
            +"Exul is the 4th planet in the Sericom galaxy were a solar year takes 700 days."          
            +"Humanity was devasted by wars and different viruses that impede human reproduction."          
            +"And here is where the adventure begins."

const text2 = "Life Out is a utility NFT Project created on the Ethereum chain aiming to create a Multiverse that will reside in the web3 community."
+ 
"We are community driven, so holding an NFT from the collection will give you perks in the ecosystem."
+" Moreover, being part of the Genesis collection will bring you even more utility in future developments."

let i = 0;

function dealay(n) {
  return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
  });
}

let timeDelay = 0;
let time = 10;

async function typeWriter() {
  if (i < text.length) {
      if (text[i] == ".") {
          parrafo.innerHTML += text[i];
          parrafo.innerHTML += "<br><br>";
      } else {
          parrafo.innerHTML += text[i];
      }
      i++;
      setTimeout(typeWriter, time);
  } else {
      botton.firstElementChild.innerHTML = "NEXT >";
      botton.style.display = "flex";
      await dealay(0);
      botton.style.opacity = "1";
      i = 0;
  }
}

function opacidad() {
  logo.style.opacity = "0.8";
  logo.style.paddingTop = '0'
}

function opacidad2() {
  multiverse.style.opacity = "1";
}

function opacidad3() {
    logo.style.opacity = "0";
    content.style.display = "flex";
    typeWriter() 
}


buttonPlay.addEventListener("click", () => {
  
  video.play()
  video.style.opacity = "1"
  buttonPlay.style.opacity = "0"

  setTimeout(opacidad, 13000)
  setTimeout(opacidad2, 16000)
  setTimeout(opacidad3, 20000);           

});

function borrar(parrafo) {
  let element = parrafo;

  function typeDelete() {
      let last = element.innerHTML.length - 1;

      if (parrafo.innerHTML !== "") {

          element.innerHTML = element.innerHTML.substring(0, last);

          setTimeout(typeDelete, 1);
      }
  }

  typeDelete();
}

botton.addEventListener("click", async () => {

  if (botton.classList[1] == "bnt-next") {
      botton.style.opacity = "0";
      borrar(parrafo);
      await dealay(1);
      parrafo.classList.remove("visible");
      parrafo2.classList.add("visible");
      typeWriter2();
      botton.classList.remove("bnt-next");
      return botton.classList.add("bnt-previous");
  }

  if (botton.classList[1] == "bnt-previous") {
      parrafo.classList.add("visible");
      botton.firstElementChild.innerHTML = "NEXT >";
      parrafo2.classList.remove("visible");
      typeWriter();
      
      botton.classList.add("bnt-next2");
      return botton.classList.remove("bnt-previous");
  }

  if (botton.classList[1] == "bnt-next2") {
      parrafo.classList.remove("visible");
      parrafo2.classList.add("visible");
      botton.firstElementChild.innerHTML = "< PREVIOUS";
      botton.classList.remove("bnt-next2");
      return botton.classList.add("bnt-previous2");
  }

  if (botton.classList[1] == "bnt-previous2") {
      parrafo2.classList.remove("visible");
      parrafo.classList.add("visible");
      botton.firstElementChild.innerHTML = "NEXT >";
      botton.classList.add("bnt-next2");
      return botton.classList.remove("bnt-previous2");
  }
});


//Animacion parrafo pagina 2 y 3//

async function typeWriter2() {
    
  if (i < text2.length) {
      if (text2[i] == ".") {
          parrafo2.innerHTML += text2[i];
          parrafo2.innerHTML += "<br><br>";
      } else {
          parrafo2.innerHTML += text2[i];
      }
      i++;
      setTimeout(typeWriter2, time);
  } else {
      botton.style.opacity = "1";
      
      botton.firstElementChild.innerHTML = "< PREVIOUS";
      textoScroll.style.opacity = '1'
      i = 0;
  }
}

const info3 = (entradas) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      parrafo3.style.opacity = "1"
      generation1.style.opacity = "1"
      logo2.style.setProperty("animation", "logo2 6s linear")
      logo2.style.setProperty("animation-fill-mode", "forwards")
      textoScroll2.style.opacity = '1'
    } else {
      
    }
  });
}

const observador2 = new IntersectionObserver(info3, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})

observador2.observe(generation1)
observador2.observe(parrafo3)

//cambio de idioma//

const elementoIdiomas = document.getElementById("idioma")

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language => {
  const requestJson = await fetch(`../languages/${language}.json`)
  const texts = await requestJson.json()

  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value

    textToChange.innerHTML = texts[section][value]
  }
}

elementoIdiomas.addEventListener("click", (e) => {
  changeLanguage(e.target.dataset.language)
})

//Animacion pagina 4 About Us//

const aboutus = document.querySelector(".aboutus")
const team = document.querySelector(".team")

const info4 = (entradas) => {
  entradas.forEach((entrada) => {
    if(entrada.isIntersecting){
      aboutus.style.opacity = "1"
      team.style.opacity = "1"
      footer.style.opacity = "1"
      //setTimeout(typeWriter2, 500);
    } else {
      //parrafo2.style.opacity = "0"
    }
  });
}

const observador3 = new IntersectionObserver(info4, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0
})

observador3.observe(aboutus)
observador3.observe(team)

