import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMemoryAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAlt'

      short_name='MemoryAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360q17 0 28.5-11.5T320-400v-160q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm200 0q17 0 28.5-11.5T520-400v-160q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v160q0 17 11.5 28.5T480-360Zm200 0q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600q-17 0-28.5 11.5T640-560v160q0 17 11.5 28.5T680-360Zm-520 80h640v-400H160v400Zm0 0v-400 400Zm0 80q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h40v-40q0-17 11.5-28.5T240-840q17 0 28.5 11.5T280-800v40h160v-40q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v40h160v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200h-40v40q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-40H520v40q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-40H280v40q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-40h-40Z"/>
    </Icon>
  );
});

IconMaterialMemoryAlt.displayName = 'OnesyIconMaterialMemoryAlt';

export default IconMaterialMemoryAlt;
