import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplaneTicketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketW100Filled'

      short_name='AirplaneTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m488-438-114 28-46-35q-1-1-9-2l-3 1q-5 2-6.5 6t.5 9l42 75q2 5 7 7t10 0l335-89q13-3 21-13.5t5-22.5q-3-12-14.5-16.5T692-492l-102 28-153-143q-3-3-7-4.5t-9-.5l-4 1q-9 2-13 10.5t1 16.5l83 146ZM192-212q-25 0-42.5-17.5T132-272v-69q0-8 3.5-15t10.5-11q30-19 48-48t18-65q0-36-18-65t-48-48q-7-4-10.5-11t-3.5-15v-69q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100Filled.displayName = 'OnesyIconMaterialAirplaneTicketW100Filled';

export default IconMaterialAirplaneTicketW100Filled;
