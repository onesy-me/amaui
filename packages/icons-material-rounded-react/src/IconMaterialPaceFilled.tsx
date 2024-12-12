import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaceFilled'

      short_name='Pace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q84 0 156.5 31.5T763-763q54 54 85.5 126.5T880-480q0 10-.5 19.5T878-442q-2 17-14.5 26t-29.5 6q-17-3-27-17t-8-31q0-5 .5-11t.5-11q0-67-24.5-125T707-707q-44-44-102-68.5T480-800q-134 0-227 93t-93 227q0 134 93 227t227 93q45 0 86.5-11.5T645-206q14-8 30.5-6t25.5 16q10 14 6.5 30.5T690-140q-47 29-99.5 44.5T480-80Zm290-160q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240ZM520-496l120 120q11 11 11 28t-11 28q-11 11-28 11t-28-11L452-452q-6-6-9-13.5t-3-15.5v-159q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v144Z"/>
    </Icon>
  );
});

IconMaterialPaceFilled.displayName = 'OnesyIconMaterialPaceFilled';

export default IconMaterialPaceFilled;
