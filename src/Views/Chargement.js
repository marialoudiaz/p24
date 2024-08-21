import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import video from '../assets/projets/chargement.mp4';
import '../App.scss';
import 'animate.css';
/*MEDIAS*/
import portrait1 from '../assets/img/portrait-mai24.jpg';
import portrait2 from '../assets/img/portrait-mai24EN.jpg';
import a1 from '../assets/icons/softs/1.png';
import a2 from '../assets/icons/softs/2.png';
import a3 from '../assets/icons/softs/3.png';
import a4 from '../assets/icons/softs/4.png';
import a5 from '../assets/icons/softs/5.png';
import a6 from '../assets/icons/softs/6.png';
import a7 from '../assets/icons/softs/7.png';
import a8 from '../assets/icons/softs/8.png';
import a9 from '../assets/icons/softs/9.png';
import a10 from '../assets/icons/softs/10.png';
import a11 from '../assets/icons/softs/11.png';
import a12 from '../assets/icons/softs/12.png';
import a13 from '../assets/icons/softs/13.png';
import a14 from '../assets/icons/softs/14.png';
import a15 from '../assets/icons/softs/15.png';
import a16 from '../assets/icons/softs/16.png';
import a17 from '../assets/icons/softs/17.png';
import a18 from '../assets/icons/softs/18.png';


