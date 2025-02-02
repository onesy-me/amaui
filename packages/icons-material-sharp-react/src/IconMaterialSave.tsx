import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSave = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Save'

      short_name='Save'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-680v560H120v-720h560l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
    </Icon>
  );
});

IconMaterialSave.displayName = 'OnesyIconMaterialSave';

export default IconMaterialSave;
