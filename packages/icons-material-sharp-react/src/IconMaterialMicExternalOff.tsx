import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOff'

      short_name='MicExternalOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-694 214-860q14-11 31-15.5t35-4.5q50 0 85 34.5t35 85.5q0 18-5.5 34.5T380-694Zm420 420-80-80v-446H560v286l-80-80v-286h320v606ZM240-80v-160h-40l-40-400h46L28-820l56-56L876-84l-56 56-260-260v208H240Zm32-240h16l22-218-24-22h-38l24 240Zm208 160v-208l-98-98-22 226h-40v80h160ZM272-560h-24 62-38Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOff.displayName = 'OnesyIconMaterialMicExternalOff';

export default IconMaterialMicExternalOff;
