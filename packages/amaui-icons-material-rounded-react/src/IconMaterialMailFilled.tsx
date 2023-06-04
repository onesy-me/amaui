import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailFilled'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7.175q.125 0 .262-.038.138-.037.263-.112L19.6 8.25q.2-.125.3-.312.1-.188.1-.413 0-.5-.425-.75T18.7 6.8L12 11 5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437.1.188.3.288l7.075 4.425q.125.075.263.112.137.038.262.038Z"/>
    </Icon>
  );
});

IconMaterialMailFilled.displayName = 'AmauiIconMaterialMailFilled';

export default IconMaterialMailFilled;
