import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColors'

      short_name='InvertColors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-133 0-226.5-92.5T160-436q0-66 25-122t69-100l226-222 226 222q44 44 69 100t25 122q0 131-93.5 223.5T480-120Zm0-80v-568L310-600q-35 33-52.5 74.5T240-436q0 97 70 166.5T480-200Z"/>
    </Icon>
  );
});

IconMaterialInvertColors.displayName = 'OnesyIconMaterialInvertColors';

export default IconMaterialInvertColors;
