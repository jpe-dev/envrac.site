import { Link } from "react-router-dom";
import envracLogo from "../images/logo.jpeg";


const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const Menu = () => {

  return (
    <>
      <nav className='sticky'>
        <ul className='menu'>
          <li>
            <img src={envracLogo} alt='envrac logo' />
          </li>
          <li>
            <Link to='/'>acceuil</Link>
          </li>
          <li>
            <Link to='/presentation'>présentation</Link>
            <div className="subnav">
              <Link to='/presentation/#studio' onClick={() => handleClickScroll('studio')}>le studio</Link>
              <Link to='/presentation/#work-space' onClick={() => handleClickScroll('work-space')}>le work-space</Link>
            </div>
          </li>
          <li>
            <Link to='/services'>services</Link>
            <div className="subnav">
              <Link to='/services/#audio'>audio</Link>
              <Link to='/services/#visuel'>visuel</Link>
              <Link to='/services/#equipement'>equipement</Link>
            </div>
          </li>
          <li>
            <Link to='/docs'>docs</Link>
            <div className="subnav">
              <Link to='/docs/#lexique'>lexique</Link>
              <Link to='/docs/#faq'>faq</Link>
            </div>
          </li>
          <li>
            <Link to='/portfolio'>portfolio</Link>
            <div className="subnav">
              <Link to='/portfolio/#releases'>releases</Link>
              <Link to='/portfolio/#blog'>blog</Link>
            </div>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
            <div className="subnav">
              <Link to='/contact/#equipe'>équipe</Link>
              <Link to='/contact/association'>association</Link>
            </div>
          </li>
          <li>
            <Link to='/booking'>booking</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
