import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2Filled'

      short_name='FormatH2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-160q0-33 23.5-56.5T600-520h160v-80H520v-80h240q33 0 56.5 23.5T840-600v80q0 33-23.5 56.5T760-440H600v80h240v80H520Z"/>
    </Icon>
  );
});

IconMaterialFormatH2Filled.displayName = 'OnesyIconMaterialFormatH2Filled';

export default IconMaterialFormatH2Filled;
