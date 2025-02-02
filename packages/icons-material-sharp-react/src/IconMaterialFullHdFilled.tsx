import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullHdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullHdFilled'

      short_name='FullHd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-360h60v-80h60v80h60v-240h-60v100h-60v-100h-60v240Zm220 0h150l30-30v-180l-30-30H600v240Zm60-60v-120h60v120h-60Zm-480 60h60v-80h80v-60h-80v-40h100v-60H180v240ZM40-160v-640h880v640H40Z"/>
    </Icon>
  );
});

IconMaterialFullHdFilled.displayName = 'OnesyIconMaterialFullHdFilled';

export default IconMaterialFullHdFilled;
