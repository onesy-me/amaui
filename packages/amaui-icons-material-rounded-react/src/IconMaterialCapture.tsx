import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCapture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Capture'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm0-80h640V336H160v480Zm120-80h400q17 0 28.5-11.5T720 696V456q0-17-11.5-28.5T680 416H280q-17 0-28.5 11.5T240 456v240q0 17 11.5 28.5T280 736Z"/>
    </Icon>
  );
});

IconMaterialCapture.displayName = 'AmauiIconMaterialCapture';

export default IconMaterialCapture;
