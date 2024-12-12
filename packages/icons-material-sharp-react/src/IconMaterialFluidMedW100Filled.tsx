import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidMedW100Filled'

      short_name='FluidMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M726-156q-24.75 0-42.37-17.63Q666-191.25 666-216v-37q-57-5-95.5-47T532-400v-228h296v228q0 58-38.5 100T694-253v37q0 14 9 23t23 9h88v28h-88Zm24-258h50v-186H560v106h30q26 0 50 12t41 34q11.5 17 30.19 25.5T750-414ZM324-142l-28-21v-149h-44q-24.75 0-42.37-17.63Q192-347.25 192-372v-288h-28v-28h132v-72h-50v-28h128v28h-50v72h132v28h-28v288q0 24.75-17.62 42.37Q392.75-312 368-312h-44v170Zm-72-198h116q14 0 23-9t9-23v-56h-94v-28h94v-88h-94v-28h94v-88H220v288q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialFluidMedW100Filled.displayName = 'OnesyIconMaterialFluidMedW100Filled';

export default IconMaterialFluidMedW100Filled;
