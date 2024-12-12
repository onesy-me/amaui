import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCharger = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Charger'

      short_name='Charger'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m471-197 166-324q5-10-1-19.5t-17-9.5H512v-209q0-8-7.5-9.5T493-763L327-439q-5 10 1 19.5t17 9.5h107v209q0 8 7.5 9.5T471-197Zm9 117q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialCharger.displayName = 'OnesyIconMaterialCharger';

export default IconMaterialCharger;
