import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrackChanges = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChanges'

      short_name='TrackChanges'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q17 0 28.5 11.5T520-840v291q18 11 29 28.5t11 40.5q0 33-23.5 56.5T480-400q-33 0-56.5-23.5T400-480q0-23 11-41t29-28v-86q-52 14-86 56.5T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-26-7.5-48T612-570q-10-14-9-31t12-28q12-12 28.5-12t26.5 14q23 31 36.5 68t13.5 79q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-90 57-156.5T440-717v-81q-119 15-199.5 105T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-58-19-109.5T727-683q-11-13-11-30t12-29q12-12 28.5-11.5T784-740q45 53 70.5 119T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTrackChanges.displayName = 'OnesyIconMaterialTrackChanges';

export default IconMaterialTrackChanges;
