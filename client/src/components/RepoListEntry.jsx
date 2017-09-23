import React from 'react';

const RepoListEntry = (props) => (
  <li><a href={props.item.url}>{props.number + 1} - {props.item.repoName}</a></li>
)

export default RepoListEntry;