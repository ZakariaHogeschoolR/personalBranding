import '../Styles/Sidebar.css';
import Profile from '../../assets/react.webp';
import { NavLink} from 'react-router-dom';

type Props = {
    fade: boolean;
}

const Sidebar = ({fade}: Props) => 
{
    return(
        <div className={`Sidebar ${fade ? "fade-in-sidebar" : ""}`}>
            <NavLink to="/">
                <img className='sidebar-profile-foto' src={Profile}/>
                <p className="sidebar-Profile-Text"><strong>Zakaria Tahiri</strong></p>
            </NavLink>
            <div className="searchBar">
                <input className="search" type="text" placeholder='Search'/>
            </div>
            <div className="icons8-sidebar">
                <a target="_blank" href="https://icons8.com/icon/RejqnVMqk7VX/icons8">Icons8</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </div>
    );
}
export default Sidebar;