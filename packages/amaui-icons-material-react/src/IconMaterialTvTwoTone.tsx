import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvTwoTone'
      short_name='Tv'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5h18v12H3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
    </Icon>
  );
});

export default IconMaterialTvTwoTone;
