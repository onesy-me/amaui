import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoney = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Money'

      short_name='Money'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-320h120q17 0 28.5-11.5T760-360v-240q0-17-11.5-28.5T720-640H600q-17 0-28.5 11.5T560-600v240q0 17 11.5 28.5T600-320Zm40-80v-160h40v160h-40Zm-280 80h120q17 0 28.5-11.5T520-360v-240q0-17-11.5-28.5T480-640H360q-17 0-28.5 11.5T320-600v240q0 17 11.5 28.5T360-320Zm40-80v-160h40v160h-40Zm-120 40v-240q0-17-11.5-28.5T240-640q-17 0-28.5 11.5T200-600v240q0 17 11.5 28.5T240-320q17 0 28.5-11.5T280-360ZM80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm80 0h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMoney.displayName = 'OnesyIconMaterialMoney';

export default IconMaterialMoney;
