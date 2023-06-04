import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial21mp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='21mp'

      short_name='21mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11.5H12V10H9V9h3V5.5H7.5V7h3v1h-3Zm7 0H16v-6h-3V7h1.5ZM3 21V3h18v18Zm2-2h14V5H5Zm1-.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial21mp.displayName = 'AmauiIconMaterial21mp';

export default IconMaterial21mp;
