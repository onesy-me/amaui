import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarTwoTone'
      short_name='ViewSidebar'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><g opacity=".3"><path d="M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z"/></g><g><path d="M2,4v16h20V4H2z M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z"/></g></g>
    </Icon>
  );
});

export default IconMaterialViewSidebarTwoTone;
