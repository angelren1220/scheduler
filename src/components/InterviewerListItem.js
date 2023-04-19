import React from "react";

import "components/InterviewerListItem.scss"

import classNames from "classnames";

export default function InterviewerListItem(props) {

  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
  });

  const nameDisplay = props.selected ? props.name : "";

  return (
    <li className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        onClick={() => props.setInterviewer(props.id)}
      />
      {nameDisplay}
    </li>
  );
}