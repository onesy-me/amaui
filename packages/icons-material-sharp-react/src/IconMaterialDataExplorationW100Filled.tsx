import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataExplorationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationW100Filled'

      short_name='DataExploration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-164q11 0 19.5-8.5T796-192q0-11-8.5-19.5T768-220q-11 0-19.5 8.5T740-192q0 11 8.5 19.5T768-164Zm-288 32q-95.27 0-177.14-47.5Q221-227 173-316l151-151 131 112 211-210v99h28v-148H546v28h100L454-394 321-505 160-344q-14-29-21-66.63-7-37.63-7-69.37 0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v348H480Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100Filled.displayName = 'OnesyIconMaterialDataExplorationW100Filled';

export default IconMaterialDataExplorationW100Filled;
