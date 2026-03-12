import '../Styles/Render.css';
import { NavLink } from 'react-router-dom';
import Stars from '../common/stars';

type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    fork: boolean;
    language: string | null;
    created_at: string;   // ISO date string
    updated_at: string;
    status?: "Completed" | "InProgress";
    type?: "Activity" | "Project";
};

type RenderProps = {
    Repository: Repo[];
};

const Render = ({Repository}: RenderProps) =>{
    function dateString(date: string) :string[]
    {
        const dateSplitZ = date.split("Z");
        const dateSplitT = dateSplitZ[0].split("T");
        return dateSplitT;
    }
    return (
        <section className="grider">
            {Repository.map((repo: Repo) => (
                <NavLink to={`/Activity/${repo.id}`}>
                    <div className="RenderActivity">
                        <div className='renderActivityAgain'>
                            <Stars num={10}/>
                            <p className="Name">{repo.name}</p>
                            <p className="Function"></p>
                            <p className="Date">{dateString(repo.created_at)[0]}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </section>
    );
} 
export default Render; 