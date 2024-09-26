import React from 'react';
import {useRef, useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

//MEDIAS
//os
import onsightVideo from '../assets/projets/os/video-onsight.mp4';
import onsightVideoHover from '../assets/projets/os/video-onsight-hover.mp4';
import onSightImage from '../assets/projets/os/os-img.png';
import onSightSection1Image from '../assets/projets/os/os-section1.jpg';
import onSightSection2Video from '../assets/projets/os/os-section2.mp4';
import onSightSectionImg1 from '../assets/projets/os/os-sectionimg1.jpg';
import onSightSectionImg2 from '../assets/projets/os/os-sectionimg2.jpg';
//pascale-laffon
import plVideo from '../assets/projets/pl/pl_video.mp4';
import plVideoHover from '../assets/projets/pl/pl-video-hover.mp4';
import plImage from '../assets/projets/pl/pl-img.jpg';
import plSection1Image from '../assets/projets/pl/pl-section1.png';
import plSection1ENImage from '../assets/projets/pl/pl-section1en.png';
import plSection2Image from '../assets/projets/pl/pl-section2.png';
import plSection3Image from '../assets/projets/pl/pl-section3.png';
import plSection4video from '../assets/projets/pl/pl-section4.mp4';
//pile-poele
import ppVideo from '../assets/projets/pp/video_type.mp4';
import ppVideo2 from '../assets/projets/pp/video_type_hp.mp4';
import ppImage from '../assets/projets/pp/pp-img.png';
import ppSection1Image from '../assets/projets/pp/pp-section1.jpg';
import ppSection2Image from '../assets/projets/pp/pp-section2.png';
import ppSection3Image from '../assets/projets/pp/pp-section3.jpg';
import ppSection4Image from '../assets/projets/pp/pp-section4.png';
import ppSection5Image from '../assets/projets/pp/pp-section5.png';
//vb
import vbVideo from '../assets/projets/vb/vb-video.mp4';
import vbVideoHover from '../assets/projets/vb/vb-video-hover.mp4';
import vbImage from '../assets/projets/vb/vb-img.jpg';
import vbSection1Image from '../assets/projets/vb/vb-section1fr.png';
import vbSection1ImageEN from '../assets/projets/vb/vb-section1en.png';
import vbSection1aImage from '../assets/projets/vb/vb-section1afr.png';
import vbSection1aImageEN from '../assets/projets/vb/vb-section1aen.png';
import vbSection2aImage from '../assets/projets/vb/vb-section2b.jpg';
import vbSection2bImage from '../assets/projets/vb/vb-section2c.jpg';
import vbSection2cImage from '../assets/projets/vb/vb-section2d.jpg';
//topos
import toposVideo from '../assets/projets/topos/topos-video.mp4';
import toposVideoHover from '../assets/projets/topos/topos-video-hover.mp4';
import toposImage from '../assets/projets/topos/topos-img.png';
import toposSection1Image from '../assets/projets/topos/topos-section2.jpg';
import toposSection2Image from '../assets/projets/topos/topos-section3.jpg';
// CAROUSEL
import prev from '../assets/icons/interface/icon-eye-1.png';
import next from '../assets/icons/interface/icon-eye-2.png';

function Projets() {

  const gridContainerRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgContainerRef = useRef([]);
  const textRef = useRef(null); // Ajout de la référence pour l'élément texte
  const [isHovered, setIsHovered] = useState(false);
  const [imageSource, setImageSource] = useState(prev);
  const [videoSource, setVideoSource] = useState(null);
  const handleHover = () => {setImageSource(next);};
  const handleHoverOut = () => {setImageSource(prev);};

  // Recevoir & envoyer infos
  const navigate = useNavigate();
  const location = useLocation();
  const { infosComposants } = location.state || {}; //Au cas où c'est undefined

  // Déterminer la langue à afficher dans le return selon l'indice reçu
  const Lang = infosComposants ? infosComposants[0].Lang : 'defaultLang';
  const variableENorFr = [
    ['My projects','Discover','Previous','scroll right to learn more','Discover my other projects'],
    ['Mes projets','Découvrir','Précédent','scroller à droite pour en apprendre +','Découvrir mes autres projets'],
  ]
  // Détermine l'indice de langue basé sur la variable lang
  const isEnglish = Lang === 'EN';
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];
  // Sélection des indices en fonction de la langue pour la partie description du projet
  const baselineIndex = isEnglish ? 0 : 1;
  const textIndex = isEnglish ? 0 : 1;
  const text2Index = isEnglish ? 0 : 1;
  const titleIndex = isEnglish ? 0 : 1;


// Navigation du carousel
  const [currentIndex, setCurrentIndex] = useState(0);
// Utilise l'index pour cibler la section (objet rendu)
  const handleNext = (index) => {
// Scroll to the corresponding project description based on the index
    const descriptionElements = document.querySelectorAll('.project-description');
    const descriptionElement = descriptionElements[index];
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handlePrev = (index) => {
// Scroll to the corresponding project description based on the index
    const descriptionElements = document.querySelectorAll('.projectImgContainer');
    const descriptionElement = descriptionElements[index];
    if (descriptionElement) {
      descriptionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const customStyles = {
    fontSize:'1.5rem',
    padding: '1em',  
    textAlign:'left',
  } 
  const imgStyle={
    display: 'flex',
    flexWrap: 'nowrap',
    margin: '.2rem 0rem 0rem .3rem', 
    width: '50px',
    height: 'auto',
    transition: 'transform 2s ease', // Adjust the duration and easing as needed
  }
  // Menu des projets
  const projectsArr = [
    //os
    {
      id: 1,
      image: onSightImage,
      video: onsightVideoHover,
      title: ["OnSight","OnSight"],
      baseline: ['An app to keep an eye on your films, on sight','Une application mobile pour garder un oeil sur tes films'],
      text:[
        "OnSight is an application that allows you to search for any movie or TV series and add it to a list that you can regularly update based on new releases or your preferences.",
        "OnSight est une application qui vous permet de rechercher n'importe quel film ou série et de l'ajouter à une liste que vous pouvez régulièrement mettre à jour en fonction des nouvelles sorties ou de vos préférences. ",
      ],      
      text2:[
        "Immerse yourself in a retro universe inspired by the 80s, where each interaction takes you into cinematic history. With OnSight, you can easily manage your movies and series to watch all while enjoying a captivating vintage design. Available on iOS.",
        "Plongez dans un univers graphique rétro inspiré des années 80, où chaque interaction vous fait voyager. Avec OnSight, vous pouvez facilement gérer vos films et séries à regarder tout en savourant un design vintage captivant. Découvrez l'application sur iOS."
      ],
      link: ['Discover',"Découvrir"],
      onClick: ['https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank']
    },
    //pl
    {
      id: 2,
      image: plImage,
      video: plVideoHover,
      title: ["Pascale Laffon","Pascale Laffon"],
      baseline: ['Micropracy','La micropraxie'],
      text:["Pascale Laffon is a showcase website dedicated to her work as a micropractitioner. Explore her gentle and unique universe", "Pascale Laffon est un site vitrine dédié à son activité de micropraticienne. Explorez son univers doux et unique"],
      text2:["as well as her practice of holistic medicine through refined graphic design and intuitive experience.","ainsi que sa pratique de la médecine holistique à travers un design graphique raffiné et une expérience intuitive."],
      link: ['Discover',"Découvrir"],
      onClick: ['https://pascale-laffon.fr', '_blank']
    },
    //pilepoele
    {
      id: 3,
      image: ppImage,
      video: ppVideo,
      title: ["Pile-Poële (On thyme)","Pile-Poële"],
      baseline: [
                "Promoting an inclusive humanism focused on cuisine",
                "Promouvoir un humanisme inclusif axé sur la cuisine"
                ],
      text:["Pile-Poële is a gender-inclusive typeface focused on cooking created as part of a master's research project at the University of Toulouse Jean Jaurès in 2021. It promotes gender parity and allows for the replacement of words referring to tools, utensils and food with pictograms.",
            "Pile-Poële est une fonte de caractères inclusive basée sur la cuisine, créée dans le cadre d'une recherche de master à l'Université Toulouse Jean Jaurès en 2021. Elle favorise la parité des genres et permet de remplacer les mots désignant des outils, ustensiles et aliments par des pictogrammes."],      
      text2:[
            "The project aims to facilitate universal and intercultural culinary communication. While gender inclusivity is integrated it is not the main focus but rather an inherent aspect of the communication.",
            "Le projet vise à faciliter une communication culinaire universelle et interculturelle. Bien que l'inclusivité des genres soit intégrée, ce n'est pas l'objectif principal du projet mais un aspect évident & crucial de la communication."
            ],
      link: ['Discover',"Découvrir"],
      onClick: ['', '_blank']      
    },
    //vb
    {
      id: 4,
      image: vbImage,
      video: vbVideoHover,
      title: ["VB Avocats","VB Avocats"],
      baseline: ["Modernize a graphic identity","Moderniser une identité graphique"],
      text:[
            "VB Avocats, formerly Valette & Berthelsen, sought to revitalize their graphic identity while preserving the firm's essence.",
            "VB Avocats, anciennement Valette & Berthelsen, ont souhaité revitaliser leur identité graphique tout en préservant l'essence du cabinet."
           ],      
      text2:[
             "The redesign aimed to bring new dynamism while respecting the company's values and history. This included a revamp of the logo, stationery and signage elements.",
             "La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Cela comprenait une refonte du logo, de la papeterie & de la signalétique."
            ],
      link: ['discover',"découvrir"],
      onClick: ['https://www.vb-avocats.fr', '_blank']      
    },
    //anchois
    // {
    //   id: 5,
    //   image: anchoisImage,
    //   video: anchoisvideoHover,
    //   title: ["The Anchovy fest 2024",'La fête des anchois 2024'],
    //   baseline: 
    //   [
    //     "Design the communication for a local festival",
    //     "Imaginer la communication d'un festival local"
    //   ],
    //   text:
    //   [
    //     "The Anchovy Festival 2024 celebrates Catalan culture through an annual event dedicated to these small fish. Discover how this iconic event in Collioure brings together the local community in a festive and friendly atmosphere.",
    //     "La Fête des Anchois 2024 célèbre la culture catalane à travers un événement annuel dédié à ces petits poissons. Découvrez comment cet événement emblématique de Collioure réunit la communauté locale dans une ambiance festive et conviviale."
    //   ],
    //   text2:
    //   [
    //     "Immerse yourself in the unique atmosphere of the Anchovy Festival 2024, where local cuisine and Catalan tradition take center stage. This event is a vibrant celebration of regional culture and gastronomy.",
    //     "Plongez dans l'atmosphère unique de la Fête des Anchois 2024, où la cuisine locale et la tradition catalane sont à l'honneur. Cet événement est une célébration vivante de la culture et de la gastronomie régionales."
    //   ],
    //   link: ['Discover',"Découvrir"],
    //   onClick: ['https://www.collioure.fr/fr/art-culture/actu_culture/collioure-fete-lanchois', '_blank']
    // },
    //dessin
    {
      id: 6,
      image: toposImage,
      video: toposVideoHover,
      title: ["Topographies",'Topographies'],
      baseline: 
      [
        "Designing the city through its ornamentation",
        "Dessiner la ville par ses ornementations"
      ],
      text:
      [
        "Topographies is an artistic exploration of the city of Nîmes through its architectural ornaments.",
        "Topographies est une exploration artistique de la ville de Nîmes à travers ses ornements architecturaux."
      ],
      text2:
      [
        "This project aims to visually map the city through detailed drawings and unique urban patterns identifiable on various facades and door fronts.",
        "Ce projet vise à cartographier visuellement la ville à travers des dessins détaillés et des motifs urbains uniques identifiables sur les différentes façades et devantures de portes."
      ],
      link: ['Discover',"Découvrir"],
      onClick: ['', '_blank']
    },
  ];
  // Récupérer comme props l'objet (projet) au clic sur bouton 'découvrir'
  const descriptionprojectsArr = [
    // onsight
    {
      id: 1,
      client: 'Maria Lou Diaz',
      discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      videoDesktop: onsightVideo,
      videoMobile: onsightVideo,
      image: onSightImage,
      title: 'Onsight',
      baseline: [
        "L'appli qui vous donne envie de prendre votre dose quotidienne de cinéma",
        'The app that helps you remember to take your daily dose of cinema.',
      ],
      infos: [['2023','Application mobile', 'IOS','Cinéma/série'],['2023','App', 'IOS','Cinema/serie']],
      categories: 
      [
        ['Conception graphique','Expérience utilisateur','Application mobile','Maintenance'],
        ['Graphic design', 'User experience', 'Mobile application', 'Maintenance']
      ],
      onClick: ['https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank'],
      besoins:[["Découvrez OnSight, l'application mobile de prise de notes ultime pour les cinéphiles et amateurs de séries. Plongez dans un univers graphique  aux allures rétro où chaque interaction vous transporte dans le passé. Avec OnSight, vous pouvez facilement ajouter et supprimer des films et séries de votre liste, tout en profitant d'un design vintage captivant."],["Discover OnSight, the ultimate note-taking mobile app for movie and series enthusiasts. Immerse yourself in a retro graphical universe reminiscent of the 80s, where every interaction takes you back in time. With OnSight, you can easily add and remove movies and series from your watchlist, all while enjoying a captivating vintage design."]],
      technologies: ['React native', 'After effects', 'Illustrator'],
      sections: 
      [
        {
        subtitle: ['Repenser la prise de notes avec style', 'Rethinking Note-Taking with Style'],
        text: [
          "'OnSight' c'est l'idée de créer une application mobile pour garder en mémoire ses films et séries préférés en ajoutant une composante nostalgique. OnSight plonge les utilisateurs dans une ambiance vintage tout en leur offrant une plateforme élégante et intuitive pour créer et gérer leur liste de films et séries préférés. Inspirée par l'esthétique des années 80 et 90, l'interface se distingue par des tons bleus : calmes mais profonds & des fonts rétro. Les utilisateurs peuvent ajouter autant de titres qu'ils le souhaitent. Les films & séries s'ajoutent et s'empilent sous la forme de pilules comme pour rappeler à l'utilisateur de prendre sa dose quotidienne de cinéma - rendant ainsi la gestion de sa vidéothèque plus ludique.",
          "OnSight is about creating a simple mobile app to keep track of your favorite movies and series. The idea was to rethink the aesthetics to add a nostalgic component. OnSight immerses users in a vintage atmosphere while offering an elegant and intuitive platform to create and manage their list of favorite movies and series. Inspired by the aesthetics of the 80s and 90s, the interface features calm yet deep blue tones and retro fonts. Users can add as many titles as they wish. Movies and series are added and stacked in the form of pills, reminding users to take their daily dose of cinema, making the management of their video library more playful."
         ],
        image: onSightSection1Image,
        },
        {
        subtitle: ['Donner vie à l’identité graphique', 'Giving birth to the graphic identity'],
        text: [
          "Créer une identité forte pour OnSight, c'était aussi imaginer un logotype distinctif et son animation. Le logotype devait capturer l'essence de l'esthétique vintage de l'application tout en restant moderne et reconnaissable. L'animation a été conçue pour donner vie au logo, ajoutant un élément dynamique qui améliore l'expérience utilisateur. Ensemble, le logotype et son animation créent une identité de marque cohérente et mémorable, reflétant le caractère unique d'OnSight.",
          "Creating a strong identity for OnSight also meant envisioning a distinctive logotype and its animation. The logotype needed to capture the essence of the app's vintage aesthetic while remaining modern and recognizable. The animation was designed to bring the logo to life, adding a dynamic element that enhances the user experience. Together, the logotype and its animation create a cohesive and memorable brand identity that reflects the unique character of OnSight.",
        ],
        video: onSightSection2Video,
        },
      ],
      sectionsImg: 
      [
        [onSightSectionImg1],
        [onSightSectionImg2]
      ]
    },
    // pascale
    {
      id: 2,
      client: 'Pascale Laffon',
      discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      videoDesktop: plVideo,
      videoMobile: plVideo,
      image: plImage,
      title: 'Pascale Laffon',
      baseline:["Invincible est la douceur","Invincible is gentleness"],
      infos: [['2024', 'Site vitrine', 'Médecine holistique'],['2024', 'Showcase website', 'Holistic medicine']],
      categories: 
      [
        ['UI/UX', 'Intégration', 'Charte graphique', 'SEO', 'Hébergement', 'Maintenance', 'Motion', 'Captations vidéos & photos'],
        ['UI/UX', 'Coding', 'Graphic charter', 'SEO', 'Hosting', 'Maintenance', 'Motion, Video & photo']
      ],
      onClick: ['https:/www.pascalelaffon.fr', '_blank'],
      besoins:[
        ["Pascale Laffon, micropracteur de longue date, se lance désormais en tant qu'auto-entrepreneur. Pour valoriser au mieux ses services et refléter fidèlement son univers, la création d'un site vitrine s'impose comme une nécessité. Dans cette optique, j'ai entrepris de repenser sa charte graphique (incluant le logotype et l'iconographie) et de développer un site vitrine à même de transmettre l'essence de son activité."],
        ["Pascale Laffon, a long-time micropractor is now launching as a sole proprietor. To showcase her services effectively and accurately reflect her universe, creating a showcase website is essential. With this goal in mind, I have undertaken to redesign her visual identity (including logo and iconography) and develop a showcase website that will perfectly convey the essence of her business."]],
      technologies: [
        ['Ink', 'Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'React'],
        ['Encre', 'Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'React']
      ],
      sections: 
      [
        {title:'Pascale Laffon',
        categories: [
        ['Typographie', 'Iconographie', 'Charte graphique'],
        ['Typography', 'Iconography', 'Graphic charter'],
        ],
        subtitle: ['Une police d’écriture signature', 'A signature font'],
        text: [
          "L’encre de chine comme symbole d’élégance et de finesse. Raconter graphiquement la pratique de la micropraxie, c’était parvenir à parler d’un univers doux, calme mais puissant. Ainsi l’encre de chine s’est révélée comme étant le médium le plus à même de nous transporter dans l’univers de Pascale Laffon. Un titre, une signature pour faire du nom de son entreprise un concept.",
          "Chinese ink as a symbol of elegance and refinement. Graphically depicting the practice of micropraxis meant conveying a gentle, calm yet powerful universe. Thus, Chinese ink emerged as the medium best suited to transport us into Pascale Laffon's world. A title, a signature, to transform the name of her business into a concept."
         ],
        imageEN: plSection1ENImage,
        image: plSection1Image
        },

        {title:'Pascale Laffon',
        categories: [
            ['Illustration','Charte graphique'],
            ['Illustration','Graphic charter']
            ],
        subtitle: ['L’illustration comme première impression', 'Portrait as a first impression'],
        text: [
          "Tirer le portrait de Pascale et de son cabinet permettent d’aller à la rencontre du patient avant même qu’il prenne rendez-vous. Cette approche rend l'expérience vivante et chaleureuse, invitant ainsi les patients à entrer dans l'univers de Pascale et à établir une connexion personnelle dès le début - nous invitant dans son univers.",
          "Capturing portraits of Pascale and her practice allows potential patients to get acquainted even before scheduling an appointment. This approach brings a lively and welcoming feel, inviting patients into Pascale's world and creating a warm, personal connection from the start.",
        ],
        image: plSection2Image,
        },

        {title:'Pascale Laffon',
          categories: [
            ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
            ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
          ],
          subtitle: [' Penser une iconographie unique', 'Creating a unique iconography'],
          text: [
            "Pour immerger encore davantage les utilisateurs dans l'univers unique de Pascale, il est apparu évident de créer une iconographie exclusive. En concevant des pictogrammes spécialement imaginés pour illustrer la pratique de la micropraxie, nous avons pu raconter son histoire de manière authentique et engageante.",
            "To further immerse users in Pascale's unique world, it became clear that creating an exclusive iconography was essential. By designing custom pictograms that vividly narrate the practice of micropraxis, we were able to tell her story in an authentic and engaging way.",
          ],
          image: plSection3Image,
          },

          {title:'Pascale Laffon',
            categories: [
              ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
              ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
            ],
            subtitle: ['Less is more', 'Less is more'],
            text: [
              "Afin de cristalliser, cette refonte, en dernier lieu, il est apparu essentiel de simplifier le logotype déjà existant de Pascale Laffon et de l’animer.",
              "To finalize this redesign, it became essential to simplify Pascale Laffon's existing logotype and animate it.",
            ],
            video: plSection4video,
            },
      ],
    },
    // pile-poele
    {
      id: 3,
      client: 'Maria Lou Diaz',
      discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      videoDesktop: ppVideo2, //video dintro
      videoMobile: ppVideo,
      image: ppImage,
      title: 'Pile-Poële',
      baseline: ["Ouvrez-vous au monde par la cuisine.", 'Open Up to the World Through Cuisine'],
      infos: [
        ['2021>2024', 'Police d’écriture', 'Cuisine'],
        ['2021>2024', 'Font', 'Cuisine']
      ],
      categories: 
      [
        ['Typographie', 'Recherche'],
        ['Typography', 'Research'],
      ],
      // onClick: ['https:/www.pascalelaffon.fr', '_blank'],
      besoins:[
        ["Promouvoir un humanisme inclusif axé sur la cuisine. Pile-Poële est une fonte de caractères gender-inclusive avec un set de glyphes pictographiques centré autour de la cuisine. Elle prend forme dans le cadre d’une recherche de master autour de la constitution d’un système langagier basé sur la cuisine à l’Université Toulouse Jean Jaurès à Toulouse en 2021. Cette police propose une palette de caractères qui favorise la parité des genres tout en permettant dans son code de remplacer les mots désignant outils, ustensiles et aliments par leurs symboles pictographiques. Le signe alphabétique ou pictographique vient s’inscrire dans la recherche d’une transmission interculturelle culinaire. Le but premier est de permettre une forme de communication davantage universelle autour de la cuisine. Pile-Poële possède également des ligatures non-binaires. Toutefois, ici, la notion d’inclusivité des genres n’est pas le point central du projet mais devient annexe, comme une évidence dans la communication."],
        ["Promoting an inclusive humanism focused on cuisine. Pile-Poële is a gender-inclusive typeface with a set of pictographic glyphs centered around cuisine. It was developed as part of a master's research project on creating a language system based on cuisine at the University of Toulouse Jean Jaurès in Toulouse in 2021.This font offers a character set that promotes gender parity while allowing for the replacement of words denoting tools, utensils, and food with their pictographic symbols within its code. The alphabetic or pictographic symbols are part of a broader effort to achieve intercultural culinary communication. The primary goal is to enable a more universal form of communication around cuisine. Pile-Poële also features non-binary ligatures. However, in this context, gender inclusivity is not the project's central focus but rather an inherent aspect of communication."],
      ],
      technologies:
      [
        ['Dessin', 'Illustrator','Fontlab'],
        ['Drawing', 'Illustrator', 'FontLab'],
      ],
      sections:
      [
        {title:'Pile-Poële',
        subtitle: ['Le dessin des caractères', 'The design of characters'],
        text: [
          "Écrire une recette se fait dans la plupart des cas, sur un bout de papier, à la main et de manière plutôt rapide. Pile-Poële dans son dessin tente de réunir cet aspect cursif de l’écriture propre à la prise de note manuscrite et le besoin de structure et de discipline de la discipline culinaire. L'exagération du type où les ligatures se dessinent naturellement ouvre de nouvelles perspectives typographiques et sociétales en facilitant la création de nouveaux glyphes. Les pictogrammes sont minimalistes dans un souci de les rendre simples à re-dessiner manuellement et facilement ré-appropriables. Toujours dans cette volonté d’inclusivité et d’accessibilité, les pictogrammes dessinent une cuisine universelle avec des ustensiles issus de la gastronomie mais également des cuisines familiales méditerranéennes (faitout, panier d’osier, pot de yaourt, etc). La cuisine à dessiner devient ainsi universelle et humaine. Au-delà des ustensiles et aliments, les systèmes métriques se représentent aussi humainement que possible : par la main (pincée, poignée, etc).",
          "Writing a recipe is typically done on a piece of paper, by hand, and often quickly. Pile-Poële's design seeks to merge the cursive aspect of handwritten notes with the structured and disciplined nature of culinary practice. The exaggeration of typefaces where ligatures naturally emerge opens up new typographic and societal perspectives by facilitating the creation of new glyphs. The pictograms are minimalist, designed to be easy to redraw manually and readily reappropriated. In the spirit of inclusivity and accessibility, the pictograms depict a universal cuisine, featuring utensils from gastronomy as well as Mediterranean family kitchens (such as a stew pot, wicker basket, yogurt pot, etc.). Thus, the cuisine depicted becomes universal and human. Beyond utensils and food items, metric systems are represented as humanely as possible: by hand (pinch, handful, etc.)."
         ],
        image: ppSection1Image,
        },

        {title:'Pile-Poële',
        subtitle: ['Améliorations du projet', 'Project Improvements'],
        text: [
          "Ce fut ma première tentative d’une réponse typographique à ce questionnement. Elle reste pour le moment probablement trop mécanique dans sa forme et insuffisamment inclusive d'un point de vue culturel. Pour pallier cet aspect mécanique du glyphe et des caractères, j’envisage également une variante cursive de la fonte. Parmi les autres améliorations à venir, il y aura le dessin des capitales et l’élargissement du set de glyphes pictographiques. Il me semble nécessaire de proposer un dessin des glyphes plus coloré afin de rendre davantage compte de l’aspect sensoriel et vivant propre à la cuisine. Pour l'instant, les pictogrammes sont principalement euro-centrés. L’idée serait donc de proposer l’intégralité des ustensiles et aliments existants mondialement afin que l’inclusivité devienne totale. En ce qui concerne les ligatures gender-inclusive disponibles, elles sont également incomplètes. Ce projet est encore en construction car l’idée d’une communication par le pictogramme est un réel challenge au vu de la pluralité des cultures et des langues existantes. En tant que personne européenne, ce qui pourrait me sembler comme une réponse satisfaisante à un système langagier universel, ne l’est pas forcément pour une personne issue d’une culture différente de la mienne. Communiquer autour de la cuisine ne nécessite pas seulement la traduction des ustensiles et aliments. Une multitude d’autres paramètres essentiels sont nécessaires à la transmission d’une recette, d’une technique ou d’un savoir-faire. Pile-Poële reste donc un début de réflexion à cette question très vaste de la sauvegarde du patrimoine culinaire populaire humain. Elle reste un début de réponse typographique toujours en construction.",
          "This was my first attempt at a typographic response to this question. At the moment, it may still be too mechanical in form and insufficiently inclusive from a cultural perspective. To address the mechanical aspect of the glyph and characters, I am also considering a cursive variant of the font. Among other forthcoming improvements, there will be the design of uppercase letters and the expansion of the set of pictographic glyphs. It seems necessary to offer a more colorful design of the glyphs to better convey the sensory and lively aspect inherent to cuisine. Currently, the pictograms are mainly Euro-centric. The idea, therefore, is to include all utensils and foods existing globally to achieve total inclusivity. Regarding the available gender-inclusive ligatures, they are also incomplete. This project is still under construction because the concept of communication through pictograms is a real challenge given the diversity of cultures and languages. As a European, what may seem like a satisfactory response to a universal language system may not necessarily be so for someone from a different culture than mine. Communicating about cuisine requires not only the translation of utensils and food items but also numerous other essential parameters for transmitting a recipe, technique, or expertise. Therefore, Pile-Poële remains the beginning of reflection on this very broad question of preserving human culinary heritage. It is an initial typographic response still under development.",
        ],
        image: ppSection2Image,
        },

        {title:'Pile-Poële',
          subtitle: ['Publications', 'Publications'],
          text: [
            "Pile-Poele a été ajouté à l’invetaire créé par le collectif Bye-Bye Binary de 2017 à 2023.",
            "Pile-Poële was added to the inventory created by the Bye-Bye Binary collective from 2017 to 2023.",
          ],
          image: ppSection3Image,
          },
      ],
      sectionsImg:
      [
        [ppSection4Image, ppSection5Image],
        [ppSection4Image, ppSection5Image],
      ]
      
    },
    //vb
    {
      id: 4,
      client: 'Valette & Berthelsen Avocats',
      discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      videoDesktop: vbVideo, //video dintro
      videoMobile: vbVideo,
      image: vbImage,
      title: 'VB Avocats',
      baseline:["Redéfinir l'excellence juridique","Redefining Legal Excellence"],
      infos: [
        ['2024', 'Identité graphique', 'Cabinet d’avocats', 'Réalisé chez Cible Publicité'],
        ['2024', 'Graphic identity', 'Law firm', 'Designed at Cible Publicité']
      ],
      categories: 
      [
        ['Charte graphique', 'Logotype', 'Papeterie', 'Signalétique'],
        ['Graphic charter', 'Logotype', 'Stationery', 'Signage'],
      ],
      onClick: ['https:/www.avocats-vb.fr', '_blank'],
      besoins:[
        ["VB Avocats, anciennement Valette & Berthelsen, ont exprimé le désir de revitaliser leur identité graphique tout en préservant l'essence même du cabinet. La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Il a donc été donc été question d'entreprendre une refonte du logotype, des éléments de papeterie et de signalétique."],
        ["VB Avocats, formerly known as Valette & Berthelsen, sought a redesign of their graphic identity. The goal was to breathe new life into their brand without compromising the essence of the firm. Therefore, I undertook a redesign of the logo, stationery elements, and signage."],
      ],
      technologies:
      [
        ['Photoshop', 'Ilustrator', 'Indesign'],
        ['Photoshop', 'Ilustrator', 'Indesign'],
      ],
      sectionsImg:
      [
        [vbSection1aImageEN,vbSection2aImage,vbSection1ImageEN,vbSection2cImage,vbImage,vbSection2bImage],
        [vbSection1aImage,vbSection2aImage,vbSection1Image,vbSection2cImage,vbImage,vbSection2bImage],  
      ]
    },
    //anchois
    // {
    //   id: 5,
    //   client: 'Collioure',
    //   discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
    //   videoDesktop: anchoisvideo,
    //   videoMobile: anchoisvideo,
    //   image: anchoisImage,
    //   title: "La fête de l'Anchois",
    //   baseline:["L'Anchois sur son 31","Celebrating the Ocean’s Finest: Anchovy Festival Extravaganza"],
    //   infos: [
    //     ['2024', 'Campagne', 'Evenementiel', 'Réalisé chez Cible Publicité'],
    //     ['2024', 'Campaign', 'Event', 'Designed at Cible Publicité']
    //   ],
    //   categories: 
    //   [
    //     ['Affiches', 'Réseaux sociaux', 'Impression textile'],
    //     ['Posters', 'Social media', 'Textile printing'],
    //   ],
    //   onClick: ['https://www.collioure.fr/fr/art-culture/actu_culture/collioure-fete-lanchois', '_blank'],
    //   besoins:[
    //     ["La fête des Anchois se tient chaque année en Juin dans la ville de Collioure. Durant tout ce week-end de festivités, il s'agissait de créer la communication autour de cette fête. T-shirts pour les exposants et musiciens, affiches, communication sur les réseaux sociaux. Il était donc question de créer une identité reprenant la culture et l’esprit catalan. Les anchois vêtus de pied en cap d’une barretina, faixe et vigatanes dansent la sardane scandant des expressions catalanes au son de la cobla. Les couleurs sont donc volontairement un hommage au drapeau catalan."],
    //     ["The Anchovy Festival takes place every year in June in the town of Collioure. Therefore, during this weekend of festivities, the focus is on creating all the communication surrounding this event. This includes T-shirts for exhibitors and musicians, posters, and social media communication. The goal was to create an identity that reflects Catalan culture and spirit. Anchovies dressed in traditional Catalan attire, including a barretina, faixa, and vigatanes, dance the sardana while chanting Catalan expressions to the sound of the cobla. The colors are intentionally a tribute to the Catalan flag."],
    //   ],
    //   technologies:
    //   [
    //     ['Photoshop', 'Illustrator', 'Indesign'],
    //     ['Photoshop', 'Illustrator', 'Indesign'],
    //   ],
    //   sectionsImg:
    //   [anchoisSection1Image,anchoisSection2Image,anchoisSection3Image],
    // },
    //topographies
    {
      id: 6,
      client: 'Maria Lou Diaz',
      discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
      videoDesktop: toposVideo, //https://www.facebook.com/watch/?v=829436065704861  
      videoMobile: toposVideo,
      image: toposImage,
      title: "Topographies",
      baseline:["Qui a dit que l'ornement était un crime ?","Who said ornament was a crime ?"],
      infos: [
        ['2019', 'Édition', 'Dessins aux charbons'],
        ['2019', 'Publication', 'Charcoal drawings']
      ],
      categories: 
      [
        ['Édition', 'Dessin'],
        ['Publication', 'Drawing'],
      ],
      besoins:[
        ["Topographies est une exploration artistique de la ville de Nîmes à travers ses ornements architecturaux, mettant en lumière les dessins complexes et l'importance historique de chaque détail. Ce projet vise à cartographier visuellement la ville à travers des dessins détaillés et des motifs urbains uniques identifiables sur les différentes façades et devantures de portes, offrant un récit visuel complet de la diversité architecturale de Nîmes. C'est également un projet artistique réflexif sur les manières de parler de l'Homme par la cartographie et par sa manière de construire la ville, révélant ainsi comment l'urbanisme et l'architecture peuvent être des témoignages éloquents de la culture et de l'histoire humaine."],
        ["Topographies is an artistic exploration of the city of Nîmes through its architectural ornaments, highlighting the intricate designs and historical significance of each detail. This project aims to visually map the city through detailed drawings and unique urban patterns identifiable on various facades and door fronts, providing a comprehensive visual narrative of Nîmes' architectural diversity. It is also a reflective artistic project on the ways of speaking about humanity through cartography and urban construction, revealing how urbanism and architecture can serve as eloquent testimonies of human culture and history."],
      ],
      technologies:
      [
        ['Fusains', 'Charbon', 'Indesign'],
        ['Charcoals', 'Coal', 'InDesign'],
      ],
      sectionsImg:
      [
        [toposSection1Image,toposSection2Image],
        [toposSection1Image,toposSection2Image]
      ]
      
    },    
  ];  
  // Découvrir le projet
  const handleDiscover = (projectId) => {
    // Prendre l'objet dans l'array de description ayant le meme id que celui cliqué (menu des projets)
    const idx = infosComposants[0].ids;
    console.log('idx', infosComposants[0].ids);
    const projectDescription = descriptionprojectsArr.find(project => project.id === projectId);
    navigate(`/projet/${idx}`, { state: { projectDescription, Lang } }); //envoie de ce que la methode find a trouvé et stocker dans variable projectDescription
  };


// EN savoir + description projet
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showFullText, setShowFullText] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


return (

<div className='section'>
  <h2>{textVariables[0]}</h2> 
  {/* <img src={en2024} alt="en 2024 écrit à l'encre de chine"/> */}
  <div id='projets'>
  {/* // La grille avec tous les projets selectionnés */}
  <div className='grid-container-projets' ref={gridContainerRef}>
        {projectsArr.map((project, index) => (
       // Le projet 
        <div className='project-wrapper' key={index} style={{marginBottom:'2rem'}}>
          {/* //Div 1 avec l'image */}
          <div className='projectImgContainer' ref={imgContainerRef} onClick={() => {setCurrentIndex(index);handleNext(index);}}>
              
              {/* /VIDEO ON HOVER*/}
              <video className='projectHoverVideo' autoPlay loop muted playsInline>
                <source src={projectsArr[index].video} type='video/mp4' />
              </video>
              
              {/* /si source est video ou img*/}
              {projectsArr[index].image.includes('.mp4') ? 
              (
                <video className='projectImg' autoPlay loop muted playsInline>
                  <source src={projectsArr[index].image} type='video/mp4' />
                </video>
              ) 
              : 
              (
                <div className='projectImg' style={{backgroundImage: `url(${projectsArr[index].image})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
              )}              
          </div>


  {/* //Div 2 avec le texte */}       
  <div className='project-description' ref={descriptionRef}>
  <h2 className='project-title'>{projectsArr[index].baseline[baselineIndex]}</h2>

  {/* Texte pour mobile avec bouton "En savoir plus" */}
  <p className='project-txt short-text' style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
    {isMobile && !showFullText
      ? `${projectsArr[index].text[textIndex].slice(0, 200)}...`
      : projectsArr[index].text[textIndex]}
  </p>
 
  {/* Texte complet pour les grands écrans et mobiles avec "Afficher plus" activé */}
  <p className={`project-txt full-text ${isMobile && showFullText ? 'show' : ''}`} style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
    {projectsArr[index].text2[text2Index]}
  </p>
  {isMobile && (
    <div className='btn-black en-savoir-plus' onClick={toggleFullText} style={{ marginLeft: '3rem' }}>
      <p>{showFullText ? 'Afficher moins' : 'En savoir plus'}</p>
    </div>
  )}

    <div className='flex-wrap' style={{ flexWrap: 'nowrap' }}>
      {/* Aller à la page de description */}
      <div className='btn-black' style={{ marginLeft: '3rem' }} onClick={() => handleDiscover(project.id)}>
        <p>{textVariables[1]}</p>
      </div>
      <div className='btn-black' onClick={() => { setCurrentIndex(index); handlePrev(index); }}>
       <p>{textVariables[2]}</p>
      </div>
    </div>
  </div>
  <div className='project-details'>
    <p style={{ fontSize: '1.5rem' }}>{projectsArr[index].title[titleIndex]}</p>
    
    <div className='carousel-btn' style={{ marginLeft: '1rem', marginBottom: '.2rem' }} 
      onClick={() => { setCurrentIndex(index); handleNext(index); }}>
      <img src={imageSource} alt='an icon of an eye to see the project description when clicked' onMouseOver={handleHover} onMouseOut={handleHoverOut} style={imgStyle}/>
    </div>
    <p style={{color:'black'}}>{textVariables[3]}</p>


  </div>
  </div>
  ))}
</div>

  {/* BEHANCE */}
  <div className='social'>
              <div className='btn-black' onClick={() => window.open('https://www.behance.net/mariadiaz116', '_blank', 'noreferrer')}>
                <p>{textVariables[4]}</p>
              </div>

              <div className='social'>
                <button className='social-button' onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}><FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{ color: "white" }} /></button>
                <button className='social-button' onClick={() => window.open('https://github.com/marialoudiaz', '_blank', 'noreferrer')}><FontAwesomeIcon className='svgIcon' icon={faGithub} style={{ color: "white" }} /></button>
                <button className='social-button' onClick={() => window.open('https://www.instagram.com/marialoudiaz/', '_blank', 'noreferrer')}><FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{ color: "white" }} /></button>
              </div> 

  </div>
</div>
    </div>
  )
}

export default Projets