const Chargement = () =>{

  const navigate = useNavigate();
  //affiche les textes selon fr ou en recu
  // récupérer les infos
  const location = useLocation();
  const { infos } = location.state; 
  const enDisplay =['Welcome','choose your category','Independant worker','Studios'];
  const frDisplay =['Bienvenue','sélectionnez votre catégorie','Indépendant.es','Studios & Agences'];

  // conditionnel
  const displayTexts = infos.includes('en') ? enDisplay : frDisplay;

  // le fr/ en me permet de savoir quelles arrays envoyés ici aussi
  const indepArray = [
    {
      ids: 0,
      Lang: 'FR',
      videoOrdi: 'videoReveal1',
      videoTel: 'videoReveal2',
      discover: "découvrir le showréel",
      location: ['actuellement à','melbourne'], // location
      presentation: ['Bonjour,', "Je suis Maria Lou Diaz", "directeur artistique spécialisé dans le branding.", "Du développement web au design imprimé, j'aide les travailleurs indépendants à construire leur identité visuelle et à lancer leur projet."],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','site vitrine','site multipages','site marchand','vidéos & photos','réseaux sociaux','articles de blog','identité graphique', 'logotype','signalétique','packaging','illustration','affiche'],
      approche: [
        'Mon approche',
        'Créer, c\'est rendre visible l\'invisible.',
        'Authenticité',
        'Créer une forme de préciosité au-delà du papier.',
        'Détail',
        'La poésie du détail : symbolisme, cadrage, choix des mots.',
        'Harmonie',
        'La quête de la beauté : forme, courbes d\'une police, la symbiose des couleurs.',
        'Nature',
        'Inspirée par l\'harmonie, la symétrie et le symbolisme des plantes et des fleurs.',
        'Minimalisme',
        'Rechercher l\'essence d\'une idée. Communiquer avec puissance et mémorabilité.',
        'Couleur',
        'Exprimer une émotion, un état d\'être. Créer la vie, animer votre univers par la puissance de la couleur.',
        portrait1
      ],
      deroule:['flex', 'Votre projet', "C'est une collaboration sur-mesure pour lui donner vie. Chaque projet est unique tout comme vous. Ainsi, je vous accompagne à chaque étape afin de créer une solution sur-mesure le mieux adaptée à vos besoins.", "Juste une mise au point", "Lors d’une visio, nous parlons de votre projet et établissons ensemble la stratégie dont vous avez besoin.", "L’aventure commence", "Je vous retourne un devis comprenant tous les services ainsi que le temps nécessaire à leurs réalisations. La date du livrable est établie", "Tada!", "C’est le jour où vous recevez votre premier livrable. À partir de là, vous avez la possibilité de demander deux modifications (offertes)."],
      citation: 'Pour un design qui vous ressemble.',
      form: ['Racontons','votre','histoire','Prénom','Email','Votre message','Envoyer',"Collaborons, pour emmener votre business à l’étape supérieure & le faire décoller 🚀. Des idées, des questions, une terrible envie de me contacter ? Je vous écoute."],
      words: ['auto-entrepreneur.se','petite entreprise','start-up','porteur.se de projet','idéaliste','rêveur.se']
  },
  ];
  const studioArray = [
    {
      ids: 1,
      Lang: 'FR',
      videoOrdi: 'videoReveal3',
      videoTel: 'videoReveal4',
      discover: "découvrir le showréel",
      location: ['actuellement à','melbourne'], // location
      presentation: ['Bonjour,', "Je suis Maria Lou Diaz", "directeur artistique spécialisé dans le branding.", "Du développement web au design imprimé, j'aide les travailleurs indépendants à construire leur identité visuelle et à lancer leur projet.", "Je travaille aussi avec des studios."],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','CMS|SEO','développement fullstack JS', 'e-commerce','vidéo | photo | motion','réseaux sociaux','rédaction','identité graphique','logotype','signalétique','packaging','illustration','affiche'],
      logiciels: [a1,a2,a3,a4,a5,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18],
      approche: [
        'Mon approche',
        'Créer, c\'est rendre visible l\'invisible.',
        'Authenticité',
        'Créer une forme de préciosité au-delà du papier.',
        'Détail',
        'La poésie du détail : symbolisme, cadrage, choix des mots.',
        'Harmonie',
        'La quête de la beauté : forme, courbes d\'une police, la symbiose des couleurs.',
        'Nature',
        'Inspirée par l\'harmonie, la symétrie et le symbolisme des plantes et des fleurs.',
        'Minimalisme',
        'Rechercher l\'essence d\'une idée. Communiquer avec puissance et mémorabilité.',
        'Couleur',
        'Exprimer une émotion, un état d\'être. Créer la vie, animer votre univers par la puissance de la couleur.',
        portrait2
      ],
      deroule: 'none',
      citation:  'Pour un design qui vous ressemble.',
      form: ['Ensemble','co-crééons votre','unicité','Prénom','Email','Votre message','Envoyer'],
  },
  ];
  const indepArrayEN = [
    {
      ids: 2,
      Lang: 'EN', //aide pour afficher projets en FR ou EN
      videoOrdi: 'videoReveal5',
      videoTel: 'videoReveal6',
      discover: 'discover the showreel',
      location: ['currently in','melbourne'], // location
      presentation: ['Hello,', "I am Maria Lou Diaz", "director specialized in branding.", "From web development to print design, I help independent workers build their visual identity and launch their project."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','showcase website', 'multipage website', 'e-commerce website','videos & photos', 'social medias', 'blog articles', 'visual identity', 'logotype', 'signage', 'packaging', 'illustration', 'poster'],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony',
'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",portrait1],
      deroule:['flex','Your project',"It's a tailor-made collaboration to bring it to life. Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","During a video call, we discuss your project and establish the strategy you need : together.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'For a design that suits you.',
      form: ["Let's tell",'your','story','Surname','Email','Your message','Send',"Let's collaborate to take your business to the next level and make it soar 🚀. Ideas, questions, a strong desire to get in touch? I'm listening."],
      words: ['self-employed', 'small business', 'start-up', 'project leader', 'idealist', 'dreamer']
  },
  ];
  const studioArrayEN = [
    {
      ids: 3,
      Lang: 'EN', //aide pour afficher projets en FR ou EN
      videoOrdi: 'videoReveal7',
      videoTel: 'videoReveal8',
      discover: 'discover the showreel',
      location: ['currently in','melbourne'], // location
      presentation: ['Hello,', "I am Maria Lou Diaz", "art director specialized in branding.", "From web development to print design, I help independent workers build their visual identity and launch their project.","I also work with studios."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','CMS|SEO','fullstack JS','e-commerce','video | photo | motion','social medias','writing','visual identity','logotype','signage','packaging','illustration','poster'],
      logiciels: [a1,a2,a3,a4,a5,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony',
        'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",portrait2],
      deroule: 'none',
      citation: 'For a design that suits you.',
      form: ['Together',"let's design your",'uniqueness','Surname','Email','Your message','Send'],
  },
  ];

// Envoyer les informations correspondantes aux composants
  const selectMenu = (arrayRecue) => {
    // envoyer l'array correspondante
    const infosComposants = arrayRecue;
    const id = infosComposants[0].ids;
    navigate(`/homepage/${id}`, { state: { infosComposants } });
};
  
  return (
    <>
      <div className='film2'>
        <div className='gridHover'>
          <div className='gridHoverTitle'>
            {displayTexts.slice(0, 2).map((text, index) => (
                <h2 
                  key={index} 
                  className={`animate__animated animate__slideInUp ${index === 1 ? 'second-h2' : ''}`}
                >{text}</h2>
            ))}
          </div>
          {displayTexts.slice(2).map((text, index) => (
            <h3 key={index} className='custom-animation syne' 
                onClick={() => selectMenu(
                  infos.includes('en') 
                  ? 
                  (index === 0 ? indepArrayEN : studioArrayEN) // index===0 determine l'array a envoyer selon la balise h3 cliquée
                  : 
                  (index === 0 ? indepArray : studioArray))}
            >
              {text}
            </h3>
          ))}
        </div>
        <video className='background-video2' autoPlay muted playsInline>
          <source src={video} type='video/mp4'/>
        </video> 
      </div>
    </>
  );

    
};
export default Chargement;
