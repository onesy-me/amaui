import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLink'

      short_name='AddLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4Zm-3-4v-2h8v2Zm14-1h-2q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.462Q22 9.925 22 12Zm-5 8v-3h-3v-2h3v-3h2v3h3v2h-3v3Z"/>
    </Icon>
  );
});

IconMaterialAddLink.displayName = 'AmauiIconMaterialAddLink';

export default IconMaterialAddLink;
