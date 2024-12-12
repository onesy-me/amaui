import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFluidBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalance'

      short_name='FluidBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 480ZM760-40q-33 0-56.5-23.5T680-120v-44q-69-14-114.5-68.5T520-360v-200q0-33 23-56.5t57-23.5h240q33 0 56.5 23.5T920-560v200q0 73-45.5 127.5T760-164v44h80q17 0 28.5 11.5T880-80q0 17-11.5 28.5T840-40h-80Zm30-360h50v-160H600v80h30q33 0 62.5 15t49.5 41q8 12 21 18t27 6Zm-70 160q39 0 70-22.5t43-57.5h-43q-33 0-62.5-14.5T678-376q-9-11-21.5-17.5T630-400h-30v40q0 51 34.5 85.5T720-240Zm-42-184Zm-278-96q17 0 28.5-11.5T440-560q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520h120Zm0 160q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h680q17 0 28.5 11.5T880-760q0 17-11.5 28.5T840-720H160v480h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Z"/>
    </Icon>
  );
});

IconMaterialFluidBalance.displayName = 'OnesyIconMaterialFluidBalance';

export default IconMaterialFluidBalance;
