import '../App.scss';
import { useLocation } from 'react-router-dom';

const Citation = () => {
   // Recevoir & envoyer infos
   const location = useLocation();
   const { infosComposants } = location.state;
   const citation = infosComposants[0].citation

  return(
      <>
        <div className='section'>
            <h3 className="citation">
            {citation}
            </h3>
          </div>
      </>
  )
  };

export default Citation;
// fill='transparent'