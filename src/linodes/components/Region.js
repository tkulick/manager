import React, { PropTypes } from 'react';

import { flags } from '~/assets';


export default function Region(props) {
  const { obj } = props;

  return (
    <span className="region-style">
      <img
        src={flags[obj.region.country]}
        height="15"
        width="20"
        role="presentation"
      />
      <span>{obj.region.id}</span>
    </span>
  );
}

Region.propTypes = {
  obj: PropTypes.object,
};
