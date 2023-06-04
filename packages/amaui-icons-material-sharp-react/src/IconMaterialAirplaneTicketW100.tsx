import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketW100'

      short_name='AirplaneTicket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.95 15.35 8.65-2.3q.325-.075.525-.338.2-.262.125-.562-.075-.3-.362-.412-.288-.113-.588-.038l-2.55.7-4-3.75-.95.2 2.4 4.2-2.85.7-1.25-.95-.5.15ZM3.3 18.7v-3.65q.9-.425 1.45-1.238Q5.3 13 5.3 12t-.55-1.812Q4.2 9.375 3.3 8.95V5.3h17.4v13.4ZM4 18h16V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100.displayName = 'AmauiIconMaterialAirplaneTicketW100';

export default IconMaterialAirplaneTicketW100;
