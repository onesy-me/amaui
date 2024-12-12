import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstantMix = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstantMix'

      short_name='InstantMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-17 0-28.5-11.5T200-200v-240h-40q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h160q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440h-40v240q0 17-11.5 28.5T240-160Zm0-440q-17 0-28.5-11.5T200-640v-120q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v120q0 17-11.5 28.5T240-600Zm160 0q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h40v-80q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v80h40q17 0 28.5 11.5T600-640q0 17-11.5 28.5T560-600H400Zm80 440q-17 0-28.5-11.5T440-200v-280q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480v280q0 17-11.5 28.5T480-160Zm240 0q-17 0-28.5-11.5T680-200v-80h-40q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h160q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280h-40v80q0 17-11.5 28.5T720-160Zm0-280q-17 0-28.5-11.5T680-480v-280q0-17 11.5-28.5T720-800q17 0 28.5 11.5T760-760v280q0 17-11.5 28.5T720-440Z"/>
    </Icon>
  );
});

IconMaterialInstantMix.displayName = 'OnesyIconMaterialInstantMix';

export default IconMaterialInstantMix;
