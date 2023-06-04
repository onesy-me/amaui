import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameSource = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameSource'

      short_name='FrameSource'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V696h80v160h160v80H120Zm480 0v-80h160V696h80v240H600ZM344 720 200 576l144-144 56 57-87 87 87 87-56 57Zm272 0-56-57 87-87-87-87 56-57 144 144-144 144ZM120 456V216h240v80H200v160h-80Zm640 0V296H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialFrameSource.displayName = 'AmauiIconMaterialFrameSource';

export default IconMaterialFrameSource;
