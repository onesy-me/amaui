import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricScooterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterW100'

      short_name='ElectricScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 17.35q-.975 0-1.663-.687Q2.8 15.975 2.8 15q0-.975.687-1.663.688-.687 1.663-.687.75 0 1.45.487.7.488.9 1.513h6.3q.15-1.8 1.425-3.125Q16.5 10.2 18.2 10.05l-1.675-7.7H12.8v-.7h4.3l1.95 9.05h-.2q-1.8 0-3.075 1.275Q14.5 13.25 14.5 15.05v.3h-7q-.2 1.025-.9 1.513-.7.487-1.45.487Zm0-.7q.675 0 1.162-.488Q6.8 15.675 6.8 15q0-.675-.488-1.163-.487-.487-1.162-.487-.675 0-1.162.487Q3.5 14.325 3.5 15t.488 1.162q.487.488 1.162.488Zm13.7.75q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Zm-5.9 5.85L8.1 20.1h3.2v-1.65l4.85 2.45h-3.2ZM5.15 15Zm13.7.05Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterW100.displayName = 'AmauiIconMaterialElectricScooterW100';

export default IconMaterialElectricScooterW100;
