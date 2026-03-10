import Render from '../Rendering/Render';
import Opleiding from '../common/Opleiding';
import '../Styles/Home.css';

type Activity = {
    Id: Number;
    Name: string;
    Function: string;
    Date: string;
    Category: string;
    type: string;
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
            type: "Activity"
        },
        {
            Id: 2,
            Name:"Full-Stack Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 3,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 4,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 5,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 6,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 7,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 8,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 9,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 10,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 11,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 12,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 13,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 14,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 15,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Activity"
        },
        {
            Id: 16,
            Name:"Software Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 17,
            Name:"Full-Stack Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 18,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 19,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 20,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 21,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 22,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 23,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 24,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 25,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 26,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 27,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 28,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 29,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "InProgress"
        },
        {
            Id: 30,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 31,
            Name:"Software Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 32,
            Name:"Full-Stack Developer",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 33,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 34,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 35,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 36,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 37,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 38,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 39,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 40,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 41,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 42,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 43,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 44,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
        },
        {
            Id: 45,
            Name:"Lorem Ipsum",
            Function:"Wat is Lorem Ipsum?",
            Date:"10-12-2023",
            Category:"Lorem",
            type: "Completed"
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
                            <Render Activities = {Activities.filter(activity => activity.type == "Activity")} />
                        </div>
                    </div>
                    <p className="Projects" ><em>Projects</em></p>
                    <div className="Container-projects"> 
                        <div className="ProjectsItems-First">
                            <div className='HeaderInProgress'>
                                <p className="InProgress"><em>In Progress</em></p>
                            </div>
                            <Render Activities = {Activities.filter(activity => activity.type == "InProgress")} />
                        </div>
                        <div className="ProjectsItems-Second">
                            <div className='HeaderCompleted'>
                                <p className="Completed"><em>Completed</em></p>
                            </div>
                            <Render Activities = {Activities.filter(activity => activity.type == "Completed")} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;