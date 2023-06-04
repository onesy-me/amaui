import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabled'

      short_name='DomainDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.15-2-2V9h-8.15L10 7.15V5H7.85l-2-2H10q.825 0 1.413.587Q12 4.175 12 5v2h8q.825 0 1.413.587Q22 8.175 22 9ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V4.8l-.6-.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.687.287-.413.013-.713-.262L18.15 21Zm0-2h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm4 8h2v-2H8Zm0-4h2v-2H8Zm4 4h4.15l-2-2H12Zm6-6h-2v-2h2Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabled.displayName = 'AmauiIconMaterialDomainDisabled';

export default IconMaterialDomainDisabled;
