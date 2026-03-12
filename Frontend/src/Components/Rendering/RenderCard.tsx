import '../Styles/RenderCard.css';

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

type Prop = {
    Repos: Repo[];
}

const RenderCard = ({Repos}:Prop) =>
{
    const sortedRepos = Repos.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return(
        <>
            <div className="content-timeline">
                <p className='Time-Line'>TimeLine</p>
                <section className="Time-Line-Line">
                </section>
                {sortedRepos.map((Rep) => 
                    <div className="Activities-card">
                        <section className='point'></section>
                        <section className="vertical-Line"></section>
                        <div className="Activity-content">
                            <p>
                                <span className="Activity-Name">{Rep.name}</span><br/>
                                <span className="Activity-Function"></span><br/>
                                <span className="Activity-Date">{Rep.created_at}</span><br/>
                                <span className="Activity-Category">{Rep.language}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default RenderCard;
