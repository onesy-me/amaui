import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorCo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorCo'

      short_name='DetectorCo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-360q-25 0-42.5-17.5T280-420q0-25 17.5-42.5T340-480q25 0 42.5 17.5T400-420q0 25-17.5 42.5T340-360Zm140 120q-25 0-42.5-17.5T420-300q0-25 17.5-42.5T480-360q25 0 42.5 17.5T540-300q0 25-17.5 42.5T480-240ZM340-120q-25 0-42.5-17.5T280-180q0-25 17.5-42.5T340-240q25 0 42.5 17.5T400-180q0 25-17.5 42.5T340-120Zm280-240q-25 0-42.5-17.5T560-420q0-25 17.5-42.5T620-480q25 0 42.5 17.5T680-420q0 25-17.5 42.5T620-360Zm0 240q-25 0-42.5-17.5T560-180q0-25 17.5-42.5T620-240q25 0 42.5 17.5T680-180q0 25-17.5 42.5T620-120Zm140-120q-25 0-42.5-17.5T700-300q0-25 17.5-42.5T760-360q25 0 42.5 17.5T820-300q0 25-17.5 42.5T760-240Zm-560 0q-25 0-42.5-17.5T140-300q0-25 17.5-42.5T200-360q25 0 42.5 17.5T260-300q0 25-17.5 42.5T200-240Zm0-560v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetectorCo.displayName = 'OnesyIconMaterialDetectorCo';

export default IconMaterialDetectorCo;
