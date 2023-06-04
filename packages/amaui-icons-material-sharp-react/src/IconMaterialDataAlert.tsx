import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataAlert'

      short_name='DataAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 896v-80h480v80H120Zm520-280q-83 0-141.5-58.5T440 416q0-83 58.5-141.5T640 216q83 0 141.5 58.5T840 416q0 83-58.5 141.5T640 616Zm-520-40v-80h252q7 22 16 42t22 38H120Zm0 160v-80h376q23 14 49 23.5t55 13.5v43H120Zm500-280h40V296h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDataAlert.displayName = 'AmauiIconMaterialDataAlert';

export default IconMaterialDataAlert;
