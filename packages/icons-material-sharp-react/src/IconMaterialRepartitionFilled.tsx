import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepartitionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionFilled'

      short_name='Repartition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-400v-80h560q33 0 56.5-23.5T760-560q0-33-23.5-56.5T680-640H233l64 63-57 57L80-680l160-160 57 56-64 64h447q66 0 113 47t47 113q0 66-47 113t-113 47H120Zm0 320v-240h720v240H120Zm80-80h133v-80H200v80Zm213 0h133v-80H413v80Zm214 0h133v-80H627v80Z"/>
    </Icon>
  );
});

IconMaterialRepartitionFilled.displayName = 'OnesyIconMaterialRepartitionFilled';

export default IconMaterialRepartitionFilled;
