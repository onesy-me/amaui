import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVignetteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteW100'

      short_name='Vignette'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm320-106q88 0 151-40t63-94q0-54-63-94t-151-40q-88 0-151 40t-63 94q0 54 63 94t151 40Zm0-28q-75 0-130.5-31.5T294-480q0-43 55.5-74.5T480-586q75 0 130.5 31.5T666-480q0 43-55.5 74.5T480-374Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100.displayName = 'OnesyIconMaterialVignetteW100';

export default IconMaterialVignetteW100;
