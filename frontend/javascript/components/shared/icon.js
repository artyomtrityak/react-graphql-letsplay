/* @flow */

import React from 'react';

type PropsT = {
  iconName: string;
  width: number;
  height: number;
  className?: string;
  onClick?: (x: Event) => void;
};

export default (props: PropsT) => {
  const styles = {width: props.width, height: props.height};

  return (
    <svg style={styles} className={props.className} onClick={(event) => {
      props.onClick && props.onClick(event);
    }}>
      <use xlinkHref={props.iconName} />
    </svg>
  );
};