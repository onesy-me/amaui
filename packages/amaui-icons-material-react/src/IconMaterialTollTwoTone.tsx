import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollTwoTone'
      short_name='Toll'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity=".3"/><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/>
    </Icon>
  );
});

IconMaterialTollTwoTone.displayName = 'AmauiIconMaterialTollTwoTone';

export default IconMaterialTollTwoTone;
