import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardwareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareFilled'

      short_name='Hardware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120q-17 0-28.5-11.5T360-160v-280h240v280q0 17-11.5 28.5T560-120H400Zm-40-400v-120H208q-19 0-31-14t-8-33q13-68 67.5-110.5T360-840h200q17 0 28.5 11.5T600-800v80l102-102q8-8 19.5-13t23.5-5h15q17 0 28.5 11.5T800-800v240q0 17-11.5 28.5T760-520h-15q-12 0-23.5-5T702-538L600-640v120H360Z"/>
    </Icon>
  );
});

IconMaterialHardwareFilled.displayName = 'OnesyIconMaterialHardwareFilled';

export default IconMaterialHardwareFilled;
