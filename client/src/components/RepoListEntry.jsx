import React from 'react';

const RepoListEntry = (props) => (
  <li key="{props.item.id}"><a href="{props.item.url}">{props.item.id} - {props.item.repoName}</a></li>
)

export default RepoListEntry;