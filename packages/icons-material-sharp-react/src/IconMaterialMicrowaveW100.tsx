import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicrowaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveW100'

      short_name='Microwave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h452v-480H160v480Zm480 0h160v-480H640v480Zm56-376h48v-48h-48v48Zm24 164q11 0 19.5-8.5T748-480q0-11-8.5-19.5T720-508q-11 0-19.5 8.5T692-480q0 11 8.5 19.5T720-452Zm0 160q11 0 19.5-8.5T748-320q0-11-8.5-19.5T720-348q-11 0-19.5 8.5T692-320q0 11 8.5 19.5T720-292Zm-284-54q-18 0-34-8.5T375-370q-11-7-19.5-11.5T336-386q-10 0-19.5 4T299-372l-21-20q11-8 26-15t32-7q18 0 32.5 8t25.5 15q11 8 21.5 12.5T436-374q10 0 19.5-4t17.5-10l21 20q-11 8-26 15t-32 7Zm0-200q-18 0-34-8.5T375-570q-11-7-19.5-11.5T336-586q-10 0-19.5 4T299-572l-21-20q11-8 26-15t32-7q18 0 32.5 8t25.5 15q11 8 21.5 12.5T436-574q10 0 19.5-4t17.5-10l21 20q-11 8-26 15t-32 7Zm204 306v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveW100.displayName = 'OnesyIconMaterialMicrowaveW100';

export default IconMaterialMicrowaveW100;
