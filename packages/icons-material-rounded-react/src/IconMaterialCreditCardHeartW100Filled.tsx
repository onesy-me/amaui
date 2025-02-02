import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100Filled'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M697-184q-6 0-11-2t-10-7l-91-91q-11-11-15-22.5t-4-23.5q0-26 18-46t47-20q23 0 36 10.5t30 27.5q17-17 30-27.5t36-10.5q30 0 47.5 20t17.5 46q0 12-4.5 24T809-284l-91 91q-5 5-10 7t-11 2Zm-505-28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v158q0 6-4 10t-10 4q-6 0-10-4t-4-10v-68H160v76h377q11 0 14 11t-7 17q-49 35-78 90t-29 120q0 10 .5 19.5T440-246q2 14-6 24t-21 10H192Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100Filled.displayName = 'OnesyIconMaterialCreditCardHeartW100Filled';

export default IconMaterialCreditCardHeartW100Filled;
