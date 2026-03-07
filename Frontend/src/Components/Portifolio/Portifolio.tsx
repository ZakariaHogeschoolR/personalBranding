import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom'; 
import Footer from '../Layout/Footer';
const Portifolio = () => 
{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}
export default Portifolio;