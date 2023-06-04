import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial23mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='23mp'

      short_name='23mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 11.5H11V10H8V9h3V5.5H6.5V7h3v1h-3Zm6.5 0h4.5v-6H13V7h3v1h-2v1h2v1h-3ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial23mp.displayName = 'AmauiIconMaterial23mp';

export default IconMaterial23mp;
