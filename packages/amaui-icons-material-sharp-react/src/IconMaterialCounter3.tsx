import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter3'

      short_name='Counter3'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360 776h240V616l-40-40 40-40V376H360v80h160v80h-80v80h80v80H360v80Z"/>
    </Icon>
  );
});

IconMaterialCounter3.displayName = 'AmauiIconMaterialCounter3';

export default IconMaterialCounter3;
