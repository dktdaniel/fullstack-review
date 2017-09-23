import React from 'react';

const RepoListEntry = (props) => (
  <li><a href="{props.item.url}">{props.item.repoName}</a></li>
)

export default RepoListEntry;