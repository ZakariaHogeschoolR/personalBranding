import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom'; 
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