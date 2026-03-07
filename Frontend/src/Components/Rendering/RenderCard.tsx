import '../Styles/RenderCard.css';

type Activity = {
    Id: Number;
    Name: string;
    Function: string;
    Date: string;
    Category: string;
}

type Prop = {
    Activities: Activity[];
}

const RenderCard = ({Activities}:Prop) =>
{
    return(
        <>
            <div className="content-timeline">
                <p className='Time-Line'>TimeLine</p>
                <section className="Time-Line-Line">
                </section>
                {Activities.map((Act) => 
                    <div className="Activities-card">
                        <section className='point'></section>
                        <section className="vertical-Line"></section>
                        <div className="Activity-content">
                            <p>
                                <span className="Activity-Name">{Act.Name}</span><br/>
                                <span className="Activity-Function">{Act.Function}</span><br/>
                                <span className="Activity-Date">{Act.Date}</span><br/>
                                <span className="Activity-Category">{Act.Category}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default RenderCard;
