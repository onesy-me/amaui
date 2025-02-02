import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveFilled'

      short_name='Hive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M651-500h134l46-81q11-18 11-39t-11-39l-23-40q-11-19-29.5-30T738-740h-87l-68 120 68 120ZM413-360h134l68-120-68-120H413l-68 120 68 120Zm0-280h134l68-120-45-79q-11-19-29.5-30T500-880h-40q-22 0-40.5 11T390-839l-45 79 68 120Zm-39 20-65-120h-87q-22 0-40.5 11T152-699l-23 40q-11 18-11 39t11 39l46 81h134l65-120Zm0 280-65-120H175l-46 81q-11 18-11 39t11 39l23 40q11 19 29.5 30t40.5 11h87l65-120Zm39 20-68 120 49 81q11 18 29 28.5T462-80h38q22 0 40.5-11t29.5-30l45-79-68-120H413Zm238 100h87q22 0 40.5-11t29.5-30l23-40q11-18 11-39t-11-39l-46-81H651l-68 120 68 120Z"/>
    </Icon>
  );
});

IconMaterialHiveFilled.displayName = 'OnesyIconMaterialHiveFilled';

export default IconMaterialHiveFilled;
