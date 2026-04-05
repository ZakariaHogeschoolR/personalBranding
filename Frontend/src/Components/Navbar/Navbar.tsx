
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom';
import Profile from '../../assets/profile.png';
import FooterNav from './FooterNav';
import { useLocation } from 'react-router-dom';
import file from '../../../public/Cirriculum Vitea Zakaria Tahiri.pdf';

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "===";
  return (
    <nav className={`Navbar ${isAboutPage ? "fade-navbar" : ""}`}>
      <img className="profile-foto" src={Profile}/>
      <p className="Profile-Text"><strong>Zakaria Tahiri</strong></p>
      <p className="Description">Informatica @ Hogeschool Rotterdam | <span className="nested-Description">Frontend & Backend Developer</span></p>
      <section className="Opening-Profile-line">&nbsp;</section>
      {isAboutPage === false &&(
        <div className="links">
          <ul>
            <li>
              <NavLink to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/About">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/TimeLine">
                TIMELINE
              </NavLink>
            </li>
            <li>
              <a 
                href={`${import.meta.env.BASE_URL}Cirriculum%20Vitea%20Zakaria%20Tahiri.pdf`} 
                download="Zakaria_Tahiri_CV.pdf"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
      {isAboutPage === true &&(
        <div className="links">
          <ul>
            <li>
                <div className='about-links'>
                  HOME
                </div>
            </li>
            <li>
                <div className='about-links'>
                  ABOUT
                </div>
            </li>
            <li>
                <div className="about-links">
                  TIMELINE
                </div>
            </li>
            <li>
                <div className="about-links">
                  CV
                </div>
            </li>
          </ul>
        </div>
      )}
      <div className="icons8">
        <a target="_blank" href="https://icons8.com/icon/RejqnVMqk7VX/icons8">Icons8</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
      <section className="Closing-Profile-line">&nbsp;</section>
      <FooterNav/>
    </nav>
  );
}
export default Navbar;
