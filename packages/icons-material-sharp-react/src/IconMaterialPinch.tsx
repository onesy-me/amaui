import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pinch'

      short_name='Pinch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-720v-98L142-580h98v60H40v-200h60v98l238-238h-98v-60h200v200h-60ZM543-40 304-280l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H543Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm-20 80Z"/>
    </Icon>
  );
});

IconMaterialPinch.displayName = 'OnesyIconMaterialPinch';

export default IconMaterialPinch;
