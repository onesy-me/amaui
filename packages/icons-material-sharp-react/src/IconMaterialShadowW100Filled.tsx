import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShadowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowW100Filled'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h140v-160h556v556H668v140H132Zm168-168h500v-500H300v500Z"/>
    </Icon>
  );
});

IconMaterialShadowW100Filled.displayName = 'OnesyIconMaterialShadowW100Filled';

export default IconMaterialShadowW100Filled;
