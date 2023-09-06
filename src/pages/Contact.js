import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Mail from "./Mail";
import user from "../images/user.jpg";

const Contact = () => {
  useEffect(() => {
    document.body.classList.remove("background");
  }, []);
  return (
    <>
      <Menu />
      <Mail />
      <div className='content'>
        <hr></hr>
        <div className='team-card-row'>
          <div className='team-card'>
            <div className='team-upper'>
              <img className='team-img' src={user} alt='user image' />
              <p className='team-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                nemo architecto commodi odio sapiente enim accusamus sed facere
                aut consequatur consequuntur minima, similique quibusdam
                molestiae vero magnam? Eaque, totam eius.
              </p>
            </div>
            <div className='team-bottom'>
              <p className='team-name'>Thomas Dapoigny</p>
              <p className='team-title'>Ingénieur du son & Producteur</p>
            </div>
          </div>
          <div className='team-card'>
            <div className='team-upper'>
              <img className='team-img' src={user} alt='user image' />
              <p className='team-description'>
                Large expérience dans la production et le sound design de
                musique électronique. Diplômer en 2021 par l’école Catalyst
                Berlin en « Electronic music production & Performance live ».
                Versatile en terme de style musical. Allant de mélodies
                planantes à grosse sub bass, Il y en a pour toutes les
                fréquences.
              </p>
            </div>
            <div className='team-bottom'>
              <p className='team-name'>Thomas Favre</p>
              <p className='team-title'>Ingénieur du son & Producteur</p>
            </div>
          </div>
        </div>
        <div className='team-card-row'>
          <div className='team-card'>
            <div className='team-upper'>
              <img className='team-img' src={user} alt='user image' />
              <p className='team-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                nemo architecto commodi odio sapiente enim accusamus sed facere
                aut consequatur consequuntur minima, similique quibusdam
                molestiae vero magnam? Eaque, totam eius.
              </p>
            </div>
            <div className='team-bottom'>
              <p className='team-name'>Loriane Frailich</p>
              <p className='team-title'>Administratif & Management</p>
            </div>
          </div>
          <div className='team-card'>
            <div className='team-upper'>
              <img className='team-img' src={user} alt='user image' />
              <p className='team-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                nemo architecto commodi odio sapiente enim accusamus sed facere
                aut consequatur consequuntur minima, similique quibusdam
                molestiae vero magnam? Eaque, totam eius.
              </p>
            </div>
            <div className='team-bottom'>
              <p className='team-name'>Loris Raselli</p>
              <p className='team-title'>Graphiste & Créateur visuel</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
