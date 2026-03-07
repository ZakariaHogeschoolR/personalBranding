import { useEffect, useState } from "react";
import '../Styles/Opleiding.css';
import { format } from 'date-fns';
import Stars from './stars';

const Opleiding = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setDate(new Date());
        }, 1000); // update every second

        return () => clearInterval(interval);
     }, []);
    return (
        <>
            <div className="welkom-terug">
                <p className="txt-welkom"><span className="star">☆</span> <span className="greetings">Welkom!</span></p>
                <h1 className="portofolio-txt"><span className="my">My</span> <span className="portofolio-content"><em>Portofolio</em></span></h1>
                <p className="date-today">{format(date, 'dd/MMMM/yyyy')}<br/>{format(date, 'HH:mm:ss')}<p className="place"></p></p>
                <section className="borderline-greetings">&nbsp;<section className="second-borderline">&nbsp;</section></section>
            </div>
            <div className="Work-experience">
                <div className="experience">
                    <Stars/>
                    <p className="yrs">04</p>
                    <p className="experience-txt">YRS EXPERIENCE</p>
                </div>
                <div className="projects">
                    <Stars/>
                    <p className="projs">12</p>
                    <p className="projects-txt">PROJECTS</p>
                </div>
                <div className="first">
                    <Stars/>
                    <p className="firsts">03</p>
                    <p className="first-txt">INSTITUTION</p>
                </div>
                <div className="second"><Stars/><p className="seconds">&</p><p className="second-txt">IDEAS</p></div>
            </div>
            <div className="opleiding">
                <span className='p-tag'><span className="numbering"><span className="star">☆</span> 01</span> OPLEIDING</span><div className="dashing-borderline"></div>
            </div>
            <section className='Header'>
                <div className="sectionHeader">
                    <div className="Headersize1">
                        <Stars/>
                        <div className='Header1'>
                                <p className="hogeschool-rotterdam">Hogeschool Rotterdam</p>
                                <div className="hover1">
                                    <p className="hogeschool-rotterdam-header">Informatica</p>
                                    <p className="hogeschool-rotterdam-date">2023 → now</p>
                                </div>
                        </div>
                    </div>
                    <div className="Headersize2">
                        <Stars/>
                        <div className='Header2'>
                                <p className="techniek-college-rotterdam">Techniek College Rotterdam</p>
                                <div className="hover2">
                                    <p className="techniek-college-rotterdam-header">Applicatie en Media Ontwikkelaar</p>
                                    <p className="techniek-college-rotterdam-date">2019 → 2022</p>
                                </div>
                        </div>
                    </div>
                    <div className="Headersize3">
                        <Stars/>
                        <div className='Header3'>
                                <p className="zuiderpark-college" >Zuiderpark College</p>
                                <div className="hover3">
                                    <p className="zuiderpark-college-header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Economie en Ondernemen</p>
                                    <p className="zuiderpark-college-date">2015 → 2019</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Opleiding;