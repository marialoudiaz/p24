import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import branding_specialist_melbourne from '../assets/projets/branding_specialist_melbourne.mp4';
import '../App.scss';
import 'animate.css';
/*MEDIAS*/
import visual_indentity_specialist from '../assets/img/marialoudiaz-independant.jpg';
import branding_specialist from '../assets/img/marialoudiaz-agence.jpg';
import html from '../assets/icons/softs/html.png';
import css from '../assets/icons/softs/css.png';
import js from '../assets/icons/softs/js.png';
import node from '../assets/icons/softs/node.png';
import react from '../assets/icons/softs/react.png';
import wordpress from '../assets/icons/softs/wordpress.png';
import webflow from '../assets/icons/softs/webflow.png';
import figma from '../assets/icons/softs/figma.png';
import adobexd from '../assets/icons/softs/adobexd.png';
import github from '../assets/icons/softs/github.png';
import fontlab from '../assets/icons/softs/fontlab.png';
import photoshop from '../assets/icons/softs/photoshop.png';
import lightroom from '../assets/icons/softs/lightroom.png';
import illustrator from '../assets/icons/softs/illustrator.png';
import indesign from '../assets/icons/softs/indesign.png';
import premiere from '../assets/icons/softs/premiere.png';
import aftereffect from '../assets/icons/softs/aftereffect.png';


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
      location: ['actuellement à','Montpellier, Fr.'], // location
      presentation: ["Directeur artistique spécialisé dans le branding", //0
                      "Du développement web au design imprimé,",
                      "j'aide les travailleurs indépendants à construire",
                      "leur identité visuelle et à lancer leur projet."],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','Site vitrine','Site multipages','Vidéos & photos','Réseaux sociaux','Articles de blog','Identité visuelle', 'Logotype','Signalétique','Packaging','Illustration'],
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
        visual_indentity_specialist
      ],
      deroule:['flex', 'Votre projet', "C'est une collaboration sur-mesure pour lui donner vie. Chaque projet est unique tout comme vous. Ainsi, je vous accompagne à chaque étape afin de créer une solution sur-mesure la mieux adaptée à vos besoins.", "Juste une mise au point", "Lors d’une visio, nous parlons de votre projet et établissons ensemble la stratégie dont vous avez besoin.", "L’aventure commence", "Je vous retourne un devis comprenant tous les services ainsi que le temps nécessaire à leurs réalisations. La date du livrable est établie.", "Tada!", "C’est le jour où vous recevez votre premier livrable. À partir de là, vous avez la possibilité de demander deux modifications (offertes)."],
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
      location: ['actuellement à','Montpellier, Fr.'], // location
      presentation: ["Directeur artistique spécialisé dans le branding.", 
                     "Du développement web au design imprimé,",
                     "j'aide les travailleurs indépendants à construire", 
                     "leur identité visuelle et à lancer leur projet.", 
                     "Je travaille aussi avec des studios."
                    ],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','CMS|SEO','Développement fullstack','Vidéo | Photo | Motion','Réseaux sociaux','Rédaction','Identité graphique','Logotype','Signalétique','Packaging','Illustration'],
      logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
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
        branding_specialist
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
      location: ['currently in','Montpellier, Fr.'], // location
      presentation: ["Art director specialized in branding.", 
                    "From web development to print design,", 
                    "I help independent workers build their", 
                    "visual identity and launch their project."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony',
'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",visual_indentity_specialist],
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
      location: ['currently in','Montpellier, Fr.'], // location
      presentation: ["Art director specialized in branding.", 
                     "From web development to print design,", 
                     "I help independent workers build their", 
                     "visual identity and launch their project.",
                     "I also work with studios."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','CMS|SEO','Fullstack JS','Video | Photo | Motion','Social medias','Writing','Visual identity','Logotype','Signage','Packaging','Illustration'],
      logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony',
        'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea. Communicate with power & memorability.","Color","Express an emotion, a state of being. Create life, animate your universe with the power of color.",branding_specialist],
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
          <source src={branding_specialist_melbourne} type='video/mp4'/>
        </video> 
      </div>
    </>
  );

    
};
export default Chargement;
