import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPostAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAdd'

      short_name='PostAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320q17 0 28.5 11.5T560-800q0 17-11.5 28.5T520-760H200v560h560v-320q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v320q0 33-23.5 56.5T760-120H200Zm160-160q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360h240q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360Zm0-120q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480h240q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400H360Zm0-120q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h240q17 0 28.5 11.5T640-560q0 17-11.5 28.5T600-520H360Zm360-80q-17 0-28.5-11.5T680-640v-40h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600Z"/>
    </Icon>
  );
});

IconMaterialPostAdd.displayName = 'OnesyIconMaterialPostAdd';

export default IconMaterialPostAdd;
