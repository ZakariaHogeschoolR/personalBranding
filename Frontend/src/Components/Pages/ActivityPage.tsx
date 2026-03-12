// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../Styles/ActivityPage.css';
import Stars from '../common/stars';
import { useParams } from 'react-router-dom';
import reposData from "../../data/repos.json";

type Repo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  has_pull_requests: boolean;
  pull_request_creation_policy: string;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  type: "Activity" | "Project";
  status: "Completed" | "InProgress";
};

// Tell TS the type of the imported JSON
const repos: Repo[] = reposData as Repo[];

const ActivityPage = () => {
    // const { id } = useParams<{ id: string }>();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams<{ id: string }>();
    const repo = repos.filter(rep => String(rep.id) == id);
    function dateString(date: string) :string[]
    {
        const dateSplitZ = date.split("Z");
        const dateSplitT = dateSplitZ[0].split("T");
        return dateSplitT;
    }
    const created_at  = dateString(repo[0].created_at);
    const updated_at = dateString(repo[0].updated_at);
    const pushed_at = dateString(repo[0].pushed_at);
    return (
        <div className="main-content-display">
            <div className='Content'>
                <Stars num={40}/>
                <div className="Type">{repo[0].type.toUpperCase()}</div>
                <div className="Id"><span className="star">☆</span> #{id}</div>
                <div className="date-time">{created_at[0]}</div>
                <div className="Title"><em>{repo[0].name.toUpperCase()}</em></div>
                <div className="Function-top">{repo[0].description}</div>
                <section className="border-line"></section>
                <div className="Tag1">{repo[0].language?.toUpperCase()}</div>
                <div className="Tag2">#{repo[0].default_branch.toUpperCase()}</div>
                <div className="Tag3">{created_at[0].split("-")[0]}</div>
            </div>
            <div className='second-layer'>
                <div className="Category"><span className='category-label'>UPDATED</span><br/>{updated_at[0]} {updated_at[1]}</div>
                <div className='Date-display'><span className='date-label'>TIME</span><br/>{pushed_at[1]}</div>
                <div className="Function-display"><span className='function-label'>CREATED</span><br/>{created_at[0]}</div>
            </div>
            <div className='third-layer'>
                <div className="About"><p className='about-tile'><em>About this {repo[0].type}</em></p><section className='border-line-second-layer'>&nbsp;</section>{repo[0].description}</div>
                <div className='side-column'>
                    <div className='Status'><span className='status-label'>STATUS</span><br/>{repo[0].status}</div>
                    <div className="Role"><span className='role-label'>ROLE</span><br/>Software Developer</div>
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;