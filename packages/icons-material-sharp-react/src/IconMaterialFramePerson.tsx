import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePerson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePerson'

      short_name='FramePerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h80v160h160v80H80Zm0-560v-240h240v80H160v160H80ZM640-80v-80h160v-160h80v240H640Zm160-560v-160H640v-80h240v240h-80ZM480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM240-240v-76q0-21 10.5-39.5T279-385q46-27 96.5-41T480-440q54 0 104.5 14t96.5 41q18 11 28.5 29.5T720-316v76H240Zm240-120q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-240Zm0 280h154-308 154Z"/>
    </Icon>
  );
});

IconMaterialFramePerson.displayName = 'OnesyIconMaterialFramePerson';

export default IconMaterialFramePerson;
