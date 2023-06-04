import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardMembership = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembership'

      short_name='CardMembership'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13v2h16v-2Zm5.45 8.275q-.5.25-.975-.038Q8 20.95 8 20.375V17H4q-.825 0-1.412-.587Q2 15.825 2 15V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v11q0 .825-.587 1.413Q20.825 17 20 17h-4v3.375q0 .575-.475.862-.475.288-.975.038L12 20ZM4 10h16V4H4Zm0 5V4v11Z"/>
    </Icon>
  );
});

IconMaterialCardMembership.displayName = 'AmauiIconMaterialCardMembership';

export default IconMaterialCardMembership;
