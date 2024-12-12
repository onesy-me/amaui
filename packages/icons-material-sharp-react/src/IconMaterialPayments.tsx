import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPayments = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Payments'

      short_name='Payments'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM200-320v-480h720v480H200Zm160-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400ZM40-160v-520h80v440h680v80H40Zm240-240v-320 320Z"/>
    </Icon>
  );
});

IconMaterialPayments.displayName = 'OnesyIconMaterialPayments';

export default IconMaterialPayments;
