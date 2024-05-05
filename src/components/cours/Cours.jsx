import React , { useState } from 'react'
import "./Cours.css"
import Navbar from '../navbar/navbar';

const Cours = () => {
    const [selectedCourse, setSelectedCourse] = useState('technologie');
    const [des, setDes] = useState(" Le chatPoil de carotte l’a entendu dire : rien ne vaut la viande de chat pour pêcher les écrevisses ,ni les tripes d’un poulet ni les déchets d’une boucherie .Or il connait un chat, méprise parce qu’il est vieux , malade et ca et la , pelé .Poil de carotte l’invite à venir prendre une tasse de lait chez lui, dans son toiton . ils seront seuls. Il se peut qu’un rat s’aventure hors du mur , mais Poil de Carotte ne promet que la tasse de lait .Il l’a posée dans un coin . il y pousse le chat et dit :-Régale –toi .Il lui flatte l’échine , lui donne des noms tendres , observe ses vifs coups de langue , puis s’attendrit .-Pauvre vieux , jouis de ton reste .Le chat vide la tasse , nettoie le fond , essuie le bord, et lèche plus que ses lèvres sucrées .-As-tu fini , bien fini ? demande Poil vde Carotte ,qui le caresse toujours . Sansdoute , tu boirais volontiers une autre tasse ; mais je n’ai pu voler que celle là . D’ailleurs ,un peu plus tôt , un peu plus tard !A ces mots , il lui applique au front le canon de sa carabine et fait feu .La détonation étourdit Poil de Carotte .Il croit que le toiton même a sauté , et quand le nuage se dissipe , il voir , à ses pieds , le chat qui le regarde d’un œil .Une moitié de la tête est emportée , et la sang coule dans la tasse de lait .-  Il n’a pas l’air mort , dit Poil de Carotte . pauvre chat ,j’ai pourtant visé juste . Il n’ose bouger , tant l’œil unique d’un jaune éclat ,l’inquiète. Le chat , par le tremblement de son corps , indique qu’il vit mais ne tente aucun effort pour bouger.Il semble saigner exprès dans la tasse , avec le soin que toutes les goutes y tombent.Poil de Carotte n’est pas un débutant . Il a tué des oiseaux sauvages, des animaux domestiques, un chien, pour son propre plaisir ou pour le compte d’autrui");

  const handleCourseClick = (Course) => {
    setSelectedCourse(Course);
    if (Course === 'technologie'){
     
      setDes(" Le chatPoil de carotte l’a entendu dire : rien ne vaut la viande de chat pour pêcher les écrevisses ,ni les tripes d’un poulet ni les déchets d’une boucherie .Or il connait un chat, méprise parce qu’il est vieux , malade et ca et la , pelé .Poil de carotte l’invite à venir prendre une tasse de lait chez lui, dans son toiton . ils seront seuls. Il se peut qu’un rat s’aventure hors du mur , mais Poil de Carotte ne promet que la tasse de lait .Il l’a posée dans un coin . il y pousse le chat et dit :-Régale –toi .Il lui flatte l’échine , lui donne des noms tendres , observe ses vifs coups de langue , puis s’attendrit .-Pauvre vieux , jouis de ton reste .Le chat vide la tasse , nettoie le fond , essuie le bord, et lèche plus que ses lèvres sucrées .-As-tu fini , bien fini ? demande Poil vde Carotte ,qui le caresse toujours . Sansdoute , tu boirais volontiers une autre tasse ; mais je n’ai pu voler que celle là . D’ailleurs ,un peu plus tôt , un peu plus tard !A ces mots , il lui applique au front le canon de sa carabine et fait feu .La détonation étourdit Poil de Carotte .Il croit que le toiton même a sauté , et quand le nuage se dissipe , il voir , à ses pieds , le chat qui le regarde d’un œil .Une moitié de la tête est emportée , et la sang coule dans la tasse de lait .-  Il n’a pas l’air mort , dit Poil de Carotte . pauvre chat ,j’ai pourtant visé juste . Il n’ose bouger , tant l’œil unique d’un jaune éclat ,l’inquiète. Le chat , par le tremblement de son corps , indique qu’il vit mais ne tente aucun effort pour bouger.Il semble saigner exprès dans la tasse , avec le soin que toutes les goutes y tombent.Poil de Carotte n’est pas un débutant . Il a tué des oiseaux sauvages, des animaux domestiques, un chien, pour son propre plaisir ou pour le compte d’autrui")
    }else if(Course === 'Informatique'){
      
      setDes("Le Département de Science des Données de l'ISIMM est à l'avant-garde de l'utilisation de la puissance des données pour stimuler l'innovation et résoudre des problèmes complexes dans divers domaines. Avec une approche multidisciplinaire, notre département combine l'expertise en statistique, informatique et connaissances spécifiques au domaine pour extraire des informations, faire des prédictions et informer les processus décisionnels. Nos membres du corps professoral sont engagés dans des recherches de pointe dans des domaines tels que l'apprentissage automatique, l'intelligence artificielle, l'extraction de données et l'analyse de mégadonnées. Les étudiants de notre programme acquièrent une expérience pratique grâce à des projets, des stages et des collaborations avec des partenaires industriels, les préparant à des carrières enrichissantes dans des domaines axés sur les données.")
    }else{
     
      setDes("Le Département de Mathématiques de l'ISIMM est dédié à l'étude et à l'exploration des principes mathématiques et de leurs applications. Notre département offre une gamme complète de cours couvrant des sujets tels que l'algèbre, le calcul, la géométrie, les équations différentielles et la modélisation mathématique. Grâce à l'étude théorique et à la résolution pratique de problèmes, les étudiants de notre programme développent des compétences de pensée critique, des capacités analytiques et une compréhension approfondie des concepts mathématiques. Nos membres du corps professoral sont des chercheurs actifs, contribuant aux avancées en mathématiques pures et appliquées, ainsi qu'à des domaines interdisciplinaires tels que la physique, l'ingénierie et la finance. Que les étudiants envisagent des carrières dans le milieu universitaire, l'industrie ou le gouvernement, notre département les dote des outils mathématiques et de l'état d'esprit nécessaires pour exceller dans leurs parcours choisis.")
    }
  };
  return (
    <>
    <Navbar />
    <div>
   
        <div className='Appo'>
         
      <div className="sidebar">
        {/* <h3 className='pipipiw'>...</h3> */}
        <ul>
           <br/>
        <li
            onClick={() => handleCourseClick('technologie')}
            className={selectedCourse=== 'technologie' ? 'selected' : ''}
          >
            Production ecrite
          </li>
          <hr />
          <li
            onClick={() => handleCourseClick('Informatique')}
            className={selectedCourse === 'Informatique' ? 'selected' : ''}
          >
            physique
          </li>
          <hr />
          <li
            onClick={() => handleCourseClick('mathematique')}
            className={selectedCourse === 'mathematique' ? 'selected' : ''}
          >
            Mathematique
          </li>
          <hr/>
        </ul>
      </div>
      <div className="main-content">
        
        {/* Render department-specific content based on selectedDepartment */}
        {selectedCourse && (
          <div className="department-section">
            {/* You can render department-specific content here */}
            
            <span className='spn'>Contenu du cours :<br></br><br></br> <span id='desid'>{des}</span></span>
          </div>
        )}
      </div>
      </div>
      </div>
      </>
  )
}

export default Cours
