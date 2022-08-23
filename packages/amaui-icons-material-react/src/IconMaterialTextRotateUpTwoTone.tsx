import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotateUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpTwoTone'
      short_name='TextRotateUp'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M18 4l-3 3h2v13h2V7h2l-3-3zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1l-2.2-.9zM4.98 13L10 11.13v3.74L4.98 13z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpTwoTone.displayName = 'AmauiIconMaterialTextRotateUpTwoTone';

export default IconMaterialTextRotateUpTwoTone;
