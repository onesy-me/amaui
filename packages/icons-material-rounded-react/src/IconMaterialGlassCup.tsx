import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlassCup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCup'

      short_name='GlassCup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M279-80q-31 0-53.5-20T200-151l-70-640q-4-35 19.5-62t59.5-27h542q36 0 59.5 27t19.5 62l-70 640q-3 31-25.5 51T681-80H279Zm-8-160 9 80h400l9-80H271Zm-8-80h435l52-480H210l53 480Zm8 160h418-418Z"/>
    </Icon>
  );
});

IconMaterialGlassCup.displayName = 'OnesyIconMaterialGlassCup';

export default IconMaterialGlassCup;
