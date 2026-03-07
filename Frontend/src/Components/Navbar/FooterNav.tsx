import Github from '../../assets/icons8-github.gif';
import Linkdin from '../../assets/icons8-linkedin.svg';
import Email from '../../assets/icons8-email.gif';
import '../../Components/Styles/footerNav.css';

const FooterNav = () => {
    return (
        <div className="footerNav">
            <a className="github" href="https://github.com/ZakariaHogeschoolR" target="_blank" rel="noopener noreferrer"><img src={Github}/></a>
            <a className="linkdin" href="https://www.linkedin.com/in/zakaria-tahiri-a41a753a9" target="_blank" rel="noopener noreferrer"><img src={Linkdin}/></a>
            <a className="email" href="mailto:zahari.tahiri@email.com" target="_blank" rel="noopener noreferrer"><img src={Email}/></a>
        </div>
    );
}
export default FooterNav;