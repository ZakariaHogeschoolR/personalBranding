import Sidebar from '../Layout/Sidebar';
import Footer from '../Layout/Footer';
import { Outlet } from 'react-router-dom';
const ActivityLayout = () => 
{
    return(
        <>
            <Sidebar fade={false}/>
            <Outlet/>
            <Footer fade={false}/>
        </>
    );
}
export default ActivityLayout;