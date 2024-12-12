import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrophy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Trophy'

      short_name='Trophy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-120h160v-80h400v80h160v120q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/>
    </Icon>
  );
});

IconMaterialTrophy.displayName = 'OnesyIconMaterialTrophy';

export default IconMaterialTrophy;
