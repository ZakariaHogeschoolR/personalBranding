import Footer from '../Layout/Footer';
import Sidebar from '../Layout/Sidebar';
import Render from '../Rendering/RenderCard';
import '../Styles/TimeLine.css';

type Activity = {
    Id: Number;
    Name: string;
    Function: string;
    Date: string;
    Category: string;
}

const ActivitiesArray: Activity[] =
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
const TimeLine = () => {
    return(
        <>
            <Sidebar fade={true}/>
                <div className='Content-Cards'>
                    <Render Activities={ActivitiesArray}/>
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
            <Footer fade={true}/>
        </>
    );
}
export default TimeLine;