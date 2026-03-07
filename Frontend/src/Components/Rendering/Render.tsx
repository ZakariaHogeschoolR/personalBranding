import '../Styles/Render.css';
import { NavLink, Navigate} from 'react-router-dom';
import Stars from '../common/stars';

type Activity = {
    Id: Number;
    Name: string;
    Function: string;
    Date: string;
    Category: string;
}

type RenderProps = {
    Activities: Activity[];
};

const Render = ({Activities}: RenderProps) =>{
    return (
        <section className="grider">
            {Activities.map((activity: Activity) => (
                <NavLink to={`/Activity/${activity.Id}`}>
                    <div className="RenderActivity">
                        <div className='renderActivityAgain'>
                            <Stars/>
                            <p className="Name">{activity.Name}</p>
                            <p className="Function">{activity.Function}</p>
                            <p className="Date">{activity.Date}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </section>
    );
} 
export default Render; 