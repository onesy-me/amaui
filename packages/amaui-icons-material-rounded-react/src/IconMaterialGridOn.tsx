import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOn'

      short_name='GridOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm0-6v4h4v-4Zm6 0v4h4v-4Zm6 4h4v-4h-4ZM4 14h4v-4H4Zm6 0h4v-4h-4Zm6 0h4v-4h-4ZM8 4H4v4h4Zm2 4h4V4h-4Zm6 0h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialGridOn.displayName = 'AmauiIconMaterialGridOn';

export default IconMaterialGridOn;
