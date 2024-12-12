import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapas = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tapas'

      short_name='Tapas'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-17 0-28.5-11.5T240-80v-320h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40q0-17 11.5-28.5T280-920q17 0 28.5 11.5T320-880v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v320q0 17-11.5 28.5T280-40ZM160-480h240q8 0 14-6t6-14q0-8-6-14t-14-6H160q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-240h240q8 0 14-6t6-14q0-8-6-14t-14-6H160q-8 0-14 6t-6 14q0 8 6 14t14 6Zm520 600v-286q-53-14-86.5-56.5T560-560v-320q0-17 11.5-28.5T600-920h240q17 0 28.5 11.5T880-880v320q0 55-33.5 97.5T760-406v286h40q17 0 28.5 11.5T840-80q0 17-11.5 28.5T800-40H640q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h40Zm40-360q33 0 56.5-23.5T800-560v-80H640v80q0 33 23.5 56.5T720-480Zm-80-240h160v-120H640v120ZM140-480v-40 40Zm0-240v-40 40Zm580 80Z"/>
    </Icon>
  );
});

IconMaterialTapas.displayName = 'OnesyIconMaterialTapas';

export default IconMaterialTapas;
