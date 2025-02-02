import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsW100Filled'

      short_name='Payments'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M128-232v-386h28v358h558v28H128Zm108-108v-396h596v396H236Zm88-28q0-24.75-17.62-42.38Q288.75-428 264-428v60h60Zm420 0h60v-60q-25 0-42.5 17.62Q744-392.75 744-368ZM534-470q29 0 48.5-19.5T602-538q0-29-19.5-48.5T534-606q-29 0-48.5 19.5T466-538q0 29 19.5 48.5T534-470ZM264-648q24.75 0 42.38-17.63Q324-683.25 324-708h-60v60Zm540 0v-60h-60q0 25 17.63 42.5Q779.25-648 804-648Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100Filled.displayName = 'OnesyIconMaterialPaymentsW100Filled';

export default IconMaterialPaymentsW100Filled;
