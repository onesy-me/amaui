import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsW100'

      short_name='Payments'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-470q-29 0-48.5-19.5T466-538q0-29 19.5-48.5T534-606q29 0 48.5 19.5T602-538q0 29-19.5 48.5T534-470ZM236-340v-396h596v396H236Zm88-28h420q0-25 17.63-42.5Q779.25-428 804-428v-220q-25 0-42.5-17.63Q744-683.25 744-708H324q0 25-17.62 42.5Q288.75-648 264-648v220q25 0 42.5 17.62Q324-392.75 324-368ZM128-232v-386h28v358h558v28H128Zm136-136v-340 340Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100.displayName = 'OnesyIconMaterialPaymentsW100';

export default IconMaterialPaymentsW100;
