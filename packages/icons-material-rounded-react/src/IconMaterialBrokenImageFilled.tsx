import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrokenImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageFilled'

      short_name='BrokenImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-264l92 92q12 12 28 12t28-12l132-132 132 132q12 12 28 12t28-12l132-132 120 120v184q0 33-23.5 56.5T760-120H200Zm0-720h560q33 0 56.5 23.5T840-760v263l-92-92q-12-12-28-12t-28 12L560-457 428-589q-12-12-28-12t-28 12L240-457 120-577v-183q0-33 23.5-56.5T200-840Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageFilled.displayName = 'OnesyIconMaterialBrokenImageFilled';

export default IconMaterialBrokenImageFilled;
