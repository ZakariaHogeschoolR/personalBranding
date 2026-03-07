import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../Styles/ActivityPage.css';
import Stars from '../common/stars';

const ActivityPage = () => {
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="main-content-display">
            <div className='Content'>
                <Stars/>
                <div className="Type">ACTIVITY</div>
                <div className="Id"><span className="star">☆</span> #001</div>
                <div className="date-time">10-12-2023</div>
                <div className="Title"><em>Software Developer</em></div>
                <div className="Function-top">WAT IS LOREM IPSUM?</div>
                <section className="border-line"></section>
                <div className="Tag1">LOREM</div>
                <div className="Tag2">DEVELOPMENT</div>
                <div className="Tag3">2023</div>
            </div>
            <div className='second-layer'>
                <div className="Category"><span className='category-label'>CATEGORY</span><br/>Lorem</div>
                <div className='Date-display'><span className='date-label'>DATE</span><br/>10 December 2023</div>
                <div className="Function-display"><span className='function-label'>FUNCTION</span><br/>Wat is Lorem Ipsum</div>
            </div>
            <div className='third-layer'>
                <div className="About"><p className='about-tile'><em>About this activity</em></p><section className='border-line-second-layer'>&nbsp;</section>Add your description here. This is where you explain what this activity or project was about, what you learned, what technologies you used, and what the outcome was. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className='side-column'>
                    <div className='Status'><span className='status-label'>STATUS</span><br/>InProgress</div>
                    <div className="Role"><span className='role-label'>ROLE</span><br/>Software Developer</div>
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;