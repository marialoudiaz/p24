import React, { useEffect,useRef }from 'react';
import { useLocation} from 'react-router-dom';
import '../App.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Test() {

  const location = useLocation();
  const { infosComposants } = location.state;
  const phrase = infosComposants[0].citation;
  // animation gsap
    let refs = useRef([]); // Références aux élèments (lettres séparés)
    const body = useRef(null); // hook useRef permet de créer référence (DOM)
    const container = useRef(null);

useEffect( () => {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
  createAnimation();
}, [])

const createAnimation = () => {
gsap.to(refs.current, { // applique anim aux elements référencés dans refs.current
  scrollTrigger: { // configuration declencheur de défilement
  trigger: container.current, // conteneur déclencheur
  scrub: true, // animation en douceur
  start: `top`, // debut defilement
  end: `+=${window.innerHeight/4}`, // fin défilement
},
  opacity: 1, // anime opacité (0.1 => 1)
  ease: "none",
  stagger: 0.1 // applique un délai à chaque lettre pour créer un effet de défilement fluide
  })
}

// EQUIVALENT DE SPLITTYPE CHEZ GSAP - COUPER EN CHARS
// divise la phrase en mot et appelle splitLetters pour diviser les mots en lettres

const splitWords = (phrase) => {
  let body = [];
  phrase.split(" ").forEach( (word, i) => { // divise en mots
  const letters = splitLetters(word); // pour chaque mot appelle fonction splitLetters => obtenir tableau de lettres
  body.push(<p key={word + "_" + i} id='body-type-p'>{letters}</p>)
  // stocke les chars dans variable body + return et affiche dans le return
  // <p> créé pour chaque mot avec key selon mot + index
})
return body // renvoie tableau
}

const splitLetters = (word) => {
  let letters = []
  word.split("").forEach( (letter, i) => { // mot reçu divisé en chars
  letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>) // créer des éléments <span> pour chaque lettre avec une reference pour chq lettre dans refs
})
return letters;
}

  

return (

<div className='section' id='citation-bg'>
  <main ref={container} className='main'>
    <div ref={body} className='body-type'>
    <h3 id='citation'>{splitWords(phrase)}</h3>
    </div>
  </main>
</div>
)
}

export default Test
