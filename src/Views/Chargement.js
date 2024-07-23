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
  const enDisplay =['welcome','choose your category','Independant worker','Studios'];
  const frDisplay =['bienvenue','choisissez votre catégorie','Indépendant.es','Studios & Agences'];

  // conditionnel
  const displayTexts = infos.includes('en') ? enDisplay : frDisplay;

  // le fr/ en me permet de savoir quelles arrays envoyés ici aussi
  const indepArray = [
    {
      ids: 0,
      Lang: 'FR',
      videoOrdi: 'videoReveal1',
      videoTel: 'videoReveal2',
      services: ['mes services','une multitude de compétences pour un projet unique','nous élaborons, ensemble, une offre sur-mesure selon vos besoins','site vitrine','site multipages','site marchand','application mobile','vidéos & photos','réseaux sociaux','création de contenu','identité graphique', 'logotype','signalétique','packaging','illustration','affiche'],
      approche: [
        'mon approche',
        'Créer, c\'est rendre visible l\'invisible',
        'Authenticité',
        'Créer une forme de préciosité au-delà du papier',
        'Détail',
        'La poésie du détail : symbolisme, cadrage, choix des mots',
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
      deroule:['flex', 'votre projet', "C'est une collaboration sur-mesure pour lui donner vie.", "Juste une mise au point", "Lors d’une visio, nous parlons de votre projet et établissons ensemble la stratégie dont vous avez besoin.", "L’aventure commence", "Je vous retourne un devis comprenant tous les services ainsi que le temps nécessaire à leurs réalisations.La date du livrable est établie", "Tada!", "C’est le jour où vous recevez votre premier livrable. À partir de là, vous avez la possibilité de demander deux modifications (offertes)."],
      citation:  'pour un design qui vous ressemble',
      form: ['racontons','votre','histoire','Prénom','Email','Votre message','Envoyer ✉️',"Collaborons, pour emmener votre business à l’étape supérieure & le faire décoller 🚀. Des idées, des questions, une terrible envie de me contacter ? Je vous écoute."],
      words: ['auto-entrepreneur.se','petite entreprise','start-up','porteur.se de projet','idéaliste','rêveur.se']
  },
  ];
  const studioArray = [
    {
      ids: 1,
      Lang: 'FR',
      videoOrdi: 'videoReveal3',
      videoTel: 'videoReveal4',
      services: ['mes services','une multitude de compétences pour un projet unique','nous élaborons, ensemble, une offre sur-mesure selon vos besoins','CMS|SEO','développement fullstack JS', 'e-commerce', 'application mobile','vidéo | photo | motion','réseaux sociaux','copywriting','branding','logotype','signalétique','packaging','illustration','affiche'],
      logiciels: [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18],
      approche: [
        'mon approche',
        'Créer, c\'est rendre visible l\'invisible',
        'Authenticité',
        'Créer une forme de préciosité au-delà du papier',
        'Détail',
        'La poésie du détail : symbolisme, cadrage, choix des mots',
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
      citation:  'pour un design qui vous ressemble',
      form: ['ensemble','co-crééons votre','unicité','Prénom','Email','Votre message','Envoyer ✉️'],
  },
  ];
  const indepArrayEN = [
    {
      ids: 2,
      Lang: 'EN', //aide pour afficher projets en FR ou EN
      videoOrdi: 'videoReveal5',
      videoTel: 'videoReveal6',
      services: ['my services','A multitude of skills for a unique project','We develop, together, a tailor-made offer according to your needs','showcase website', 'multipage site', 'e-commerce site', 'mobile application', 'videos & photos', 'social medias', 'content creation', 'graphic identity', 'logotype', 'signage', 'packaging', 'illustration', 'poster'],
      logiciels: [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18],
      approche: ['my approach', 'To create is to make the invisible visible','Authenticity','Creating a form of preciousness beyond paper','Detail','The poetry of detail: symbolism, framing, choice of words','Harmony',
'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",portrait1],
      deroule:['flex','your project',"It's a custom collaboration to bring it to life.","Just a clarification","During a video call, we discuss your project and establish the strategy you need together.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion.The delivery date is set","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'for a design that suits you',
      form: ["let's tell",'your','story','Surname','Email','Your message','Send ✉️',"Let's collaborate to take your business to the next level and make it soar 🚀. Ideas, questions, a strong desire to get in touch?I'm listening."],
      words: ['self-employed', 'small business', 'start-up', 'project leader', 'idealist', 'dreamer']
  },
  ];
  const studioArrayEN = [
    {
      ids: 3,
      Lang: 'EN', //aide pour afficher projets en FR ou EN
      videoOrdi: 'videoReveal7',
      videoTel: 'videoReveal8',
      services: ['my services','A multitude of skills for a unique project','We develop, together, a tailor-made offer according to your needs','CMS|SEO','fullstack JS','e-commerce','App','video | photo | motion','social medias','copywriting','branding','logotype','signage','packaging','illustration','poster'],
      logiciels: [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18],
      approche: ['my approach', 'To create is to make the invisible visible','Authenticity','Creating a form of preciousness beyond paper','Detail','The poetry of detail: symbolism, framing, choice of words','Harmony',
        'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",portrait2],
      deroule: 'none',
      citation: 'for a design that suits you',
      form: ['together',"let's design your",'uniqueness','Surname','Email','Your message','Send ✉️'],
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
                <p key={index} className='animate__animated animate__slideInUp'>{text}</p>
            ))}
          </div>
          {displayTexts.slice(2).map((text, index) => (
            <h3 key={index} className='custom-animation' 
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
        <video className='background-video2' autoPlay loop muted playsInline>
          <source src={video} type='video/mp4'/>
        </video> 
      </div>
    </>
  );

    
};
export default Chargement;
