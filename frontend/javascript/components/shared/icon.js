//@flow

import React from 'react';

type PropsT = {
  iconName: string;
  width: number;
  height: number;
  className?: string;
  onClick?: Function;
};

export default (props: PropsT) => {
  const styles = {width: props.width, height: props.height};

  return (
    <svg style={styles} className={props.className} onClick={props.onClick}>
      <use xlinkHref={props.iconName} />
    </svg>
  );
};