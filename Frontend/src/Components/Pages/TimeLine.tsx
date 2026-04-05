import Navbar from '../Navbar/Navbar';
import Render from '../Rendering/RenderCard';
import '../Styles/TimeLine.css';
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

const repos: Repo[] = reposData as Repo[];

const TimeLine = () => {
    return(
        <>
            <Navbar/>
            <div className='Content-Cards'>
                <Render Repos = {repos} />
            </div>
            {/* <!-- Compass rose — One Piece nautical motif --> */}
            <svg className="compass-rose" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* <!-- Outer ring --> */}
                <circle cx="45" cy="45" r="42" stroke="#c8b898" stroke-width="1"/>
                <circle cx="45" cy="45" r="36" stroke="#c8b898" stroke-width="0.5" stroke-dasharray="3 4"/>
                {/* <!-- Cardinal points — N S E W --> */}
                <polygon points="45,4 49,36 45,44 41,36" fill="#c8b898" opacity="0.9"/>
                <polygon points="45,86 49,54 45,46 41,54" fill="#c8b898" opacity="0.5"/>
                <polygon points="4,45 36,41 44,45 36,49" fill="#c8b898" opacity="0.7"/>
                <polygon points="86,45 54,41 46,45 54,49" fill="#c8b898" opacity="0.7"/>
                {/* <!-- Intercardinal points --> */}
                <polygon points="45,4 47,30 45,44 43,30" fill="#9ab4c4" opacity="0.4" transform="rotate(45 45 45)"/>
                <polygon points="45,4 47,30 45,44 43,30" fill="#9ab4c4" opacity="0.4" transform="rotate(135 45 45)"/>
                {/* <!-- Centre --> */}
                <circle cx="45" cy="45" r="4" stroke="#c8b898" stroke-width="1" fill="none"/>
                <circle cx="45" cy="45" r="1.5" fill="#c8b898" opacity="0.8"/>
                {/* <!-- Degree marks --> */}
                <circle cx="45" cy="7"  r="1" fill="#c8b898" opacity="0.5"/>
                <circle cx="45" cy="83" r="1" fill="#c8b898" opacity="0.5"/>
                <circle cx="7"  cy="45" r="1" fill="#c8b898" opacity="0.5"/>
                <circle cx="83" cy="45" r="1" fill="#c8b898" opacity="0.5"/>
            </svg>
        </>
    );
}
export default TimeLine;