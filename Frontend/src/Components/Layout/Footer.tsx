import '../Styles/Footer.css';
import Github from '../../assets/icons8-github.gif';
import Linkdin from '../../assets/icons8-linkedin.svg';
import Email from '../../assets/icons8-email.gif';
import '../../Components/Styles/footerNav.css';
type Props = {
    fade: boolean;
}
const Footer = ({fade}: Props) => 
{
    return (
        <footer className={`Footer ${fade ? "fade-in-footer" : ""}`}>
            <div className="footerNav">
                <a className="footer-github" href="https://github.com/ZakariaHogeschoolR" target="_blank" rel="noopener noreferrer">'<img src={Github} width='30px' height='30px'/></a>
                <a className="footer-linkdin" href="https://www.linkedin.com/in/zakaria-tahiri-a41a753a9" target="_blank" rel="noopener noreferrer"><img src={Linkdin} width='30px' height='30px'/></a>
                <a className="footer-email" href="mailto:zahari.tahiri@email.com" target="_blank" rel="noopener noreferrer"><img src={Email} width='30px' height='30px'/></a>
            </div>
        </footer>
    );
}
export default Footer;