import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>{props.repos.map((repo, index) => <RepoListEntry item={repo} key={index} number={index}/>)}</ul>
  </div>
)

export default RepoList;