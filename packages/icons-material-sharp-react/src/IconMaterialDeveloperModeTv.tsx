import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeTv'

      short_name='DeveloperModeTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680v-160h800v160h-80v-80H160v80H80Zm240 560v-80H80v-160h80v80h640v-80h80v160H640v80H320Zm160-400Zm-288 0 104-104-56-56L80-520l160 160 56-56-104-104Zm576 0L664-416l56 56 160-160-160-160-56 56 104 104Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeTv.displayName = 'OnesyIconMaterialDeveloperModeTv';

export default IconMaterialDeveloperModeTv;
