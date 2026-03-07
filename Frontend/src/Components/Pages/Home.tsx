import Render from '../Rendering/Render';
import Opleiding from '../common/Opleiding';
import '../Styles/Home.css';

type Activity = {
    Id: Number;
    Name: string;
    Function: string;
    Date: string;
    Category: string;
}

const Home = () => {
    const Activities: Activity[] =
    [
        {
            Id: 1,
            Name:"Software Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 2,
            Name:"Full-Stack Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 3,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 4,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 5,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 6,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 7,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 8,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 9,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 10,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 11,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 12,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 13,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 14,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
        {
            Id: 15,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
        },
    ];
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
                            <Render Activities = {Activities} />
                        </div>
                    </div>
                    <p className="Projects" ><em>Projects</em></p>
                    <div className="Container-projects"> 
                        <div className="ProjectsItems-First">
                            <div className='HeaderInProgress'>
                                <p className="InProgress"><em>In Progress</em></p>
                            </div>
                            <Render Activities = {Activities} />
                        </div>
                        <div className="ProjectsItems-Second">
                            <div className='HeaderCompleted'>
                                <p className="Completed"><em>Completed</em></p>
                            </div>
                            <Render Activities = {Activities} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;