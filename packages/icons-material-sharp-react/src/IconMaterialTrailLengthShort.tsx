import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthShort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShort'

      short_name='TrailLengthShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280q-73 0-127.5-45.5T404-440H160v-80h244q5-23 13.5-43t22.5-37H240v-80h360q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-320 80v-80h120v80H280Zm320-200Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShort.displayName = 'OnesyIconMaterialTrailLengthShort';

export default IconMaterialTrailLengthShort;
