import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleBuddhist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhist'

      short_name='TempleBuddhist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-286q-52-13-86-55t-34-98q0-17 11.5-28.5T80-639q17 0 28.5 11.5T120-599q0 32 23.5 55.5T199-520h41v-86q-52-13-86-55t-34-98q0-17 11.5-28.5T160-799q17 0 28.5 11.5T200-759q0 32 23.5 55.5T279-680h21l116-155q12-16 29-24t35-8q18 0 35 8t29 24l116 155h21q32 0 55.5-23.5T760-759q0-17 11.5-28.5T800-799q17 0 28.5 11.5T840-759q0 56-34 98t-86 55v86h41q32 0 55.5-23.5T840-599q0-17 11.5-28.5T880-639q17 0 28.5 11.5T920-599q0 56-34 98t-86 55v286q0 33-23.5 56.5T720-80H560q-17 0-28.5-11.5T520-120v-120q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v120q0 17-11.5 28.5T400-80H240q-33 0-56.5-23.5T160-160Zm240-520h160l-80-107-80 107Zm-80 160h320v-80H320v80Zm-80 360h120v-80q0-50 35-85t85-35q50 0 85 35t35 85v80h120v-280H240v280Zm240-280Zm0-240Zm0 160Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhist.displayName = 'OnesyIconMaterialTempleBuddhist';

export default IconMaterialTempleBuddhist;
