//@flow

import React from 'react';

type PropsT = {
  iconName: string,
  width: number,
  height: number
};

export default (props: PropsT) => {
  const styles = {width: props.width, height: props.height};

  return (
    <svg style={styles}>
      <use xlinkHref={props.iconName} />
    </svg>
  );
};