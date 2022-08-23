import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTwoTone'
      short_name='Aod'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M17,1.01L7,1C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1.01,17,1.01z M17,21H7v-1h10V21z M17,18H7V6h10V18z M17,4H7V3h10V4z M8,10h8v1.5H8V10z M9,13h6v1.5H9V13z"/></g><path d="M7,21h10v-1H7V21z M7,3v1h10V3H7z" opacity=".3"/></g></g>
    </Icon>
  );
});

IconMaterialAodTwoTone.displayName = 'AmauiIconMaterialAodTwoTone';

export default IconMaterialAodTwoTone;
