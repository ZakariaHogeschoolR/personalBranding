import Render from '../Rendering/Render';
import Opleiding from '../common/Opleiding';
import '../Styles/Home.css';
import reposData from "../../data/repos.json";

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

// Tell TS the type of the imported JSON
const repos: Repo[] = reposData as Repo[];


const Home = () => {
    
    return (
        <main className="Main">
            <Opleiding/>
            <div className="main-container">  
                <div className='activity-project'>
                    <p className="Activities-Projects"><span className="activities-projects-head"><span className="star">☆</span> 02</span> <span className="Activities-Projects-txt">ACTIVITY & PROJECTS</span></p>
                    <section className='dashing-borderline-activity-projects'></section>
                    <p className="Activity" ><em>Recent Activity</em></p>
                    <div className="Container-activities">
                        <div className="Activities">
                            <Render Repository = {repos.filter(repo => repo.type == "Activity")} />
                        </div>
                    </div>
                    <p className="Projects" ><em>Projects</em></p>
                    <div className="Container-projects"> 
                        <div className="ProjectsItems-First">
                            <div className='HeaderInProgress'>
                                <p className="InProgress"><em>In Progress</em></p>
                            </div>
                            <Render Repository = {repos.filter(repo => repo.status == "InProgress" && repo.type == "Project")} />
                        </div>
                        <div className="ProjectsItems-Second">
                            <div className='HeaderCompleted'>
                                <p className="Completed"><em>Completed</em></p>
                            </div>
                            <Render Repository = {repos.filter(repo => repo.status == "Completed" && repo.type == "Project")} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;