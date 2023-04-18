import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const formatSpots = () => {
    if (!props.spots) {
      return `no spots remaining`;
    }
    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }
    return `${props.spots} spots remaining`;
  };

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  });

  const spotsInfo = formatSpots();
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsInfo}</h3>
    </li>
  );
}